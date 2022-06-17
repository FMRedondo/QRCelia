@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
  <meta name="csrf-token" content="{{ csrf_token() }}">
@stop

@section('content')

<div class="row">
  <div class="col-md-3">
       <div class="mb-3">
              <div class="col-12 input-group searchBar">
                  <input type="text" class="form-control searchText searchResource" placeholder="Busca tu punto de interes" id="searchPoint">
                  <div class="input-group-append searchResourceButton">
                    <span class="input-group-text" class="btnSearch ">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>

                <div class="col-12 input-group mt-3">
                    <select class="searchByPoint" name="puntos[]">
                        <option value="AL">Alabama</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>


          </div>
     
      <div class="card card-dark shadow-none mb-5">
          <div class="card-header">
              <h3 class="card-title">Tipo de contenido</h3>
              <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                      <i class="fas fa-minus"></i>
                  </button>
              </div>

          </div>

          <div class="card-body">
              <div class="form-check">
                  <input class="form-check-input checkType" data-type="video" type="checkbox" value="" id="insertVideo">
                  <label class="form-check-label mr-3" for="flexCheckDefault">
                      Vídeo
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input checkType" data-type="audio" type="checkbox" value="" id="insertAudio">
                  <label class="form-check-label mr-3" for="flexCheckDefault">
                      Audio
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input checkType" data-type="image" type="checkbox" value="" id="insertImage">
                  <label class="form-check-label mr-3" for="flexCheckDefault">
                      Imagenes
                  </label>
              </div>
          </div>

          <div class="">
              <div class="shadow-none mb-3 w-100">
                  <div>
                      <button type="button" class="btn btn-block bg-gradient-success btnAddResource" id="addbtn" ><i class="fa-solid fa-plus"></i> Añadir recursos</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="col-md-9">
      <!-- principio tabla -->
      <div id="resourceList" class="xl:w-1/3 md:w-1/2 p-4 d-flex flex-wrap contenidoPuntos contenido" style="gap:3em">
          <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center m-auto mt-25"></i>
      </div>
      <!-- fin tabla -->
  </div>
</div>

<div class='backPanel' id="backpanel"></div>

  
@stop

@section('css')
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="/js/admin/resources.js"></script>
@stop