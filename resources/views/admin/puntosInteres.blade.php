@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
<meta name="csrf-token" content="{{ csrf_token() }}">
@stop

@section('content')

<div class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap contenidoPuntos" style="gap:3em">
    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center m-auto mt-25"></i>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap" id="resourceList" style="gap:3em"></div>
<div class='backPanel'></div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="/estilos/admin/interestPoints.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/interestPoints.js"></script>
    <script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
@stop