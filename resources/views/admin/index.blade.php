@extends('adminlte::page')

@section('title', 'QRCelia | Admin')

@section('content_header')
@stop

@section('content')
    <div class="row col-md-12">
        <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>{{ $puntosInteres }}</h3>
                    <p>Puntos de interes</p>
                </div>
                <div class="icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <a href="/admin/puntosInteres" class="small-box-footer">
                    Ver puntos <i class="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>{{ $categorias }}</h3>
                    <p>Categorias</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
                <a href="/admin/categorias" class="small-box-footer">
                    Ver categorias <i class="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>{{ $recursos }}</h3>
                    <p>Recursos</p>
                </div>
                <div class="icon">
                    <i class="fas fa-user-plus"></i>
                </div>
                <a href="/admin/recursos" class="small-box-footer">
                    Ver recursos <i class="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-6">
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>{{ $comentarios }}</h3>
                    <p>Comentarios</p>
                </div>
                <div class="icon">
                    <i class="fas fa-chart-pie"></i>
                </div>
                <a href="/admin/comentarios" class="small-box-footer">
                    Ver comentarios <i class="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">RECURSOS</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body" style="display: block;">
                            <div class="chart">
                                <div class="chartjs-size-monitor">
                                    <div class="chartjs-size-monitor-expand">
                                        <div class=""></div>
                                    </div>
                                    <div class="chartjs-size-monitor-shrink">
                                        <div class=""></div>
                                    </div>
                                </div>
                                <canvas id="contenidoPuntos"
                                    style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 764px;"
                                    width="764" height="250" class="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card card-danger">
                        <div class="card-header">
                            <h3 class="card-title">USUARIOS</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card"
                                style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 764px;"
                                width="764" height="250">
                                <div class="card-body p-0">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($listaUsuarios as $usuario)
                                                <tr>
                                                    <td>{{$usuario -> name}}</td>
                                                    <td>{{$usuario -> email}}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">INFORMACIÓN</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 764px;"
                                width="764" height="250" class="chartjs-render-monitor">
                                <p>QRCelia es un CMS (gestor de contenidos) con el cual podrás tener diferentes
                                    puntos de interés con una serie de información como puede ser galería de
                                    imágenes, texto, audio y videos. Es un excelente gestor para museos, sitios
                                    culturales, y cualquier tipo de edificio en el que tengamos diferentes
                                    sitios/secciones interesantes de los cuales queremos dar una serie de
                                    información con el simple gesto de escanear un QR.
                                    Ha sido desarrollado por los <strong>alumnos de 2 DAW del I.E.S. Celia
                                        viñas</strong>. Los autores son <strong> Francisco Manuel
                                        Redondo</strong> y <strong>Francisco Javier Martínez</strong>, con ayuda
                                    de todos los compañeros y profesores. La URL del repositorio original la
                                    tienes disponible en el siguiente <strong><a
                                            href="https://github.com/FMRedondo/QRCelia">enlace</a></strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-info">
                        <div class="card-header">
                            <h3 class="card-title">PUNTOS DE INTERES</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body" style="display: block;">
                            <div class="card"
                                style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 764px;"
                                width="764" height="250">
                                <div class="card-body p-0">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($listaUsuarios as $usuario)
                                                <tr>
                                                    <td>{{$usuario -> name}}</td>
                                                    <td>{{$usuario -> email}}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    @stop

    @section('css')
        <link rel="stylesheet" href="/css/estilosGenerales.css">
        <link rel="stylesheet" href="/css/adminLTE.css">
        <link rel="stylesheet" href="/css/panel.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="/estilos/admin/atajos.css">
    @stop

    @section('js')
        <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
        <script src="/js/admin/panelesadmin.js"></script>
        <script src="/plugin/charts/Chart.min.js"></script>
    @stop
