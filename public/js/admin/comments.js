$(document).ready(index);

function index() {
    var parametros = [];

    $.ajax({
        data: parametros,
        url: '/admin/comentarios/getComments',
        type: 'GET',

        success: function (response) {
           /* $("tbody").empty();
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
                <tr class="text-gray-700" id='${data.id}'>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.content} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.idPunto} </span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-danger btnDelComments" data-id='${data.id}'>Eliminar</button>
                    </td>
                </tr>`;

                $(".contenido").append(contenidoTabla);

            });*/

            $(".btnDelComments").click(showDelComments);
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
            response.forEach(function (data) {
                    contenidoTabla+= `
                    <tr class="text-gray-700" id='${data.id}'>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.content} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.idPunto} </span>
                        </td>
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-danger btnDelComments" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>`;
            });

            $("tbody").append(contenidoTabla);
            $(".btnDelComments").click(showDelComments);
        },

        error: function () {
            alert("error en le peticion");
        }
    });
}


function showDelComments() {

    $(".delCommentsPanel").show();
    $(".backPanel").show();
    let id = $(this).data("id");

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
                    $(".delCommentsPanel").hide();
                    $(".backPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delCommentsPanel").hide();
            $(".backPanel").hide();
    })
}







