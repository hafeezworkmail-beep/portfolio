@echo off
setlocal enabledelayedexpansion

echo ========================================
echo  Tool Check - Hafeez Portfolio
echo ========================================
echo.

set MISSING=0

echo Checking Git...
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo   [MISSING] Git
    set MISSING=1
    echo   Install: winget install Git.Git
    echo   Or download: https://git-scm.com/download/win
) else (
    for /f "delims=" %%i in ('git --version') do echo   [OK] %%i
)

echo.
echo Checking PHP...
where php >nul 2>nul
if %errorlevel% neq 0 (
    echo   [MISSING] PHP
    set MISSING=1
    echo   Install Laragon ^(recommended^): https://laragon.org/download/
    echo   Or XAMPP: https://www.apachefriends.org/download.html
    echo   Or: winget install PHP.PHP.8.3
) else (
    for /f "delims=" %%i in ('php -v ^| findstr /R "^PHP"') do echo   [OK] %%i
)

echo.
echo Checking Composer...
where composer >nul 2>nul
if %errorlevel% neq 0 (
    echo   [MISSING] Composer
    set MISSING=1
    echo   Install: https://getcomposer.org/Composer-Setup.exe
    echo   ^(Run the installer after PHP is installed^)
) else (
    for /f "delims=" %%i in ('composer -V') do echo   [OK] %%i
)

echo.
echo ========================================
if %MISSING%==1 (
    echo  Some tools are missing. Install them above, then run setup.bat
    echo ========================================
    echo.
    pause
    exit /b 1
) else (
    echo  All tools installed! Run setup.bat to start the app.
    echo ========================================
    echo.
    exit /b 0
)
