@extends('adminlte::page')

@section('title', 'QRCelia | Usuarios')

@section('content_header')
@stop

@section('content')
    @csrf

    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-lg-3">Estos son los filtros y todo eso</div>
            <div class="col-lg 9">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title text-white">LISTA DE USUARIOS</h3>
                    </div>
                    <div class="card-body p-0">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Contraseña</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
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
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/users.js"></script>
@stop
