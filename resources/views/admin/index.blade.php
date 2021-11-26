@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
@stop

@section('content')

    <section class="atajos">
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
            <canvas id="contenidoPuntos" width="100%" height="50%"></canvas>
         </div>
         
         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
            Total de contenido y usuarios
         </div>
         
         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
           Acceso directo a los contenikdos
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
    <script src="/plugin/charts/Chart.min.js"></script>
    <script>
       var ctx= document.getElementById("contenidoPuntos").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Recursos','Puntos de interes','Comentarios', 'categorias'],
                datasets:[{
                        label:'Contenido',
                        data:[90,85,70, 10, 22],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)',
                            'purple',
                            'orange'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });
    </script>
@stop