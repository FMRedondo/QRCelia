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
                let tableContent = "";

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
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                    <div class="imgThumbnail">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                        src="${thumbnail}" alt="Image Size 720x400" />
                        <button type="button" class="btn btn-success rounded-circle flex editButton" data-id='${data.id}'>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate">
                            ${data.name}
                        </h2>
                        <p class="text-gray-600 font-light text-md mb-3">
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
                                    <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
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
function addResource(){
    var params = {
        "_token": $('meta[name="csrf-token"]').attr('content')
    }
    $.ajax({
        data: params,
        url: '/admin/recursos',
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
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                <div class="imgThumbnail">
                    <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                    src="${thumbnail}" alt="Image Size 720x400" />
                    <button type="button" class="btn btn-success rounded-circle flex editButton" data-id='${data.id}'>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
                <div class="p-4">
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate">
                        ${data.name}
                    </h2>
                    <p class="text-gray-600 font-light text-md mb-3">
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
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">
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
                    <div class="rounded-xl shadow-lg bg-white modifyPanel bigPanel">
                        <div class"d-flex" style="height:10%; background-color:#F4F4F4;">
                            <p class="display-4 p-1">Editar un recurso</p>
                        </div>
                        <div class="w-100 d-flex" style="height:90%;">
                            <div class="w-50 d-flex justify-content-center align-items-center">
                                <div>
                                    <div class="w-100">
                                        <img class="rounded w-full object-cover object-center"
                                            src="${thumbnail}" alt="Portada de recurso" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-50 d-flex flex-column p-5">
                                
                            </div>
                        </div>
                    <div>
                `;
            })

            $("#resourceList").after(content);
            $(".modifyPanel").show();

            $(".btnWindowModify").click(function () {
                if ($(this).data("val")) {
                    $(".modifyPanel").remove();
                }
            })

        },

        error: function (response) {
            alert("Error en la peticion");
        },

    });
}