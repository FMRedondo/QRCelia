@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
@stop

@section('content')
@csrf
<section class="container-fluid mx-auto p-6 font-mono">
  <!-- Bara de arriba -->
  <div class="d-flex mb-3 pt-5 flex-row row">
    <!-- Barra para buscar -->
    <div class="input-group col-10 searchBar" style="width: 83.33333333%;">
      <input type="text" class="form-control searchText searchResource" placeholder="Buscar...">
      <div class="input-group-append searchResourceButton">
        <span class="input-group-text" class="btnSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <!-- Boton de aniadir -->
    <div class="input-group col-2 justify-content-center" style="width: 16.66666667%;">
      <button type="button" class="btn btn-labeled btn-success btnAddResource">
          <span class="btn-label"><i class="fa-solid fa-plus"></i></span>Añadir
      </button>
    </div>
  </div>
  
    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>


  <!-- Tarjetas de recursos -->
  <div class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap" id="resourceList" style="gap:3em">
  </div>
</section>

<div class='backPanel'></div>


@stop

@section('css')
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/resources.js"></script>
@stop