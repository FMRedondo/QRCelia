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

  <!-- Cartel para añadir un recurso -->
  <div class="w-50 m-auto mx-auto my-auto rounded-xl shadow-lg  bg-white addPanel" style="top: 10% !important;">
    <div class="titleContent d-flex justify-content-between p-2">
      <div class="text-center">
        <h2 class="mt-1 text-3xl font-bold text-gray-900">Subir un nuevo recurso</h2>
          <p class="mt-2 text-sm text-gray-400">Imágenes, videos y audios</p>
      </div>
      <div class="cerrarVentana">
      <div class="closeModifyWindow" style="color:#dc3545;">
          <i type="button" class="fa-solid fa-circle-xmark fa-3x"></i>
      </div>
      </div>
    </div>
    <form class="mt-2 space-y-3" enctype="multipart/form-data">
      @csrf
      <div class="grid grid-cols-1 space-y-2">
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg w-full h-60 p-10 group text-center">
              <div class="h-full w-full text-center flex flex-col items-center justify-center items-center" id="preview">
                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image">
                </div>
                <p class="pointer-none text-gray-500 ">
                  <span class="text-sm">Arrastra y suelta</span>
                   los ficheros a esta ventana <br /> o
                    <a href="" id="" class="text-blue-600 hover:underline">haz click y</a>
                  seleccionalos</p>
              </div>
                <input type="file" id="resourceUpload" multiple name="resourceUpload" class="hidden">
              </label>
          </div>
      </div>
        <p class="text-sm text-gray-300">
          <span>Tipos de archivo permitidos: muchos</span>
        </p>
      <div>
        <button type="submit" id="btnSendAddResource" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
          Subir archivos
        </button>
      </div>
    </form>
  </div>

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