<!DOCTYPE html>
<html lang="en">
  <head>
<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Fonts first -->
    <link rel="stylesheet" href="{{ asset('css/fonts.css') }}" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link rel="stylesheet" href="{{ asset('css/gsap.css') }}" />
    <!-- Font Awesome 4 first -->
    <link rel="stylesheet" href="{{ asset('css/font-awesome4.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min4.css') }}" />

    <!-- Font Awesome 7 after -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
    />

    <!-- Vendor libraries -->
    <link
      rel="stylesheet"
      href="https://codepen.io/GreenSock/pen/qEWKyrL.css"
    />
    <link href="https://unpkg.com/aos@@2.3.1/dist/aos.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/slick.css') }}" />

    <!-- Your custom styles last -->
    <link
      rel="stylesheet"
      href="https://codepen.io/GreenSock/pen/xxmzBrw.css"
    />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
    <title>Hafeez</title>
  </head>
  <body>
    @yield('content')
  </body>
</html>
