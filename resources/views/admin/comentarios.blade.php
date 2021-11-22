@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
   
@stop

@section('content')

<section class="container mx-auto p-6 font-mono">
  <h1 class='h1'>Lista de comentarios</h1>
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-5">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">Comentarios</th>
              <th class="px-4 py-3">Puntos</th>
            </tr>
          </thead>
          <tbody class="bg-white contenido">
            
            <tr>
              <td>
                <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>
              </td>
              <td>
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
    <link rel="stylesheet" href="/css/app.css">

@stop

@section('js')
<script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
<script src="/js/admin/comentarios.js"></script>
@stop