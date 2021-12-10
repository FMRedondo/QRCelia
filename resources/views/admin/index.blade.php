@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
@stop

@section('content')

    <section class="atajos">
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo graficaContenido">
            <canvas id="contenidoPuntos" width="100%" height="50%"></canvas>
            <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center mt-5 mb-5"></i>
         </div>
         
         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
            <canvas id="myChart2" width="100%" height="50%"></canvas>
         </div>
         
         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
            <div class="container flex flex-col gap-5 mx-2">
                <label class="text-gray-100 font-semibold tracking-wider text-lg">Acceso directos</label>
                
                <div class="small-box bg-info">
                    <div class="inner">
                      <h3>0</h3>
      
                      <p>Punto de interes</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-bag"></i>
                    </div>
                    <a href="#" class="small-box-footer">ver puntos <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
                    

               
            </div>

           
         </div>

         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo d-flex justify-content-center" height="50%" >
            <iframe  class="justify-content-center" width="560" height="315" src="https://www.youtube.com/embed/VbwWWERn3no"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

    </section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/estilos/admin/atajos.css">
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script src="/js/admin/panelesadmin.js"></script>
    <script src="/plugin/charts/Chart.min.js"></script>
@stop