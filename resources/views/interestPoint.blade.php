@php
    use App\Http\Controllers\admin\customizationController;
    $id = Request()->id;
    $title = customizationController::getTitle();
    foreach ($title as $name) {
        $titulo = $name->value;
    }
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/puntoDeInteres.css">
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{$titulo}}</title>
</head>
<body>

    <div id="loadSection">
        <div class="backShadow">
            <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
    </div>

    <main id="app">
        <interestpoint-page v-on:scroll.native="scrollNav" :idpoint=@php echo $id;@endphp></interestpoint-page>        
    </main>

    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="/js/front/sliders.js"></script>
</body>
</html>