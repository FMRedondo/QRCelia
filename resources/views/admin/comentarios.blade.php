@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
   
@stop

@section('content')


  @csrf


  <div class="d-flex mb-3 pt-5 flex-row row container m-auto">
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
      <button type="button" class="btn btn-labeled btn-success btnAddType disable">
          <span class="btn-label"><i class="fa-solid fa-plus"></i></span>Añadir
      </button>
    </div>
  </div>
  
    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>

  <!-- Tabla de datos -->
  <div class="contenidoPrincipal container m-auto"></div>

  <!-- Cartel para eliminar una categoria -->
  <div class="delTypePanel d-none">
    <div class="alignCloseButton">
      <button type="button" class="btn btn-danger closeWindow">
        <i class="fa-solid fa-xmark"></i>
      </button> 
    </div>
    <div class="d-flex justify-content-center">
      <p class="error-font fw-bolder text-danger">
        ¿Estás seguro de que deseas eliminar esta categoría?
      </p>
    </div>
    <div class="px-4 py-3 text-sm d-flex flex-row justify-content-around">
      <button type="button" class="btn btn-primary btnDelTypeYes" data-id=''>Sí</button>
      <button type="button" class="btn btn-danger btnDelTypeNo">No</button>
    </div>  
  </div>

  <div class="my-1 mt-5 mb-3 shadow-lg">
    <label class="sr-only" for="inlineFormInputGroupUsername"></label>
  </div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/app.css">

@stop

@section('js')
<script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
<script src="/js/admin/comentarios.js"></script>
@stop