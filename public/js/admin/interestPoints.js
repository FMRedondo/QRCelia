const token = $('meta[name="csrf-token"]').attr('content');

/**
 * Realizar peticiones al servidor con el metodo get
 * @param {string} url URL donde queremos realizar la peticion GET
 * @returns devuelve un JSON con los datos pedidos al servidor
 */
const getData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });

    return response.json();
}


/**
 * Realiar peticiones al servidor con el metodo post
 * @param {string} url URL donde queremos realizar la peticion
 * @param {objeto} data  Objeto con los parametros que queremos enviar el servidor
 * @returns devuelve un JSON con los datos pedidos al servidor
 */
const postData = async (url = '', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });

    return response.json();
}

const index = async () => {
    var response;
    await getData('/admin/puntosInteres/getPoints', {}).then((res) => {
        response = res;
    })
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
        btnEdit[i].addEventListener('click', editarPunto)
}

index();

const editarPunto = async (element) =>{
    const id = element.target.getAttribute('data-id');
    var response;
    await getData('/admin/puntosInteres/getPoint', {id: id}).then((res) => {
        response = res;
    })

    console.log(response)

}






/*

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

*/

