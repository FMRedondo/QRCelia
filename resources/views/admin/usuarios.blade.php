@extends('adminlte::page')

@section('title', 'Dashboard')



@section('content')
@csrf
   <p>Em una palabra, el CRUD de los usuarios</p>
   <div class="contenidoPrincipal"></div>
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