@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
<meta name="csrf-token" content="{{ csrf_token() }}">
@stop

@section('content')

<div class="d-flex mb-3 pt-5 flex-row row">
    <!-- Barra para buscar -->
    <div class="col-10 input-group searchBar" style="width: 83.33333333%;">
      <input type="text" class="form-control searchText searchPoint" placeholder="Buscar..." id="searchPoint">
      <div class="input-group-append searchTypeButton">
        <span class="input-group-text" class="btnSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <!-- Boton de aniadir -->
    <div class="col-2 input-group justify-content-center" style="width: 16.66666667%;">
      <button type="button" class="btn btn-labeled btn-success btnAddPoint" id="addbtn">
          <span class="btn-label"><i class="fa-solid fa-plus"></i></span>Añadir
      </button>
    </div>
  </div>

  <!-- FORMULARIO PARA AÑADIR NUEVO PUNTO DE INTERES -->
  <div class="w-50 m-auto p-3  mx-auto my-auto rounded-xl shadow-lg  bg-white addPanel bigPanel" id="addPanel">
    <div class="">
      <div class="text-center p-3 flex-auto justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" data-prefix="fas" data-icon="circle-plus" class="svg-inline--fa fa-circle-plus w-16 h-16 flex items-center mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#218838" stroke="#218838">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256C397.4 512 512 397.4 512 256S397.4 0 256 0zM352 280H280V352c0 13.2-10.8 24-23.1 24C242.8 376 232 365.2 232 352V280H160C146.8 280 136 269.2 136 256c0-13.2 10.8-24 24-24H232V160c0-13.2 10.8-24 24-24C269.2 136 280 146.8 280 160v72h72C365.2 232 376 242.8 376 256C376 269.2 365.2 280 352 280z"></path>
        </svg>
          <h2 class="text-xl font-bold py-4 ">Añadir nuevo punto interes</h2>
          <form action="" method="post" enctype="multipart/form-data">
            <div class='form-group mb-4'>  
              <label class='mb-2'>Nombre:</label>  
              <input type='text' class='form-control typeName rounded-pill' placeholder='Introduce el nombre del punto' id="typeName" name='typeName'>  
            </div>
            <div class='form-group mb-4'>  
              <label class='mb-2'>Descripcion:</label>
              <input type='text' class='form-control typeName rounded-pill' placeholder='Introduce la descripcion del punto' id="typeDesc" name='typeDesc'> 
            </div>
            <div class='form-group mb-4'>  
              <label class='mb-2'>texto:</label>
              <textarea class="ckeditor" name="texto" id="texto"  rows="10" cols="88"></textarea> 
            </div>
            <div class='form-group mb-4'>  
              <label class='mb-2'>Poster:</label>
             <input type="file" name="poster" id='poster'>
            </div> 
        </div>
        <div class=" text-center space-x-4 md:block d-flex justify-center">
            <input type="reset" class="mb-3 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow closeWindow btnAddType closeWindowAddType" data-val='false' id="closeWindows" value="Cancelar">
            <input type="submit" class="mb-3 md:mb-0 bg-green border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 btnWindow btnSendAddType btn btn-lg btn-success" data-val='true' id="savePoint" value="Añadir">
        </div>
          </form>
    </div>
  </div>

  <!-- Cartel para eliminar una categoria -->
  <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white delTypePanel delPanel">
    <div class="">
      <div class="text-center p-5 flex-auto justify-center">
          <i class="fa-solid fa-circle-info" style="color: #ef4444;"></i>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h2>
          <p class="text-sm text-gray-500 px-8">Esta opción es irreversible, si borras la categoría, no la podras recuperar</p>    
      </div>
      <div class="p-3  mt-2 text-center space-x-4 md:block">
          <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow" data-val='false'>Cancelar</button>
          <button class="mb-2 md:mb-0 bg-red border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 btnWindow" data-val='true'>Borrar</button>
      </div>
    </div>
  </div>
  
    
<div class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap contenidoPuntos" style="gap:3em">
    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center m-auto mt-25"></i>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap" id="resourceList" style="gap:3em">
<div id='imagenesRelacionadas'></div>
</div>
<div class='backPanel' id="backpanel"></div>

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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js" integrity="sha512-zYXldzJsDrNKV+odAwFYiDXV2Cy37cwizT+NkuiPGsa9X1dOz04eHvUWVuxaJ299GvcJT31ug2zO4itXBjFx4w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/js/admin/interestPoints.js"></script>
    <script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
@stop