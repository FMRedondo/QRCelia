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
    $(".addPanel").toggle();
    $(".typeName").val("");
    $(".backPanel").show();
    $(".closeWindowAddType").click(function () {
        $(".backPanel").hide();
    })
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
            $(".addPanel").toggle();

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
            $(".btnShowEditType").off();
            $(".btnShowEditType").click(showEditType);

            $(".backPanel").hide()
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
    $(".delPanel").show();
    $(".backPanel").show();
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
                    $(".delPanel").hide();
                    $(".backPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delPanel").hide();
            $(".backPanel").hide();
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
            <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white modifyPanel">
                <div class="">
                    <div class="text-center p-5 flex-auto justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square w-16 h-16 flex items-center mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#0069d9" stroke="#0069d9">
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"></path>
                    </svg>
                        <h2 class="text-xl font-bold py-4 ">Modificar categoria</h2>
                        <div class='form-group mb-4'>  
                            <label class='mb-2'>Nombre:</label>  
                            <input type='text' class='form-control typeName typeNameMod rounded-pill'  data-field='name' value='${response[0].name}' name='typeNameMod'>  
                        </div>  
                    </div>
                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                        <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow closeWindow btnAddType btnWindowModify closeWindowModifyType" data-val='false'>Cancelar</button>
                        <button class="mb-2 md:mb-0 bg-primary border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg btnWindow btn btn-lg btn-success btnWindowModify btnSendModifyType" data-val='true'>Modificar</button>
                    </div>
                </div>
            </div>
            `;

            $(".delPanel").after(content);
            $(".modifyPanel").show();
            $(".backPanel").show();

            $(".typeNameMod").change(function() {
                var newName = $(".typeNameMod").val();
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
                        route = "table tbody #" + id + " .regTypeUpdated"
                        $(route).text(response);
                    },
    
                    error: function (response) {
                        alert("Error en la peticion");
                        console.log(response);
                    },
                });
            });

            $(".btnWindowModify").click(function () {
                    $(".modifyPanel").remove();
                    $(".backPanel").hide();
            })

        },

        error: function (response) {
            alert("Error en la peticion");
        },

    });
}