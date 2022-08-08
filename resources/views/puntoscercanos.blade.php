@php
    use App\Http\Controllers\admin\customizationController;
    $title = customizationController::getTitle();
    foreach ($title as $name) {
        $titulo = $name->value;
    }
@endphp

<!DOCTYPE html>
<html lang="es-ES">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <title>Puntos cercanos {{$titulo}}</title>
</head>
<body>
    <section id="app">
        <cercanos-page/>
    </section>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
</body>
</html>