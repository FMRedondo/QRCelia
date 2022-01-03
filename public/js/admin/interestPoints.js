$(document).ready(() => {
  
    var parametros = [];
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        data: parametros,
        url: '/admin/puntosInteres/getPoints',
        type: 'GET',

        success: function (response) {
            $(".contenidoPuntos").empty();
            response.forEach(function (data) {
                let contenidoTabla = `
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                    src="https://picsum.photos/720/400" alt="Image Size 720x400" />
                <div class="p-4">
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2 whitespace-nowrap truncate">
                        ${data.name}
                    </h2>
                    <p class="text-gray-600 font-light text-md mb-3">
                      ${data.description}
                    </p>
                    <div class="py-4 border-t border-b text-xs text-gray-700">
                        <div class="grid grid-cols-6 gap-1">
                            <div class="col-span-2">
                                Beds:
                                <span
                                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-full">3</span>
                            </div>
                            <div class="col-span-2">
                                Bathrooms:
                                <span
                                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-400 rounded-full">2</span>
                            </div>
                            <div class="col-span-2">
                                Area:
                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-400 rounded-full">110m <sup>2</sup></span>
                            </div>
                        </div>
                    </div>
        
                    <div class="flex items-center mt-2 flex-row-reverse">
                        <form method='post' action='/admin/verPuntoInteres'>
                            <input type="hidden" name="_token" value="${token}"/>
                            <input type="hidden" name="id" value="${data.id}"/>
                            <input type='submit' class="btn btn-success rounded-circle flex editButton" value='<i class="fa-solid fa-pen-to-square"></i>'>
                        </form>
                    </div>
                </div>    
            </div>`;

                $(".contenidoPuntos").append(contenidoTabla);


            });
        },

        error: function (response) {
            alert("error en la peticion");
        }
    });

})