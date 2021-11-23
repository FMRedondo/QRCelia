//                                      //
//  jQuery para CATEGORIAS de puntos    //
//           QRCELIA                    //
//                                      //

// Mostrar una lista con todas las categorias
$(document).ready(cargar)

function cargar() {
    var params = []
    $.ajax({
        data: params,
        url: '/admin/categorias/getTypes',
        type: 'get',

        success: function (response) {
            console.log("Funciona");
        },

        error: function (response){
            console.log("Error en la peticion");
        }
    });
}