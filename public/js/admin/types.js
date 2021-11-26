//                                      //
//  jQuery para CATEGORIAS de puntos    //
//           QRCELIA                    //
//                                      //

// Mostrar una lista con todas las categorias
$(document).ready(load)

function load() {
    var params = []
    $.ajax({
        data: params,
        url: '/admin/categorias/getTypes',
        type: 'get',

        success: function (response) {
            $table = `
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto">
                    <table class="w-full">
                    <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3 text-center">Nombre</th>
                        <th class="px-4 py-3 text-center">Fecha creacion</th>
                        <th class="px-4 py-3 text-center">Ultima modificación</th>
                        <th class="px-4 py-3 text-center">Acciones</th>
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
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                let tableContent = `
                    <tr class="text-gray-700 typesInfo#1">
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                    </div>
                                 </div>
                                <div>
                                    <p class="font-semibold text-black">${data.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.created_at} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.updated_at} </span>
                        </td>
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
                $("tbody").append(tableContent);
                $(".btnShowEditType").click(showEditType);
                $(".btnDelType").click(showDelType);
                $(".searchType").keyup(searchType);
            })
        },

        error: function (response){
            console.log("Error en la peticion");
        }
    });
}

// Funcion para mostrar pestaña para añadir nuevo tipo
$(".btnAddType").click(showAddType);
function showAddType() {
    $(".addTypePanel").toggle();
    $(".closeWindow").click(showAddType);
}

// Funcion para añadir una nueva categoria
$(".btnSendAddType").click(addType);
function addType(){
    let name = $(".typeName").val();

    var params = {
        "name": name,
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: params,
        url: '/admin/categorias/addType',
        type: 'post',

        success: function (response) {
            $(".addTypePanel").toggle();
            alert(typeof(response));
            alert(response.date)
           
        /*

            $(response).each(function(data) {
                var newContent = `
                <tr class="text-gray-700 typesInfo#1">
                    <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                </div>
                            </div>
                            <div>
                                <p class="font-semibold text-black">${name}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.created_at} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.updated_at} </span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                        <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                    </td>
                </tr>
                `;
                $("tbody").append(newContent);
            });

            */

            $(".typeName").val("");
            
         },

         error: function (response) {
            alert("Error en la peticion");
         } 

    });
}

// Funcion para mostrar la pestaña para borrar categorias
$(".btnDelType").click(function() {
    var id = $(this).data('id');
    showDelType(id);
});
function showDelType(id) {
    $(".delTypePanel").toggle();
    $(".closeWindow").click(showDelType);
    $("btnDelTypeYes").attr("data-id", id);
    $(".btnDelTypeNo").click(showDelType);
    $(document).on('keypress',function(key) {
        if(key.which == 13) {
            DelType();
        }
    });

}

// Funcion para borrar categorias
$(".btnDelTypeYes").click(delType);
function delType() {
    var params = {
        "id": $(this).attr("data-id"),
        "_token": $('meta[name="csrf-token"]').attr('content'),
    }

    $.ajax({
        data: params,
        url: '/admin/categorias/deleteType',
        type: 'post',

        success: function (response) {
            console.log("Todo va bien");
        },

        error: function (response) {
            console.log("Error en la peticion");            
        },

    });
}


// Funcion para realizar una busqueda
function searchType() {
    var params = {
        "search": $(".searchType").val(),
        "_token": $('meta[name="csrf-token"]').attr('content')
    }
    $.ajax({
        data: params,
        url: '/admin/categorias/searchType',
        type: 'post',

        success: function (response) {
            $("tbody").empty();
            response.forEach(function (data) {
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                let tableContent = `
                    <tr class="text-gray-700 typesInfo#1">
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                    </div>
                                </div>
                                <div>
                                    <p class="font-semibold text-black">${data.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.created_at} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${data.updated_at} </span>
                        </td>
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
                $("tbody").append(tableContent);
            })
        },


        error: function (response) {
            alert("Error en la peticion");
        }
    });
}


// Funcion para editar una categoria
function showEditType() {
    
}