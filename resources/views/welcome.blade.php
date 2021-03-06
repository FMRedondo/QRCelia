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
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/home.css">
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$titulo}}</title>
</head>
<body>

    <div id="loadSection">
        <div class="backShadow">
            <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
    </div>

    <section id="app" class="home">
        <header-component v-on:scroll.native="scrollNav"></header-component>
        <div class="datos" id="datosHome">
        </div>

    </section>
    
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="/js/front/loadHomeContent.js"></script>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
</body>
</html>