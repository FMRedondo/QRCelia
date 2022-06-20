@extends('adminlte::page')

@section('title', 'QRCelia | Ajustes')

@section('content_header')
  
@stop

@section('content')
<div class="pt-3"></div>
    <div class="callout callout-danger">
        <h5><i class="fas fa-info"></i> AVISO:</h5>
        <p>Esta es la página de los ajustes. En este momento solo tenemos la configuración de los comentarios. Si el
            desarrollo sigue, debe de estar aqui todos los
            ajustes que sean necesarios para el funcionamiento del sistema.</p>
        </p>
    </div>

    <div class="card">
        <div class="card-header">
            <h3 class="card-title text-white">CONFIGURACIÓN</h3>
        </div>

        <div class="card-body p-0">
            <table class="table table-striped">
                <thead>
                    <tr>
                      
                        <th>Nombre</th>
                        <th>Estado</th>
                      
                    </tr>
                </thead>
                <tbody>

                    @php
                        foreach ($settings as $setting) {
                            echo '<tr>';
                                echo '<td>'.$setting->option.'</td>';
                                if($setting->value == false)
                                    echo '<td><input class="switchToggle" type="checkbox" data-id="'. $setting -> id.'"</td>';
                                else
                                    echo '<td><input class="switchToggle" type="checkbox" checked data-id="'. $setting -> id.'"</td>';
                            echo '</td>';
                        }
                    @endphp
                                   
                </tbody>
            </table>
        </div>

    </div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/estilosGenerales.css">
    <link rel="stylesheet" href="/css/adminLTE.css">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
        
@stop

@section('js')
    <script src="https://kit.fontawesome.com/75e57fedbe.js" crossorigin="anonymous"></script>
    <script>
        const option = document.querySelectorAll('.switchToggle');
        for(let i = 0; i < option.length; i++){
            option[i].addEventListener('change',  async (element) => {
                let value = 0
                if(element.target.checked){
                    value = 1
                }
                 await fetch(`/admin/changeOption?id=${element.target.getAttribute('data-id')}&value=${value}`)
            })
        }
    </script>
@stop