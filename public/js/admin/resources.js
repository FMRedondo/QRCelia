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
            content = `
            <div class="w-75 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white modifyPanel">
                <div class="">
                    <div class="text-center p-5 flex-auto justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square w-16 h-16 flex items-center mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#0069d9" stroke="#0069d9">
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"></path>
                    </svg>
                        <h2 class="text-xl font-bold py-4 ">Modificar categoria</h2>
                        <div class='form-group mb-4'>  
                            <label class='mb-2'>Nombre:</label>  
                            <input type='text' class='form-control resourceName resourceNameMod rounded-pill'  data-field='name' value='PRUEBA' name='resourceNameMod'>  
                        </div>  
                    </div>
                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                        <button class="mb-2 md:mb-0 bg-primary border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg btnWindow btn btn-lg btn-success btnWindowModify btnSendModifyResource" data-val='true'>Modificar</button>
                    </div>
                </div>
            </div>
            `;

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
$(document).on('keyup', function(e) {
    if (e.key == "Escape" && $(".modifyPanel").is(":visible")){
        $(".modifyPanel").remove();
    }
});