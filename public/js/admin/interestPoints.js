const token = $('meta[name="csrf-token"]').attr('content');

/**
 * Funcion para realizar petciones asincronas al servidor
 * @param {objeto} data Objeto con todos los parametros que queremos enviar al servidor
 * @param {string} url URL de la peticion
 * @param {string} type tipo de peticion (post, get, put, etc)
 * @param {funtion} success funcion a realizar si la peticion funciona perfectamete
 */
const ajax = async (data, url, type, success) => {
    $.ajax({
        data: data,
        url: url,
        type: type,

        success: success,

        error: function (response) {
            alert("Error en la peticion");
            console.log(response);
        },
    });
}


const index = () => {
    const response = ajax({}, '/admin/puntosInteres/getPoints', 'get', ( response ) => {
        const contenidoVista = document.querySelector(".contenidoPuntos")
            contenidoVista.innerHTML = "";
            response.forEach(data => {
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
                            <button class="btn btn-success rounded-circle flex editButton fa-solid fa-pen-to-square" data-id=${data.id}></button>
                        </div>
                    </div>    
                </div>`;
        
                contenidoVista.innerHTML += contenidoTabla;
        });
        
        const btnEdit = document.getElementsByClassName("editButton");
        for(let i = 0; i < btnEdit.length; i++)
            btnEdit[i].addEventListener('click', datosPuntoInteres)
    })
};


index();


const datosPuntoInteres = (element) => ajax({'id': element.target.getAttribute('data-id'), '_token': token}, '/admin/puntosInteres/getPoint', 'POST', (response) => {
    //const modifyPanel = document.querySelector(".modifyPanel")
    //modifyPanel.style.display = "fixed"
    console.log(response)
});

