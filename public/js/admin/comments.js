$(document).ready(index);

function index() {
    var parametros = [];

    $.ajax({
        data: parametros,
        url: '/admin/comentarios/getComments',
        type: 'GET',

        success: function (response) {
            $("tbody").empty();
            $tabla = `<div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-5">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th class="px-4 py-3">Comentarios</th>
                                        <th class="px-4 py-3">Puntos</th>
                                        <th class="px-4 py-3 text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white contenido">
                                </tbody>
                            </table>
                        </div>
                    </div>`;

             $(".fa-spinner").remove();
             $(".contenidoPrincipal").append($tabla);




            response.forEach(function (data) {
                let contenidoTabla = `
                <tr class="text-gray-700">
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.content} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.idPunto} </span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                    </td>
                </tr>`;

                $(".contenido").append(contenidoTabla);


            });
        },

        error: function (response) {
            alert("error en la peticion");
        }
    });
}

$(".searchComments").keyup(searchComments);

function searchComments(){
    var parametros = {
        "search": $(".searchComments").val(),
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: parametros,
        url: '/admin/comentarios/searchcomments',
        type: 'post',

        success: function (response) {
            $("tbody").empty();
            var contenidoTabla;
            response.forEach(function (datos) {
                    contenidoTabla+= `
                <tr class="text-gray-700">
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${datos.content} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama tumama "></span><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 
                    dolar{datos.idPunto} </span>
                    </td>
                </tr>`;
            });

            $("tbody").append(contenidoTabla);
        },

        error: function () {
            alert("error en le peticion");
        }
    });
}

$(".btnDelComments").click(showDelComments);

function showDelComments() {
    $(".delCommentsPanel").show();
    let id = $(this).data("id");

    // Funcion para borrar categorias
    $(".btnWindow").click(function() {
        if ($(this).data("val")) {
            var params = {
                "id": id,
                "_token": $('meta[name="csrf-token"]').attr('content'),
            }
            $.ajax({
                data: params,
                url: '/admin/comentarios/deleteComments',
                type: 'post',
                success: function (response) {
                    let route = "table tbody #" + id;
                    $(route).remove();
                    $(".delTPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delCommentsPanel").hide();
    })
}



