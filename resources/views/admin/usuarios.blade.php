@extends('adminlte::page')

@section('title', 'Dashboard')



@section('content')
@csrf
<section class="container mx-auto p-6 font-mono">
    <!-- Barra de arriba -->
    <div class="d-flex mb-3 pt-5 flex-row row">
    <!-- Barra busqueda-->
    <div class="input-group col-10 searchBar">
        <input type="text" class="form-control searchUsers" placeholder="Buscar...">
        <div class="input-group-append searchUsersButton">
            <span class="input-group-text" class="btnSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
    </div>


   <div class="contenidoPrincipal"></div>

    <!-- Cartel para eliminar una categoria -->
    <div class="delUserPanel">
        <div class="alignCloseButton">
        <button type="button" class="btn btn-danger closeWindowDeleteUser btnWindow" data-val='false'>
            <i class="fa-solid fa-xmark"></i>
        </button> 
        </div>
        <div class="d-flex justify-content-center">
        <p class="error-font fw-bolder text-danger">
            ¡Atencion! Estas a punto de eliminar un Usuario
        </p>
        </div>
        <div class="px-4 py-3 text-sm d-flex flex-row justify-content-around">
        <button type="button" class="btn btn-primary btnWindow btnDelUserYes" data-val='true'>Sí</button>
        <button type="button" class="btn btn-danger btnWindow btnDelUserNo" data-val='false'>No</button>
        </div>  
    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="/js/admin/users.js"></script>
@stop