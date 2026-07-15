@echo off
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting VH Compliance Data Hub...
echo.
echo Once you see "Local: http://localhost:5173/" below, open that address in your browser.
echo Keep this window open while you use the app. Close it to stop the app.
echo.
call npm run dev
pause
