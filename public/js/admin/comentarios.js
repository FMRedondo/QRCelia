$(document).ready(index);

function index(){
    var parametros = [];

      $.ajax({
          data: parametros,
          url: '/admin/comentarios/getComments',
          type: 'GET',

          success: function (response) {
             $("tbody").empty();
            response.forEach(function(datos) {
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
}