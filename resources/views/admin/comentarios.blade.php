@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
   
@stop

@section('content')


  @csrf


  <div class="d-flex mb-3 pt-5 flex-row row container m-auto">
    <!-- Barra para buscar -->
    <div class="input-group col-12 searchBar">
      <input type="text" class="form-control searchText searchType" placeholder="Buscar...">
      <div class="input-group-append searchTypeButton">
        <span class="input-group-text" class="btnSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
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



  <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white delCommentsPanel delPanel">
    <div class="">
      <div class="text-center p-5 flex-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h3>
          <p class="text-sm text-gray-500 px-8">Esta opción es irrebersible, si borras el comentario, no lo podras recuperar</p>    
      </div>
      <div class="p-3  mt-2 text-center space-x-4 md:block">
          <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow" data-val='false'>Cancelar</button>
          <button class="mb-2 md:mb-0 bg-red border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 btnWindow" data-val='true'>Borrar</button>
      </div>
    </div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/panel.css">

@stop

@section('js')
<script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
<script src="/js/admin/comments.js"></script>
@stop