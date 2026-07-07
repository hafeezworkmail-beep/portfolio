#!/usr/bin/env bash
set -euo pipefail

echo "========================================"
echo " Hafeez Portfolio - Laravel Setup"
echo "========================================"
echo

if ! command -v php >/dev/null 2>&1; then
  echo "[ERROR] PHP is not installed."
  echo "Install PHP 8.2+ first, then run this script again."
  exit 1
fi

if ! command -v composer >/dev/null 2>&1; then
  echo "[ERROR] Composer is not installed."
  echo "Install Composer from https://getcomposer.org/download/"
  exit 1
fi

echo "[1/4] Installing PHP dependencies..."
composer install

if [ ! -f .env ]; then
  echo "[2/4] Creating .env file..."
  cp .env.example .env
else
  echo "[2/4] .env already exists, skipping copy."
fi

echo "[3/4] Generating application key..."
php artisan key:generate --force

echo "[4/4] Starting Laravel server..."
echo
echo " Open in your browser: http://127.0.0.1:8000"
echo " Press Ctrl+C to stop the server."
echo

php artisan serve
