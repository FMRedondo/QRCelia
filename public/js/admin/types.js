//                                      //
//  jQuery para CATEGORIAS de puntos    //
//           QRCELIA                    //
//                                      //
load();

// Mostrar una lista con todas las categorias
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
                let tableContent = "";

                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                tableContent = `
                    <tr class="text-gray-700" id="${data.id}">
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                    </div>
                                 </div>
                                <div>
                                    <p class="font-semibold text-black regTypeName">${data.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeCreated"> ${data.created_at} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeUpdated"> ${data.updated_at} </span>
                        </td>
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
                $("tbody").append(tableContent);
            })
            $(".btnShowEditType").click(showEditType);
            $(".btnDelType").click(showDelType);
            $(".searchType").keyup(searchType);
        },

        error: function (response){
            alert("Error en la peticion");
        }
    });
}

// Funcion para mostrar/cerrar pestaña para añadir nuevo tipo
$(".btnAddType").click(showAddType);
function showAddType() {
    $(".addTypePanel").toggle();
    $(".typeName").val("");
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

                var newContent = `
                <tr class="text-gray-700" id="${response.id}">
                    <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                </div>
                            </div>
                            <div>
                                <p class="font-semibold text-black regTypeName">${name}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeCreated"> ${response.date} </span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeUpdated"> ${response.date} </span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary btnShowEditType" data-id='${response.id}'>Modificar</button>
                        <button type="button" class="btn btn-danger btnDelType" data-id='${response.id}'>Eliminar</button>
                    </td>
                </tr>
                `;
            $("tbody").append(newContent);
            $(".btnShowEditType").click(showEditType);
            $(".btnDelType").click(showDelType);
         },

         error: function (response) {
            alert("Error en la peticion");
         } 

    });
}

// Funcion para mostrar la pestaña para borrar categorias
// y despues borrarlas cuando le das a si
$(".btnDelType").click(showDelType);
function showDelType() {
    $(".delTypePanel").show();
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
                url: '/admin/categorias/deleteType',
                type: 'post',
                success: function (response) {
                    let route = "table tbody #" + id;
                    $(route).remove();
                    $(".delTypePanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delTypePanel").hide();
    })
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
                    <tr class="text-gray-700" id="${data.id}">
                        <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                    </div>
                                </div>
                                <div>
                                    <p class="font-semibold text-black regTypeName">${data.name}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeCreated"> ${data.created_at} </span>
                        </td>
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regTypeUpdated"> ${data.updated_at} </span>
                        </td>
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
                $("tbody").append(tableContent);
            })
            $(".btnShowEditType").click(showEditType);
            $(".btnDelType").click(showDelType);
        },

        error: function (response) {
            alert("Error en la peticion");
        }
    });
}


// Funcion para editar una categoria
$(".btnShowEditType").click(showEditType);
function showEditType() {
    var error = false;
    var id = $(this).data("id");
    var content = ``;
    
    var params = {
        "id": id,
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: params,
        dataType: 'json',
        url: '/admin/categorias/getType',
        type: 'post',

        success: function(response){
            content = `
            <div class="modifyTypePanel">
                <div class="alignCloseButton">
                    <button type="button" class="btn btn-danger closeWindow btnWindowModify" data-val='false'>
                        <i class="fa-solid fa-xmark"></i>
                    </button> 
                </div>     
                <h1 class='text-center mt-3'>Modificar categoría</h1>  
                <div class='contenido pt-0'>  
                    <div class='form-group mb-4'>  
                        <label class='mb-2'>Nombre:</label>  
                        <input type='text' class='form-control typeName typeNameMod' data-field='name' value='${response[0].name}' name='typeNameMod'>  
                    </div>   
                    <div class='form-group mb-4 d-flex justify-content-center'>  
                        <button type='submit' class='btnSendModifyType btn btn-lg btn-success btnWindowModify' data-val='false' id='modifyType'>Modificar categoria</button>  
                    </div>  
                </div>
            </div>
            `;

            $(".delTypePanel").after(content);
            $(".modifyTypePanel").show();
            $(".btnWindowModify").click(function () {
                if (!($(this).data("val"))) {
                    $(".modifyTypePanel").remove();
                }
            })

        },

        error: function (response) {
            alert("Error en la peticion");
            error = true;
        },

    });

    if (!error) {
        function actualizar(){
            alert("hola!")
            let newName = $(".typeNameMod").val();
            var params = {
                "id": id,
                "field": $(this).data("field"),
                "value": newName,
                "_token": $('meta[name="csrf-token"]').attr('content')
            }
                
            $.ajax({
                data: params,
                url: '/admin/categorias/editType',
                type: 'post',

                success: function (response) {
                    let route = "table tbody #" + id + " .regTypeName";
                    $(route).text(newName);
                    ruta = "table tbody #" + id + " .regTypeUpdated"
                    $(route).text(response);
                    $(".modifyTypePanel").remove();
                },

                error: function (response) {
                    alert("Error en la peticion");
                    console.log(response);
                },
            });
        };
    }
}