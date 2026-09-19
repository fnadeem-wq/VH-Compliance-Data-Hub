#!/usr/bin/env pwsh
param()

$ErrorActionPreference = "SilentlyContinue"

# Directories
$test_results_dir = "$PSScriptRoot/../test-results"
$lock_file = "$test_results_dir/run.lock"
$dirty_flag = "$test_results_dir/dirty.flag"
$log_file = "$test_results_dir/latest.log"
$status_file = "$test_results_dir/status.json"
$autofix_attempts_file = "$test_results_dir/autofix-attempts.json"

# Create directory if needed
if (-not (Test-Path $test_results_dir)) {
  New-Item -ItemType Directory -Path $test_results_dir -Force | Out-Null
}

# Single-flight: if lock exists, just set dirty flag and exit
if (Test-Path $lock_file) {
  New-Item -ItemType File -Path $dirty_flag -Force | Out-Null
  exit 0
}

# Main loop (handles dirty flag for catching latest changes)
$continue_loop = $true
while ($continue_loop) {
  # Acquire lock
  New-Item -ItemType File -Path $lock_file -Force | Out-Null
  Remove-Item $dirty_flag -ErrorAction SilentlyContinue

  # Run tests
  Push-Location (Get-Item $PSScriptRoot).Parent.Parent.FullName
  $test_output = npx playwright test 2>&1 | Tee-Object -FilePath $log_file
  $test_exit = $LASTEXITCODE
  Pop-Location

  # Parse log to extract failure info (simple heuristic)
  $failure_sig = ""
  if ($test_exit -ne 0) {
    # Try to extract the first failing test name
    $match = $test_output | Select-String "FAILED.*" | Select-Object -First 1
    if ($match) {
      $failure_sig = $match.Line -replace "^.*FAILED\s+", "" | % { $_.Substring(0, [Math]::Min(50, $_.Length)) }
    }
  }

  # Write status
  $status = @{
    timestamp = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    exit_code = $test_exit
    passed = if ($test_exit -eq 0) { $true } else { $false }
  }
  $status | ConvertTo-Json | Set-Content $status_file -Encoding UTF8

  # Auto-fix on failure
  if ($test_exit -ne 0 -and $failure_sig -ne "") {
    # Load or create autofix attempts tracker
    $attempts = @{}
    if (Test-Path $autofix_attempts_file) {
      $attempts = Get-Content $autofix_attempts_file | ConvertFrom-Json
    }

    $attempt_count = [int]($attempts.$failure_sig ?? 0)

    # Max 2 attempts per failure signature
    if ($attempt_count -lt 2) {
      # Extract log excerpt for the prompt
      $log_excerpt = ($test_output | Select-String "FAILED|Error|AssertionError" | Select-Object -First 5) -join "`n"
      if ($log_excerpt.Length -gt 500) {
        $log_excerpt = $log_excerpt.Substring(0, 500) + "..."
      }

      # Launch headless Claude fix
      $prompt = "Playwright test failed: $failure_sig`n`nLog excerpt:`n$log_excerpt`n`nInvestigate the failure in the log and fix the code to make the test pass. The test file is at ./tests/smoke.spec.ts and the app code is in ./client/src and ./server/src."

      # Use claude CLI to invoke headless (requires 'claude' in PATH)
      & claude -p $prompt 2>&1 | Out-Null

      # Re-run tests once to verify
      Push-Location (Get-Item $PSScriptRoot).Parent.Parent.FullName
      npx playwright test 2>&1 | Tee-Object -FilePath $log_file | Out-Null
      $test_exit = $LASTEXITCODE
      Pop-Location

      # Update attempt counter
      $attempt_count += 1
      $attempts[$failure_sig] = $attempt_count
      $attempts | ConvertTo-Json | Set-Content $autofix_attempts_file -Encoding UTF8

      # Update status after re-run
      $status.exit_code = $test_exit
      $status.passed = ($test_exit -eq 0)
      $status.timestamp = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
      $status | ConvertTo-Json | Set-Content $status_file -Encoding UTF8
    }
  }

  # Release lock
  Remove-Item $lock_file -ErrorAction SilentlyContinue

  # Check dirty flag: if set, loop once more; else exit
  $continue_loop = Test-Path $dirty_flag
}

exit 0
