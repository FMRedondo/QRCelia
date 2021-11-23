@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Esta es la pagina de las categorias</h1>
@stop

@section('content')
<section class="container mx-auto p-6 font-mono">
  <!-- Bara de arriba -->
  <div class="d-flex mb-3 flex-row row">
    <!-- Barra para buscar -->
    <div class="input-group col-10 searchBar">
      <input type="text" class="form-control searchText" placeholder="Buscar...">
      <div class="input-group-append">
        <span class="input-group-text" class="searchButton">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <!-- Boton de aniadir -->
    <div class="input-group col-2">
    <button type="button" class="btn btn-labeled btn-success">
         <span class="btn-label"><i class="fa-solid fa-plus"></i></span>Añadir</button>
    </div>
  </div>

  <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>

  <!-- Tabla de datos -->
  <div class="contenidoPrincipal">

  </div>
    
  </section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/typesIndex.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/types.js"></script>
@stop