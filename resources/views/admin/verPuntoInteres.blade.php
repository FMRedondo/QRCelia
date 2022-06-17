@extends('adminlte::page')

@section('title',  'QRCelia | Ficha de Punto de Interes')

@section('content_header')
    
@stop

@section('content')

@php
    $id = $_POST['id'];

    $puntoInteres = DB::select("SELECT * FROM interest_points WHERE (id = '$id')");
    if ($puntoInteres != NULL) {
        $ficha = true;   
    }

    else{
        $ficha = false;
        echo "<h1>No hay ningun punto de interes con ese nombre :(</h1>";
    }

    if($ficha){
        foreach ($puntoInteres as $value) {
           $titulo = $value -> name;
           echo $titulo;
        }
    }
    

@endphp

<textarea class="ckeditor" name="editor1" id="editor1" rows="10" cols="80"></textarea>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/fichaPuntosInteres.js"></script>
    <script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
@stop