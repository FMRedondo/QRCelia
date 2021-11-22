@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Esta es la pagina de las categorias</h1>
@stop

@section('content')
<section class="container mx-auto p-6 font-mono">
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
          <tbody class="bg-white tableContent">
            <!-- Aqui apareceran los resultados -->
          </tbody>
        </table>
        <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5 loadingImage"></i>
      </div>
    </div>
  </section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="/js/admin/types.js"></script>
@stop