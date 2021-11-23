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

  <!-- Tabla de datos -->
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3 text-center">Nombre</th>
              <th class="px-4 py-3 text-center">Fecha creacion</th>
              <th class="px-4 py-3 text-center">Ultima modificación</th>
              <th class="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white">

                <tr class="text-gray-700 typesInfo#1">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">Sufyan</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">22</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary btnShowEditType" data-id='1'>Modificar</button>
                        <button type="button" class="btn btn-danger btnDelType" data-id='1'>Eliminar</button>
                    </td>
                </tr>

          </tbody>
        </table>
      </div>
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
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="/js/admin/types.js"></script>
@stop