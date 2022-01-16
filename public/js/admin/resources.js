//                                              //
//  jQuery para RECURSOS(imagenes, videos...)   //
//                  QRCELIA                     //
//                                              //
load();

// Mostrar una lista con todos los recursos
function load() {
    var params = []
    $.ajax({
        data: params,
        url: '/admin/recursos/getResources',
        type: 'get',

        success: function (response) {
            $(".fa-spinner").remove();

            response.forEach(function (data) {
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                var thumbnail = ""
                if (data.type == "image") {
                    thumbnail = data.url;
                }
                if (data.type == "video") {
                    thumbnail = "/img/video.png";
                }
                if (data.type == "audio") {
                    thumbnail = "/img/audio.png";
                }

                content = `
                <div id="${data.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                    <div class="imgThumbnail">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                        src="${thumbnail}" alt="Image Size 720x400" />
                        <button type="button" class="btn btn-success rounded-circle flex editButton" data-id='${data.id}'>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h2 class="name text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate">
                            ${data.name}
                        </h2>
                        <p class="autor text-gray-600 font-light text-md mb-3">
                            Autor: ${data.autor}
                        </p>
                        <p class="text-gray-600 font-light text-md mb-3">
                            Tipo: ${data.type}
                        </p>

                        <div class="py-4 border-t text-xs text-gray-700">
                            <div class="d-flex flex-column">

                                <div class="col-span-2 mb-2">
                                    Fecha de creación:
                                    <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
                                        ${data.created_at}
                                    </span>
                                </div>
                                 
                                <div class="col-span-2 mb-2">
                                    Última modificación:
                                    <span class="resourceUpdated inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
                                        ${data.updated_at}
                                    </span>
                                </div>
                                
                            </div>
                    </div>
                </div>    
                `;
                $("#resourceList").append(content);
            })
            
            $(".editButton").click(showEditResource);
            $(".btnDelResource").click(showDelResource);
            $(".searchResource").keyup(searchResource);
        },

        error: function (response){
            alert("Error en la peticion");
        }
    });
}

// Funcion para mostrar/cerrar pestaña para añadir nuevo tipo
$(".btnAddResource").click(showAddResource);
function showAddResource() {
    $(".addPanel").toggle();
    $(".backPanel").show();
    $("#resourceUpload").prop('disabled', false);
    $("#resourceUpload").change(checkResourceUpload);
}
$(document).on('keyup', function(e) {
    if (e.key == "Escape" && $(".addPanel").is(":visible")){
        $(".addPanel").toggle();
    }
    if (e.key == "Escape" && $(".modifyPanel").is(":visible")){
        $(".modifyPanel").remove();
    }
});

//Preview para ver los archivos que has decidido subir
function checkResourceUpload(){
    var numFiles = $('#resourceUpload').get(0).files.length;
    if (numFiles > 0) {
        $("#preview").empty();
        $("#preview").append("<div id='imagesPreview' class='d-flex flex-row justify-content-center flex-wrap' style='overflow-y: scroll; max-height:450px;'></div>"); 
        for (let i = 0; i < numFiles; i++) {
            var tempURL = URL.createObjectURL($('#resourceUpload').get(0).files[i]);
            var content = `
                <div class="p-2" style="width: 30%">
                    <div class="imgThumbnail">
                        <img src="${tempURL}"/> 
                    </div>
                <div>
            `;
            $("#resourceUpload").prop('disabled', true);
            $("#imagesPreview").append(content);            
        }
    }
}

// Funcion para añadir un nuevo recurso
$("#btnSendAddResource").click(addResource);

// $('#resourceUpload').get(0).files


function addResource(){
    var params = {
        "_token": $('meta[name="csrf-token"]').attr('content'),
        "resources": $('#resourceUpload').get(0).files,
    }

    $.ajax({
        data: params,
        url: '/admin/recursos/addResource',
        type: 'post',

        success: function (response) {
            
        },

        error: function (response) {
            console.log(response);
            alert("Error en la peticion");
        }
    });
}

