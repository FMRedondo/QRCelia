@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content')
    <div id="contenidoPrincipal" class="pt-5 d-flex col-12 gap-3">
        <div class="col-6 shadow-lg p-3">
            <h2 class="h2">Personalización</h2>
            <div class="p-4 d-flex flex-wrap contenidoPersonalizacion col-12" id="contenido" style="gap:3em">
                <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center m-auto mt-25 col-12"></i>
            </div>
        </div>
        <div class="col-6 shadow-lg p-3">
            <h2 class="h2">Vista previa</h2>
            <iframe src="/" frameborder="0" width="100%" height="700" class="vistaPrevia" id='frame' allowfullscreen></iframe>
        </div>
    </div>

  <div id="mensaje"></div>
@stop

@section('css')
        <link rel="stylesheet" href="/css/estilosGenerales.css">
        <link rel="stylesheet" href="/estilos/admin/personalizacion.css">
        <link rel="stylesheet" href="/css/adminLTE.css">
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/panel.css">
        <link rel="stylesheet" href="/css/paginaPersonalizar.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
        @stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/personalizacion.js"></script>
@stop