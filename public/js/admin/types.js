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
        dataType: 'JSON',
        type: 'GET',

        success: function (response) {
            $("tbody").empty();
            $(".loadingImage").remove();
            response.forEach(function(data) {
                if (data.created_at == null) 
                    data.created_at = "No disponible"

                if (data.updated_at == null) 
                    data.updated_at = "No disponible"

                let tableContent = `
                <tr class="text-gray-700 typesInfo#1">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">${data.name}</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-4 py-3 text-ms font-semibold">${data.created_at}</span>
                    </td>
                    <td class="px-4 py-3 text-xs border">
                        <span class="px-4 py-3 text-ms font-semibold">${data.updated_at}</span>
                    </td>
                    <td class="px-4 py-3 text-sm border d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary btnShowEditType" data-id='${data.id}'>Modificar</button>
                        <button type="button" class="btn btn-danger btnDelType" data-id='${data.id}'>Eliminar</button>
                    </td>
                </tr>
                `;

                $(".tableContent").append(tableContent);
            });
        },

        error: function (response){
            console.log("Error en la petición");
        }
    });

    /*

    // Buscar una categoría
    $(".inputTypeSearch").keyup(searchType);
        function searchType(){
            var parametros = {
                "function": 'searchType',
                "busqueda": $(".inputTypeSearch").val(),
            }

            $.ajax({
                data: parametros,
                url: '',
                type: 'post',

                success: function (response) {
                    $(".typesInfo").empty();
                    $(".typesInfo").append(response);

                    $(".btnDelType").click(delType);
                    $(".btnShowEditType").click(showEditType);
                },

                error: function (response) {
                    alert("error en la peticion");
                }
            });
        }

    // Añadir una nueva categoria
    $('.btnAddType').click(function(){
        $(".addTypePanel").toggle();
        $(".addType ").click(addType);
    });

    // Funcion para añadir una nueva categoria de puntos
    function addType(){
        var typeName = $(".addTypeName").val();

        var parametros = {
                "name": typeName,
            }

            $.ajax({
                data: parametros,
                url: '',
                type: 'post',
                
                success: function (response) {
                    $(".typesInfo").empty();
                    $(".typesInfo").append(response);
                },

                error: function (response) {
                    alert("error en la peticion");
                }
            });
    }

    // Funcion para eliminar UNA categoria de puntos
    $(".btnDelType").click(delType);
    function delType(){
        var id = $(this).data('id');
        var parametros = {
            "id": id,
        }

            $.ajax({
                data: parametros,
                url: 'categorias',
                type: 'post',
                
                success: function (response) {
                var kill = ".typesInfo#" + id;
                    $(kill).remove();
                },

                error: function (response) {
                    alert("error en la peticion");
                }
            });
    }

    // Mostrar ventana para editar una categoria
    $(".btnShowEditType").click(showEditType);
    function showEditType(){
        var parametros = {
            "function": '',
            "id": $(this).data('id'),
        }

        $.ajax({
                data: parametros,
                url: '',
                type: 'post',
                
                success: function (response) {
                $(".editTypePanel").toggle();
                $(".editTypeContent").empty();
                $(".editTypeContent").append(response);
                $(".editType").change(editType);

                },

                error: function (response) {
                    alert("error en la peticion");
                }
        });

    }


    // Cerrar la ventana para editar una categoria
    $(".closeEditType").click(closeEditTypeWindow);
    function closeEditTypeWindow(){
        $(".editTypePanel").toggle();
    }

    // Editar una categoria
    function editType(){
        var parametros = {
            "funcion": '',
            "id": $(this).data('id'),
            "campo":$(this).data('campo'),
            "valor": $(this).val(),
        }

        var ruta = "#" + $(this).data('id') + " ." + $(this).data('campo');
        var valor = $(this).val();

        $.ajax({
                data: parametros,
                url: '',
                type: 'post',
                
                success: function (response) {
                $(ruta).empty();
                $(ruta).append(valor);

                },

                error: function (response) {
                    alert("error en la peticion");
                }
        });
    }
    
    */
    
    }