// Funcion para mostrar la pestaña para borrar recursos
// y despues borrarlas cuando le das a si
$(".delResourcePanel").click(showDelResource);
function showDelResource() {
    $(".delPanel").show();
    let id = $(this).data("id");

    // Funcion para borrar recursos
    $(".btnWindow").click(function() {
        if ($(this).data("val")) {
            var params = {
                "id": id,
                "_token": $('meta[name="csrf-token"]').attr('content'),
            }
            $.ajax({
                data: params,
                url: '/admin/recursos/deleteResource',
                type: 'post',
                success: function (response) {
                    let route = "table tbody #" + id;
                    $(route).remove();
                    $(".delPanel").hide();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delPanel").hide();
    })
}

// Funcion para realizar una busqueda
function searchResource() {
    var params = {
        "search": $(".searchResource").val(),
        "_token": $('meta[name="csrf-token"]').attr('content')
    }
    $.ajax({
        data: params,
        url: '/admin/recursos/searchResource',
        type: 'post',

        success: function (response) {
            $("#resourceList").empty();
            response.forEach(function (data) {
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                var thumbnail = ""
                if (data.type == "image") {
                    thumbnail = data.url;
                }
                if (data.type == "video") {
                    thumbnail = "/img/video.png";
                }
                if (data.type == "audio") {
                    thumbnail = "/img/audio.png";
                }

                let tableContent = `
                <div id="${data.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                <div class="imgThumbnail">
                    <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                    src="${thumbnail}" alt="Image Size 720x400" />
                    <button type="button" class="btn btn-success rounded-circle flex editButton" data-id='${data.id}'>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
                <div class="p-4">
                    <h2 class="name text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate">
                        ${data.name}
                    </h2>
                    <p class="autor text-gray-600 font-light text-md mb-3">
                        Autor: ${data.autor}
                    </p>
                    <p class="text-gray-600 font-light text-md mb-3">
                        Tipo: ${data.type}
                    </p>

                    <div class="py-4 border-t text-xs text-gray-700">
                        <div class="d-flex flex-column">

                            <div class="col-span-2 mb-2">
                                Fecha de creación:
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
                                    ${data.created_at}
                                </span>
                            </div>
                             
                            <div class="col-span-2 mb-2">
                                Última modificación:
                                <span class="resourceUpdated inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
                                    ${data.updated_at}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>    
                `;
                $("#resourceList").append(tableContent);
            })
            $(".editButton").click(showEditResource);
            $(".btnDelResource").click(showDelResource);
        },

        error: function (response) {
            alert("Error en la peticion");
        }
    });
}

// Funcion para editar un recurso
$(".editButton").click(showEditResource);
function showEditResource() {
    var id = $(this).data("id");
    var content = ``;
    
    var params = {
        "id": id,
        "_token": $('meta[name="csrf-token"]').attr('content')
    }

    $.ajax({
        data: params,
        dataType: 'json',
        url: '/admin/recursos/getResource',
        type: 'post',

        success: function(response){
            response.forEach(function (data) {
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                var resource = ""
                if (data.type == "image") {
                    resource = `
                    <div class="imgThumbnail" style="height: 35em !important; padding: 2em;">
                        <img class="rounded w-full object-cover object-center" src="${data.url}" alt="Portada de recurso" />
                    </div>
                        `;
                }
                if (data.type == "video") {
                    resource = `
                    <div class="imgThumbnail" style="height: 35em !important;">
                        <video controls style="padding: 2em;">
                            <source src="${data.url}" type="video/mp4">
                            Tu navegador no soporta la visualización del video. Actualizalo.
                        </video>
                    </div>
                    `;
                }
                if (data.type == "audio") {
                    resource = `
                    <div class="d-flex justify-content-center mb-5 pb-5">
                        <audio controls>
                            <source src="${data.url}">
                        </audio>
                    </div>
                    `;
                }
            
                content = `
                    <div data-id="${data.id}" class="rounded-xl shadow-lg bg-white modifyPanel bigPanel">
                        <div class="d-flex align-items-center px-4" style="height:10%; background-color:#F4F4F4;">
                            <p class="display-4 p-1 w-75">Editar un recurso</p>
                            <div class="d-flex w-25 justify-content-end">
                                <div class="closeModifyWindow" style="color:#dc3545;">
                                    <i type="button" class="fa-solid fa-circle-xmark fa-3x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="modifyPanelContent w-100 d-flex" style="height:90%;">
                            <div class="w-50 d-flex justify-content-center align-items-center">
                                <div class="w-100">
                                    ${resource}
                                    <div class="d-flex align-items-center justify-content-around mt-3">
                                        <button data-id="${data.id}" type="button" class="btnChangeResource btn btn-labeled btn-success" data-type="${data.type}">
                                            <span class="btn-label"><i class="fa-solid fa-arrow-rotate-right"></i></span>Cambiar recurso
                                        </button>
                                        <button data-id="${data.id}" type="button" class="btnDelResource btn btn-labeled btn-danger">
                                            <span class="btn-label"><i class="fa-solid fa-trash-can"></i></span>Eliminar recurso
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-50 d-flex flex-column p-5">
                                <div class="mb-4">
                                    <label for="resourceName" class="form-label">Nombre del recurso:</label>
                                    <input type="text" value="${data.name}" data-field='name' class="name form-control ResourceField" id="resourceName" style="border-radius: 0.25rem">
                                </div>

                                <div class="mb-4">
                                    <label for="resourceAutor" class="form-label">Autor del recurso:</label>
                                    <input type="text" value="${data.autor}" data-field='autor' class="autor form-control ResourceField" id="resourceAutor" style="border-radius: 0.25rem">
                                    <div class="form-text">El autor es la persona que ha fotografiado/grabado/narrado el recurso.</div>
                                </div>
                            
                                <div class="mb-4">
                                    <label for="resourceUser" class="form-label">Subido por:</label>
                                    <p class="form-control" id="resourceUser" style="border-radius: 0.25rem">${data.user}</p>
                                </div>

                                <div class="mb-5">
                                    <label for="resourceType" class="form-label">Tipo de recurso:</label>
                                    <p class="form-control" id="resourceType" style="border-radius: 0.25rem">${data.type}</p>
                                </div>
                        
                                <div class="mt-5">
                                    <div class="mb-2 d-flex">
                                        <p class="w-25 font-bold d-flex align-items-center justify-content-end mr-2">Fecha de creación:</p>
                                        <p class="form-control w-75" id="resourceCreated" style="border-radius: 0.25rem">${data.created_at}</p>
                                    </div>
                                    <div class="mb-2 d-flex">
                                        <p class="w-25 font-bold d-flex align-items-center justify-content-end mr-2">Fecha de modificación:</p>
                                        <p class="resourceUpdated form-control w-75" id="resourceUpdated" style="border-radius: 0.25rem">${data.updated_at}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                `;
            })

            $("#resourceList").after(content);
            $(".modifyPanel").show();

            $(".btnWindowModify").on(function () {
                if ($(this).data("val")) {
                    $(".modifyPanel").remove();
                }
            })

            $(".closeModifyWindow").click(function () {
                $(".closeModifyWindow").addClass("pulseEffect");
                setTimeout(function() {
                    $(".modifyPanel").hide();
                    $(".modifyPanel").remove();
                }, 400);
            });

            $(".ResourceField").change(function() {
                var newVal = $(this).val();
                var field = $(this).data("field");
                var params = {
                    "id": id,
                    "field": field,
                    "value": newVal,
                    "_token": $('meta[name="csrf-token"]').attr('content')
                }
                    
                $.ajax({
                    data: params,
                    url: '/admin/recursos/editResource',
                    type: 'post',
    
                    success: function (response) {
                        let route = "div #" + id + " ." + field;
                        $(route).text(newVal);
                        route = "div #" + id + " .resourceUpdated";
                        $(route).text(response);
                    },
    
                    error: function (response) {
                        alert("Error en la peticion");
                        console.log(response);
                    },
                });
            });

            $(".btnDelResource").click(showDeleteResource);
            $(".btnChangeResource").click(showChangeResource)

        },

        error: function (response) {
            alert("Error en la peticion");
        },

    });
}

// Funcion para eliminar un recurso
function showDeleteResource() {
    var id = $(this).data("id");
    var content = `
        <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white delResourcePanel delPanel">
            <div class="">
                <div class="text-center p-5 flex-auto justify-center">
                    <i class="fa-solid fa-circle-info" style="color: #ef4444;"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-xl font-bold py-4 ">¿Estas seguro?</h2>
                    <p class="text-sm text-gray-500 px-8">Esta opción es irreversible, si borras este punto, no lo podrás recuperar</p>    
                </div>
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 btnWindow" data-val='false'>Cancelar</button>
                    <button class="mb-2 md:mb-0 bg-red border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 btnWindow" data-val='true' data-id="${id}">Borrar</button>
                </div>
            </div>
        </div>
    `;

    $(".content-wrapper").after(content);
    $(".delResourcePanel").show();

    $(".btnWindow").click(function() {
        if ($(this).data("val")) {
            let id = $(this).data("id");
            var params = {
                "id": id,
                "_token": $('meta[name="csrf-token"]').attr('content'),
            }
            $.ajax({
                data: params,
                url: '/admin/recursos/deleteResource',
                type: 'post',
                success: function (response) {
                    let route = "div #" + id;
                    $(route).remove();
                    $(".delPanel").remove();
                    $(".modifyPanel").remove();
                },
                error: function (response) {
                    alert("Error en la peticion");            
                },
            });
        }
        if (!($(this).data("val")))
            $(".delPanel").remove();
    })
}

// Funcion para asignar un nuevo recurso a uno ya existente
function showChangeResource() {
    var params = {
        "type": $(this).data("type"),
        "_token": $('meta[name="csrf-token"]').attr('content'),
    };
    
    $(".modifyPanelContent").empty();
    $(".modifyPanelContent").addClass("justify-content-center align-items-center overflow-scroll");
    var content = `
        <div class="w-100 p-1">
            <div class="w-100 row row-cols-5 gridResources justify-content-center">
            </div>
        </div>
    `;
    $(".modifyPanelContent").append(content);

    $.ajax({
        data: params,
        url: '/admin/recursos/searchByType',
        type: 'post',

        success: function (response) {
            response.forEach(function (data) {
                var source = "";
                if (data.type == "image") {
                    source = `
                        <div data-url="${data.url}" class="resourceCard c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-2 m-3" style="width: 25%">
                            <div class="imgThumbnail">
                                <img class="rounded w-full object-cover object-center" src="${data.url}">
                            </div>
                        </div>   
                    `;
                }
                if (data.type == "audio") {
                    source = `
                    <div data-url="${data.url}" class="resourceCard d-flex flex-column justify-content-center c-card bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="imgThumbnail h-75">
                            <img src="/img/audio.png">  
                        </div>
                        <div class="h-25 d-flex align-items-center justify-content-center">
                            <audio controls>
                                <source src="${data.url}">
                            </audio>
                        </div>
                    </div>
                    `;
                }
                if (data.type == "video"){
                    source = `
                    <div data-url="${data.url}" class="resourceCard c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-2 m-3" style="width: 25%">
                            <video controls style="padding: 0.5em;">
                                <source src="${data.url}" type="video/mp4">
                                Tu navegador no soporta la visualización del video. Actualizalo.
                            </video>
                    </div>   
                    `;
                }

                $(".gridResources").append(source);

                $(".resourceCard").click(function () {
                    var id = $(".modifyPanel").data("id");
                    var newUrl = $(this).data("url");
                    var params = {
                        "newUrl": newUrl,
                        "idResource": id,
                        "_token": $('meta[name="csrf-token"]').attr('content')
                    };

                    $.ajax({
                        data: params,
                        url: '/admin/recursos/changeResource',
                        type: 'post',

                        success: function (response) {
                            let route = "div #" + id + " img";
                            $(route).attr('src',newUrl);

                            route = "div #" + id + " .resourceUpdated";
                            $(route).text(response);


                            $(".modifyPanel").hide();
                            $(".modifyPanel").remove();
                        },

                        error: function (response) {
                            alert("Error en la petición")
                        },
                    });
                })
            })
        },

        error: function (response) {
            alert("Error en la petición ")
        },
    });
}

$(".closeModifyWindow").click(() => {
    $(".addPanel").hide();
    $(".backPanel").hide();
})