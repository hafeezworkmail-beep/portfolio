#!/usr/bin/env bash

echo "========================================"
echo " Tool Check - Hafeez Portfolio"
echo "========================================"
echo

MISSING=0
OS="$(uname -s)"

check_cmd() {
  local name="$1"
  local cmd="$2"
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "  [OK] $($cmd --version 2>/dev/null | head -1 || $cmd -V 2>/dev/null | head -1)"
  else
    echo "  [MISSING] $name"
    MISSING=1
  fi
}

echo "Checking Git..."
check_cmd "Git" "git"

echo
echo "Checking PHP..."
if command -v php >/dev/null 2>&1; then
  echo "  [OK] $(php -v | head -1)"
else
  echo "  [MISSING] PHP"
  MISSING=1
  if [[ "$OS" == "Darwin" ]]; then
    echo "  Install: brew install php"
  elif command -v apt-get >/dev/null 2>&1; then
    echo "  Install: sudo apt-get install -y php-cli php-mbstring php-xml php-curl php-zip unzip"
  else
    echo "  Install PHP 8.2+ from https://www.php.net/downloads"
  fi
fi

echo
echo "Checking Composer..."
if command -v composer >/dev/null 2>&1; then
  echo "  [OK] $(composer -V | head -1)"
else
  echo "  [MISSING] Composer"
  MISSING=1
  echo "  Install: https://getcomposer.org/download/"
  if [[ "$OS" == "Darwin" ]]; then
    echo "  Or: brew install composer"
  fi
fi

echo
echo "========================================"
if [ "$MISSING" -eq 1 ]; then
  echo " Some tools are missing. Install them above, then run ./setup.sh"
  echo "========================================"
  exit 1
else
  echo " All tools installed! Run ./setup.sh to start the app."
  echo "========================================"
  exit 0
fi
