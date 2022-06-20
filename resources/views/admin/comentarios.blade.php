@extends('adminlte::page')

@section('title',  'QRCelia | Comentarios')

@section('content_header')
   
@stop

@section('content')


  @csrf


  <div class="d-flex mb-3 pt-5 flex-row row container m-auto">
    <!-- Barra para buscar -->
    <div class="input-group col-12 searchBar">
      <input type="text" class="form-control searchComments" placeholder="Buscar...">
      <div class="input-group-append searchTypeButton">
        <span class="input-group-text" class="btnSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  </div>


  <!-- Tabla de datos -->
  <div class="contenidoPrincipal container m-auto">
    <div class="card mt-5">
      <div class="card-header">
          <h3 class="card-title text-white">COMENTARIOS</h3>
      </div>

      <div class="card-body p-0">
          <table class="table table-striped">
              <thead>
                  <tr>
                     
                      <th>Contenido</th>
                      <th>Punto de interes</th>
                      <th style="width: 40px">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                @php
      
                foreach ($comments as $comment){
                  echo "<tr id='".$comment->id."'>";
                    echo "<td>".$comment->comment."</td>";
                    echo "<td>".$comment->idPoint."</td>";
                    echo " <td><span class='badge bg-danger'><button type='button' class='btn btn-danger btnDelComments' data-id='". $comment->id."'>Eliminar</button></span></td>";
                    echo "</tr>";
                }
                
              @endphp
               
                
              </tbody>
          </table>
      </div>
  </div>
  </div>

  <!-- Cartel para eliminar un comentario-->
  <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white delCommentsPanel delPanel">
    <div class="">
      <div class="text-center p-5 flex-auto justify-center">
        <i class="fa-solid fa-circle-info" style="color: #ef4444;"></i>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
          <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h3>
          <p class="text-sm text-gray-500 px-8">Esta opción es irreversible, si borras el comentario, no lo podras recuperar</p>    
      </div>
      <div class="p-3  mt-2 text-center space-x-4 md:block">
          <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow" data-val='false'>Cancelar</button>
          <button class="mb-2 md:mb-0 bg-red border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 btnWindow" data-val='true'>Borrar</button>
      </div>
    </div>
  </div>
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
<script src="/js/admin/comments.js"></script>
@stop