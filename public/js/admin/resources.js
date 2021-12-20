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
                <div class="card p-2" style="width: 33%;">
                    <img alt="" class="w-100" src="${thumbnail}">
                </div>
                `;
                $("#mostrarRecursos").append(content);
            })
            $(".btnShowEditResource").click(showEditResource);
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
    $(".resourceName").val("");
}

// Funcion para añadir un nuevo recurso
$(".btnSendAddResource").click(addResource);
function addResource(){
    // MOVIDA PARA SUBIR FOTOS
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
            $("tbody").empty();
            response.forEach(function (data) {
                if (data.updated_at == null) {
                    data.updated_at = "No disponible"
                }
                if (data.created_at == null) {
                    data.created_at = "No disponible"
                }

                let tableContent = `
                    
                `;
                $("tbody").append(tableContent);
            })
            $(".btnShowEditResource").click(showEditResource);
            $(".btnDelResource").click(showDelResource);
        },

        error: function (response) {
            alert("Error en la peticion");
        }
    });
}

// Funcion para editar una categoria
$(".btnShowEditResource").click(showEditResource);
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
            <div class="w-50 m-auto p-5  mx-auto my-auto rounded-xl shadow-lg  bg-white modifyPanel">
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

            $(".delPanel").after(content);
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