//                                      //
//  jQuery para TABLA USUARIOS          //
//           QRCELIA                    //
//                                      //
load();

// Mostrar una lista con todas las categorias
function load() {
    var params = []
    $.ajax({
        data: params,
        url: '/admin/usuarios/getUsers',
        type: 'get',

        success: function (response) {
            $table = `
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3 text-center">Nombre</th>
                                <th class="px-4 py-3 text-center">E-mail</th>
                                <th class="px-4 py-3 text-center">Contraseña</th>
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
                                    <p class="font-semibold text-black regUserName">${data.name}</p>
                                </div>
                            </div>
                        </td>

                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserEmail"> ${data.email} </span>
                        </td>                 

                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPassword"> ${data.password} </span>
                        </td>

                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditUser" data-id='${data.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelUser" data-id='${data.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
                $("tbody").append(tableContent);
            })
            $(".btnShowEditUser").click(showEditUser);
            $(".btnDelUser").click(showDelUser);
            $(".searchUser").keyup(searchUser);
        },

        error: function (response){
            alert("Error en la peticion");
        }
    });
}

// Funcion para mostrar/cerrar pestaña para añadir nuevo usuario
$(".btnAddUser").click(showAddUser);
function showAddUser() {
    $(".addUserPanel").toggle();
    $(".UserName").val("");
}

// Funcion para añadir una nueva user
$(".btnSendAddUser").click(addUser);
function addUser(){
    let name = $(".userName").val();

    var params = {
        "name": name,
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: params,
        url: '/admin/usuarios/addUser',
        type: 'post',

        success: function (response) {
            $(".addUserPanel").toggle();

                var newContent = `
                <tr class="text-gray-700" id="${response.id}">
                    <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                </div>
                            </div>
                            <div>
                                <p class="font-semibold text-black regUserName">${name}</p>
                            </div>
                        </div>
                    </td>

                <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserEmail"> ${data.email} </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserVerified"> ${data.email_verified_at} </span>
                </td>                        

                <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPassword"> ${data.password} </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserId"> ${data.current_team_id} </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPhoto"> ${data.profile_photo_path} </span>
                </td>

                <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                    <button type="button" class="btn btn-primary btnShowEditUser" data-id='${data.id}'>Modificar</button>
                    <button type="button" class="btn btn-danger btnDelUser" data-id='${data.id}'>Eliminar</button>
                </td>
            </tr>
        `;
            $("tbody").append(newContent);
            $(".btnShowEditUser").click(showEditUser);
            $(".btnDelUser").click(showDelUser);
         },

         error: function (response) {
            alert("Error en la peticion");
         } 

    });
}

// Funcion para mostrar la pestaña para borrar categorias
// y despues borrarlas cuando le das a si
$(".btnDelUser").click(showDelUser);
function showDelUser() {
    $(".delUserPanel").show();
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
                url: '/admin/usuarios/deleteUser',
                type: 'post',
                success: function (response) {
                    let route = "table tbody #" + id;
                    $(route).remove();
                    $(".delUserPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delUserPanel").hide();
    })
}

// Funcion para realizar una busqueda
function searchUser() {
    var params = {
        "search": $(".searchUser").val(),
        "_token": $('meta[name="csrf-token"]').attr('content')
    }
    $.ajax({
        data: params,
        url: '/admin/usuarios/searchUser',
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
                    <tr class="text-gray-700" id="${response.id}">
                    <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                </div>
                            </div>
                            <div>
                                <p class="font-semibold text-black regUserName">${name}</p>
                            </div>
                        </div>
                    </td>

                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserEmail"> ${data.email} </span>
                    </td>

                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserVerified"> ${data.email_verified_at} </span>
                    </td>                        

                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPassword"> ${data.password} </span>
                    </td>

                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserId"> ${data.current_team_id} </span>
                    </td>

                    <td class="px-4 py-3 text-xs border">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPhoto"> ${data.profile_photo_path} </span>
                    </td>

                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary btnShowEditUser" data-id='${data.id}'>Modificar</button>
                        <button type="button" class="btn btn-danger btnDelUser" data-id='${data.id}'>Eliminar</button>
                    </td>
                </tr>
            `;
                $("tbody").append(tableContent);
            })
            $(".btnShowEditType").click(showEditType);
            $(".btnDelType").click(showDelUser);
        },

        error: function (response) {
            alert("Error en la peticion");
        }
    });
}


// Funcion para editar una categoria
$(".btnShowEditType").click(showEditUser);
function showEditUser() {
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
        url: '/admin/usuarios/getUser',
        type: 'post',

        success: function(response){
            content = `
            <div class="modifyUserPanel">
                <div class="alignCloseButton">
                    <button type="button" class="btn btn-danger closeWindow btnWindowModify" data-val='false'>
                        <i class="fa-solid fa-xmark"></i>
                    </button> 
                </div>     
                <h1 class='text-center mt-3'>Modificar usuario</h1>  
                <div class='contenido pt-0'>  
                    <div class='form-group mb-4'>  
                        <label class='mb-2'>Nombre:</label>  
                        <input type='text' class='form-control typeName userNameMod' data-field='name' value='${response[0].name}' name='userNameMod'>  
                    </div>   
                    <div class='form-group mb-4 d-flex justify-content-center'>  
                        <button type='submit' class='btnSendModifyUser btn btn-lg btn-success btnWindowModify' data-val='false' id='modifyUser'>Modificar categoria</button>  
                    </div>  
                </div>
            </div>
            `;

            $(".delUserPanel").after(content);
            $(".modifyUserPanel").show();
            $(".btnWindowModify").click(function () {
                if (!($(this).data("val"))) {
                    $(".modifyUserPanel").remove();
                }
            })
        },

        error: function (response) {
            alert("Error en la peticion");
            error = true;
        },

    });

    if (!error) {
        $(".userNameMod").change(function() {
            let newName = $(".userNameMod").val();
            var params = {
                "id": id,
                "field": $(this).data("field"),
                "value": newName,
                "_token": $('meta[name="csrf-token"]').attr('content')
            }
                
            $.ajax({
                data: params,
                url: '/admin/usuarios/editUser',
                type: 'post',

                success: function (response) {
                    let route = "table tbody #" + id + " .regUserName";
                    $(route).text(newName);
                    ruta = "table tbody #" + id + " .regUserUpdated"
                    $(route).text(response);
                    $(".modifyuserPanel").remove();
                },

                error: function (response) {
                    alert("Error en la peticion");
                    console.log(response);
                },
            });
        });
    }
}