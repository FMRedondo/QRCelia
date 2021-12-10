@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
@stop

@section('content')
@csrf
<section class="container mx-auto p-6 font-mono">
  <!-- Bara de arriba -->
  <div class="d-flex mb-3 pt-5 flex-row row">
    <!-- Barra para buscar -->
    <div class="input-group col-10 searchBar">
      <input type="text" class="form-control searchText searchType" placeholder="Buscar...">
      <div class="input-group-append searchTypeButton">
        <span class="input-group-text" class="btnSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <!-- Boton de aniadir -->
    <div class="input-group col-2">
      <button type="button" class="btn btn-labeled btn-success btnAddType">
          <span class="btn-label"><i class="fa-solid fa-plus"></i></span>Añadir
      </button>
    </div>
  </div>
  
    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>

  <!-- Tabla de datos -->
  <div class="contenidoPrincipal"></div>

  <!-- Cartel para añadir una categoria -->
  <div class="addPanel">
    <div class="alignCloseButton">
      <button type="button" class="btn btn-danger closeWindow btnAddType closeWindowAddType">
        <i class="fa-solid fa-xmark"></i>
      </button> 
    </div>     
    <h1 class='text-center mt-3'>Añadir categoría</h1>  
    <div class='contenido pt-0'>  
        <div class='form-group mb-4'>  
          <label class='mb-2'>Nombre:</label>  
          <input type='text' class='form-control typeName' placeholder='Introduce el nombre de la categoría' name='typeName'>  
        </div>   
        <div class='form-group mb-4 d-flex justify-content-center'>  
          <button type='submit' class='btnSendAddType btn btn-lg btn-success' id='addType'>Añadir categoria</button>  
        </div>  
    </div>  
  </div>

  <!-- Cartel para eliminar una categoria -->
  <div class="delPanel">
    <div class="alignCloseButton">
      <button type="button" class="btn btn-danger closeWindowDeleteType btnWindow" data-val='false'>
        <i class="fa-solid fa-xmark"></i>
      </button> 
    </div>
    <div class="d-flex justify-content-center">
      <p class="error-font fw-bolder text-danger">
        ¿Estás seguro de que deseas eliminar esta categoría?
      </p>
    </div>
    <div class="px-4 py-3 text-sm d-flex flex-row justify-content-around">
      <button type="button" class="btn btn-primary btnWindow btnDelTypeYes" data-val='true'>Sí</button>
      <button type="button" class="btn btn-danger btnWindow btnDelTypeNo" data-val='false'>No</button>
    </div>  
  </div>

</section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/types.js"></script>
@stop