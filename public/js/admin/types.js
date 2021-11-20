//                                      //
//  jQuery para CATEGORIAS de puntos    //
//           QRCELIA                    //
//                                      //

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