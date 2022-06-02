
 const index = async () => {
     await fetch('/admin/verDatosContenido').then(data => data.json())
     .then(response => {
        var ctx= document.getElementById("contenidoPuntos").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Recursos','Puntos de interes','Comentarios', 'categorias', 'usuarios'],
                datasets:[{
                        label:'Contenido',
                        data:[response.recursos,response.puntosInteres,response.comentarios, response.categorias, response.usuarios],
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
     })
 }

 index();





    /**
     *  

            /admin/verDatosContenido
     */