@extends('adminlte::page')

@section('title', 'Ficha puntos interes')

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







@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/jquery-3.6.0.min.js"></script>
@stop