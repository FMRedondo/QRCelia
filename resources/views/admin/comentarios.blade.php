@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
   
@stop

@section('content')

<section class="container mx-auto p-6 font-mono contenidoPrincipal">
  @csrf

  <h1 class='h1'>Lista de comentarios</h1>

  <div class="my-1 mt-5 mb-3 shadow-lg">
    <label class="sr-only" for="inlineFormInputGroupUsername"></label>
    <div class="input-group">
      <input type="text" class="form-control searchComments" id="inlineFormInputGroupUsername" placeholder="busqueda de comentarios">
      <div class="input-group-prepend">
        <div class="input-group-text"><i class="fas fa-search"></i></div>
      </div>
    </div>
  </div>

  <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>
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