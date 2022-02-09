load();

// LISTA DE LOS USUARIOS--OK
function load() {
    var params = []
    $.ajax({
        data: params,
        url: '/admin/usuarios/getUsers',
        type: 'get',

        success: function (response) {
            let $table = `
            <div class="w-full mb-8 rounded-lg shadow-lg">
                <div class="w-full">
                    <table class="w-full">
                        <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3 text-center">Nombre</th>
                                <th class="px-4 py-3 text-center">Administrador</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                        </tbody>
                    </table>
                </div>
                </div>
            `;

            $(".fa-spinner").remove();
            $(".contenidoPrincipal").append($table);

            response.forEach(function (data) {
                let tableContent = `
                    <tr class="text-gray-700" id="${data.id}">
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                    </div>
                                 </div>
                                <div>
                                    <p class="font-semibold text-black regUserName">${data.name}</p>
                                    <span class="py-1 leading-tight text-green-700 bg-green-100 rounded-sm regUserEmail"> ${data.email} </span>
                                </div>
                            </div>
                        </td>            

                        <td class="px-4 py-3 text-xs border">
                            <input class="switchToggle" type="checkbox" id="adminToggle${data.id}">
                        </td>

                    </tr>
                `;
                $("tbody").append(tableContent);
            })
        },

        error: function (response){
            alert("Error en la peticion");
        }
    });
}