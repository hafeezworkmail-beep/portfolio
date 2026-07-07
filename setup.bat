@echo off
setlocal enabledelayedexpansion

echo ========================================
echo  Hafeez Portfolio - Laravel Setup
echo ========================================
echo.

where php >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] PHP is not installed or not in PATH.
    echo Install Laragon or XAMPP, then try again:
    echo   https://laragon.org/
    echo   https://www.apachefriends.org/
    pause
    exit /b 1
)

where composer >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Composer is not installed or not in PATH.
    echo Install Composer, then try again:
    echo   https://getcomposer.org/download/
    pause
    exit /b 1
)

echo [1/4] Installing PHP dependencies...
call composer install
if %errorlevel% neq 0 (
    echo [ERROR] composer install failed.
    pause
    exit /b 1
)

if not exist .env (
    echo [2/4] Creating .env file...
    copy .env.example .env >nul
) else (
    echo [2/4] .env already exists, skipping copy.
)

echo [3/4] Generating application key...
php artisan key:generate --force

echo [4/4] Starting Laravel server...
echo.
echo  Open in your browser: http://127.0.0.1:8000
echo  Press Ctrl+C to stop the server.
echo.

php artisan serve

pause
