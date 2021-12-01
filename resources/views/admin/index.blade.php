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
            <canvas id="myChart2" width="100%" height="50%"></canvas>
         </div>
         
         <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 atajo">
            <div class="container flex flex-col gap-5 mx-2">
                <label class="text-gray-100 font-semibold tracking-wider text-lg">Acceso directos</label>
                <div class="bg-gray-100 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total de puntos</label>
                        <label class="text-green-800 text-4xl font-bold">( x puntos )</label>

                    </div>
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total de comentarios</label>
                        <label class="text-green-800 text-4xl font-bold">( x comentarios )</label>

                    </div>
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total de recursos</label>
                        <label class="text-green-800 text-4xl font-bold">( x recursos )</label>

                    </div>
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total de categorias</label>
                        <label class="text-green-800 text-4xl font-bold">( x categorias )</label>

                    </div>
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
    <script src="/plugin/charts/Chart.min.js"></script>
    <script>
       var ctx= document.getElementById("contenidoPuntos").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Recursos','Puntos de interes','Comentarios', 'categorias', 'usuarios'],
                datasets:[{
                        label:'Contenido',
                        data:[90,85,85, 90, 2],
                        backgroundColor:[
                            'red',
                            'yellow',
                            'yellow',
                            'red',
                            'black'
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



        var ctx= document.getElementById("myChart2").getContext("2d");
        var myChart2= new Chart(ctx,{
            type:"doughnut",
            data:{
                labels:['Religioso','Arte','Historico'],
                datasets:[{
                        label:'Tipos de putos de insteres',
                        data:[30,206,22],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
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