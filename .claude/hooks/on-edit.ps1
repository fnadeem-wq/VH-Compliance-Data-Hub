#!/usr/bin/env pwsh
param()

# Read JSON from stdin (Claude Code passes the tool-call data)
$input_str = @()
while ($null -ne ($line = Read-Host)) {
  $input_str += $line
}

if ($input_str.Count -eq 0) {
  exit 0
}

$json_str = $input_str -join ""
try {
  $data = ConvertFrom-Json $json_str
} catch {
  exit 0
}

# Extract the file path from tool-call data
$file_path = $data.tool_use.input.file_path
if (-not $file_path) {
  exit 0
}

# Normalize path (convert to forward slashes for comparison)
$file_path = $file_path -replace '\\', '/'

# Check if this file is relevant (under client/src, server/src, or tests/)
$is_relevant = $file_path -match '^(client|server)/src/' -or $file_path -match '^tests/'

# Exclude node_modules, dist, generated
$is_excluded = $file_path -match '(node_modules|dist|generated)/'

if (-not $is_relevant -or $is_excluded) {
  exit 0
}

# Check for disable flag
$disable_file = "$PSScriptRoot/../test-results/disabled"
if (Test-Path $disable_file) {
  exit 0
}

# Launch the background worker as a fully detached process
$worker_script = "$PSScriptRoot/run-tests-and-autofix.ps1"
Start-Process powershell -WindowStyle Hidden -ArgumentList @(
  "-NoProfile"
  "-ExecutionPolicy", "Bypass"
  "-File", "`"$worker_script`""
) -ErrorAction SilentlyContinue

exit 0
