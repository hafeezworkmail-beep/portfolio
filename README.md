# Hafeez Portfolio (Laravel)

Personal portfolio site converted from static HTML to [Laravel](https://laravel.com).

## Requirements

- PHP 8.2 or higher
- [Composer](https://getcomposer.org/)
- PHP extensions: `mbstring`, `xml`, `curl`, `zip`, `pdo_sqlite` (optional, for database)

## Run on your local machine

### Easiest way (recommended)

**Windows:** Double-click `setup.bat`  
Or in Command Prompt / PowerShell inside the project folder:

```bat
setup.bat
```

**Mac / Linux:** In Terminal inside the project folder:

```bash
chmod +x setup.sh
./setup.sh
```

The script installs dependencies, creates `.env`, generates the app key, and starts the server at **http://127.0.0.1:8000**.

### Manual setup

#### 1. Clone the repository

```bash
git clone https://github.com/hafeezworkmail-beep/portfolio.git
cd portfolio
```

If you already have the repo, pull the latest changes:

```bash
git pull origin main
```

#### 2. Install dependencies

```bash
composer install
```

#### 3. Environment setup

```bash
cp .env.example .env
php artisan key:generate
```

#### 4. Start the development server

```bash
php artisan serve
```

Open **http://127.0.0.1:8000** in your browser.

## Project structure

| Path | Description |
|------|-------------|
| `public/css`, `public/js`, `public/images`, `public/fonts` | Static assets |
| `resources/views/home.blade.php` | Main portfolio page |
| `resources/views/layouts/app.blade.php` | HTML layout wrapper |
| `app/Http/Controllers/HomeController.php` | Home page controller |
| `routes/web.php` | Routes |

## Windows quick setup

1. Install [Laragon](https://laragon.org/) or [XAMPP](https://www.apachefriends.org/) (includes PHP)
2. Install [Composer](https://getcomposer.org/download/)
3. Open **Git Bash** or **PowerShell** in the project folder
4. Run the commands from steps 2–4 above

## Notes

- The contact form is display-only for now (no backend submission). You can wire it up later with Laravel mail or a form handler.
- For production, point your web server document root to the `public/` folder.
