@extends('adminlte::page')

@section('title', 'Ficha puntos interes')

@section('content_header')
    
@stop

@section('content')

@php
    $nombre = Request()->nombre;

    $puntoInteres = DB::select("SELECT * FROM interest_points WHERE (name = '$nombre')");

@endphp


<p>@php echo $puntoInteres; @endphp</p>






@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/jquery-3.6.0.min.js"></script>
@stop