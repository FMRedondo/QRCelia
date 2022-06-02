//                                      //
//  jQuery para TABLA USUARIOS          //
//           QRCELIA                    //
//                                      //
load();

// LISTA DE LOS USUARIOS--OK
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
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPassword"> ********** </span>
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
            $(".searchUsers").keyup(searchUsers);
        },

        error: function (response){
            alert("Error en la peticion");
        }
    });
}


//AÑADIR USUARIO --SI
// Funcion para mostrar/cerrar pestaña para añadir nuevo usuario
$(".btnAddUser").click(showAddUser);
function showAddUser() {
    document.getElementsByClassName("addPanel")[0].classList.toggle('modalActive');
    $(".backPanel").show();
}

//Cerrar ventana añadir
$(".closeWindowAddUser").click(function () {
    $(".addPanel").hide();
    $(".backPanel").hide();
    $(".userName").val("");
    $(".userEmail").val("");
    $(".userPassword").val("");
    $(".userPassword2").val("");
})
   
// Funcion para añadir una nueva user
$(".btnSendAddUser").click(addUser);
function addUser(){
    let name = $(".userName").val();
    let email = $(".userEmail").val();
    let password = $(".userPassword").val();
    let password2 = $(".userPassword2").val();

    if(password!=password2){
        const error = `
        <div class="alert alert-danger" id="errorPassword" role="alert">
            ERROR, las contraseñas no coinciden
         </div>
        `;

        const panelMensaje = $(".addPanel")
        panelMensaje.append(error);

        const animacion = setInterval(() => {
         $("#errorPassword").remove()
        }, 3000)


    }else{
        var params = {
            "name": name,"email": email,"password": password,
            "_token": $('meta[name="csrf-token"]').attr('content')
        }

        $.ajax({
            data: params,
            url: '/admin/usuarios/addUser',
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
                                    <p class="font-semibold text-black regUserName">${name}</p>
                                </div>
                            </div>
                        </td>
    
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserEmail"> ${email} </span>
                        </td>                 
    
                        <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm regUserPassword"> ********** </span>
                        </td>
    
                        <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                            <button type="button" class="btn btn-primary btnShowEditUser" data-id='${response.id}'>Modificar</button>
                            <button type="button" class="btn btn-danger btnDelUser" data-id='${response.id}'>Eliminar</button>
                        </td>
                    </tr>
                `;
    
                $("tbody").append(newContent);
                $(".btnShowEditUser").click(showEditUser);
                $(".btnDelUser").click(showDelUser);
                $(".btnShowEditUser").off();
                $(".btnShowEditUser").click(showEditUser);
                $(".backPanel").hide();
    
             },
    
             error: function (response) {
                alert("Error en la peticion");
             } 
        });
    }
}

// Funcion para mostrar la pestaña para borrar categorias
// y despues borrarlas cuando le das a si
$(".btnDelUser").click(showDelUser);
function showDelUser() {
    $(".delUserPanel").show();
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
                url: '/admin/usuarios/deleteUser',
                type: 'post',
                success: function (response) {
                    let route = "table tbody #" + id;
                    $(route).remove();
                    $(".delUserPanel").hide();
                    $(".backPanel").show();
                    $(".backPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delUserPanel").hide();
            $(".backPanel").hide();
    })
}

//BUSQUEDAS --OK
// Funcion para realizar una busqueda
$('.searchUsers').keyup(searchUsers);

function searchUsers() {
    var params = {
        "search": $(".searchUsers").val(),
        "_token": $('meta[name="csrf-token"]').attr('content')
    }
    $.ajax({
        data: params,
        url: '/admin/usuarios/searchUsers',
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
        },

        error: function (response) {
            alert("Error en la peticion");
        }
    });
}







// Funcion para editar usuarios
$(".btnShowEditUser").click(showEditUser);
function showEditUser() {
    var id = $(this).data("id");
    var content = ``;
    
    var params = {
        "id": id,
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: params,
        url: '/admin/usuarios/getUser',
        type: 'post',

        success: function(response){
            content = `
            <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white modifyPanel">
                <div class="">
                    <div class="text-center p-5 flex-auto justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square w-16 h-16 flex items-center mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#0069d9" stroke="#0069d9">
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"></path>
                    </svg>
                        <h2 class="text-xl font-bold py-4 ">Modificar usuario</h2>
                        <div class='form-group mb-4'>  
                            <label class='mb-2'>Nombre:</label>  
                            <input type='text' class='modifyField form-control userName userNameMod rounded-pill'  data-field='name' value='${response[0].name}' name='userNameMod'>  
                        </div>
                        <div class='form-group mb-4'>  
                            <label class='mb-2'>Email:</label>  
                            <input type='text' class='modifyField form-control userMail userMailMod rounded-pill'  data-field='email' value='${response[0].email}' name='userMailMod'>  
                        </div>  
                        <div class='form-group mb-4'>  
                            <label class='mb-2'>Contraseña:</label>  
                            <input type='password' class='modifyField form-control userPassword userPasswordMod rounded-pill'  data-field='password' name='userPasswordMod'>  
                        </div>
                    </div>
                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                        <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow closeWindow btnAddUser btnWindowModify closeWindowModifyUser" data-val='false'>Cancelar</button>
                        <button class="mb-2 md:mb-0 bg-primary border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg btnWindow btn btn-lg btn-success btnWindowModify btnSendModifyUser" data-val='true'>Modificar</button>
                    </div>
                </div>
            </div>
            `;

            $(".delPanel").after(content);
            $(".modifyPanel").show();
            $(".backPanel").show();

            $(".modifyField").change(function() {
                var newName = $(".userNameMod").val();
                var newMail = $(".userMailMod").val();
                var params = {
                    "id": id,
                    "field": $(this).data("field"),
                    "value": $(this).val(),
                    "_token": $('meta[name="csrf-token"]').attr('content')
                }
                    
                $.ajax({
                    data: params,
                    url: '/admin/usuarios/editUser',
                    type: 'post',
    
                    success: function (response) {
                        var route = "table tbody #" + id + " .regUserName";
                        $(route).html(newName);

                        route = "table tbody #" + id + " .regUserEmail";
                        $(route).html(newMail);
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