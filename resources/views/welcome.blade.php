<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}?v={{ Str::random(40) }}">
</head>

<body>


    <div id="overlays"></div>
    <div id="app"></div>

    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}?v={{ Str::random(40) }}" defer></script>
</body>

</html>