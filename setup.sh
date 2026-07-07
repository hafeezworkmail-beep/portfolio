#!/usr/bin/env bash
set -euo pipefail

echo "========================================"
echo " Hafeez Portfolio - Laravel Setup"
echo "========================================"
echo

install_php_linux() {
  if command -v apt-get >/dev/null 2>&1; then
    echo "Installing PHP via apt-get..."
    sudo apt-get update -qq
    sudo apt-get install -y -qq php-cli php-mbstring php-xml php-curl php-zip unzip
  else
    echo "[ERROR] PHP not found. Install PHP 8.2+ manually."
    exit 1
  fi
}

install_composer() {
  echo "Installing Composer..."
  mkdir -p "$HOME/.local/bin"
  curl -sS https://getcomposer.org/installer | php -- --install-dir="$HOME/.local/bin" --filename=composer
  export PATH="$HOME/.local/bin:$PATH"
}

if ! command -v php >/dev/null 2>&1; then
  echo "[!] PHP not found. Attempting install..."
  install_php_linux
fi

if ! command -v composer >/dev/null 2>&1; then
  if [ -f "$HOME/.local/bin/composer" ]; then
    export PATH="$HOME/.local/bin:$PATH"
  else
    echo "[!] Composer not found. Attempting install..."
    install_composer
  fi
fi

if ! command -v composer >/dev/null 2>&1; then
  echo "[ERROR] Composer still not available. Install from https://getcomposer.org/download/"
  exit 1
fi

echo "[OK] $(php -v | head -1)"
echo "[OK] $(composer -V | head -1)"
echo

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
