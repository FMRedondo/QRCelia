$(document).ready(index);

function index() {
    var parametros = [];

    $.ajax({
        data: parametros,
        url: '/admin/comentarios/getComments',
        type: 'GET',

        success: function (response) {
            $("tbody").empty();
            $tabla = `
             <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-5">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">Comentarios</th>
              <th class="px-4 py-3">Puntos</th>
            </tr>
          </thead>
          <tbody class="bg-white contenido">
    
          </tbody>
        </table>
      </div>
    </div>
             `;

             $(".fa-spinner").remove();
             $(".contenidoPrincipal").append($tabla);




            response.forEach(function (datos) {
                let contenidoTabla = `
                <tr class="text-gray-700">
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${datos.content} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${datos.idPunto} </span>
                    </td>
                </tr>`;

                $(".contenido").append(contenidoTabla);


            });
        },

        error: function (response) {
            alert("error en la peticion");
        }
    });




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
                response.forEach(function (datos) {
                    let contenidoTabla = `
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${datos.content} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${datos.idPunto} </span>
                        </td>
                    </tr>`;
    
                    $("tbody").append(contenidoTabla);
                });
            },


            error: function (response) {
                alert("error en la peticion");
            }
        });
    }


}