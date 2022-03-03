@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content')
    <div id="contenidoPrincipal" style="width: 90%; margin: 0 auto;">
        <div id="ajustesGenerales" class="tituloWeb w-50">
            <div id="ajustesVisuales" class="d-flex flex-column">
                <div class="">
                    <label class="form-label">Título de la web</label>
                    <input type="text" class="form-control" value="QRCELIA">
                </div>
                <div class="faviconWeb">
                    <form enctype="multipart/form-data" class="d-flex flex-column">
                        <label class="form-label">Favicon:</label>
                        <div class="faviconActual">
                            <img src="/img/escudoCelia.png" alt="favicon">
                        </div>
                        <input type="file" id="faviconUpload" name="faviconUpload">
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>    
        <div id="ajustesHome">

        </div>
    </div>
@stop

@section('css')
        <link rel="stylesheet" href="/css/estilosGenerales.css">
        <link rel="stylesheet" href="/css/adminLTE.css">
        <link rel="stylesheet" href="/css/panel.css">
        <link rel="stylesheet" href="/css/paginaPersonalizar.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
@stop