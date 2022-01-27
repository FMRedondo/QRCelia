@php
    $id = Request()->id;
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/estilos/puntoDeInteres.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>QRCelia</title>
</head>
<body>
    <main id="app">
        <interestpoint-page v-on:scroll.native="scrollNav" :idpoint=@php echo $id;@endphp></interestpoint-page>        
    </main>
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="/js/front/sliders.js"></script>
</body>
</html>