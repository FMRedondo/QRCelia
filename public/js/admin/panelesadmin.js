$(window).ready(cargarPaneles);

function cargarPaneles(){


    var parametros = {};

    $.ajax({
        data: parametros,
        url: '/admin/verDatosContenido',
        type: 'get',

        success: function (response) {

            $(".graficaContenido i").remove();

            var ctx= document.getElementById("contenidoPuntos").getContext("2d");
            var myChart= new Chart(ctx,{
                type:"bar",
                data:{
                    labels:['Recursos','Puntos de interes','Comentarios', 'categorias', 'usuarios'],
                    datasets:[{
                            label:'Contenido',
                            data:[response.recursos,response.puntos,response.comentarios, response.categorias, response.usuarios],
                            backgroundColor:[
                                'rgba(255, 0, 0, 0.5)',
                                'rgba(0,255, 255, 0.5)',
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(255, 255, 0, 0.5)',
                                'rgba(255,0,255, 0.5)'
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
        },

        error: function () {
            alert("error en la peticion");
        }
    });










    
    

        // Segundo panel

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
}