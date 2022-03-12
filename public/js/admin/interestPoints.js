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
           const error = `
           <div class="alert alert-danger" role="alert">
               ERROR, no se ha podido actualizar la información
            </div>
           `;

           const panelMensaje = document.getElementById('mensaje')
           panelMensaje.innerHTML = error;
           console.log("Error al realizar la peticion")

           const animacion = setInterval(() => {
            panelMensaje.innerHTML = ""
           }, 3000)

        },
    });
}


const index = () => {
    const response = ajax({}, '/admin/puntosInteres/getPoints', 'get', ( response ) => {
        const contenidoVista = document.querySelector(".contenidoPuntos")
            contenidoVista.innerHTML = "";
            response.forEach(data => {
                let contenidoTabla = `
                    <div id="card${data.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%" >
                    <img class="imagenPunto lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                        src="/img/puntosInteres/${data.poster}" alt="${data.name}" />
                    <div class="p-4">
                        <h2 class="name text-lg text-gray-900 font-medium title-font mb-2 whitespace-nowrap truncate" id=${data.name} data-field='name'>
                            ${data.name}
                        </h2>
                        <p class="description text-gray-600 font-light text-md mb-3" id=${data.description} data-field='description'>
                        ${data.description}
                        </p>        
                        <div class="d-flex flex  mt-2 flex-row-reverse gap-3 ">
                            <button class="btn btn-danger rounded-circle flex removeButton fa-solid fa-trash " data-id=${data.id}></button>
                            <button class="btn btn-success rounded-circle flex editButton fa-solid fa-pen-to-square" data-id=${data.id}></button>
                        </div>
                    </div>    
                </div>`;
        
                contenidoVista.innerHTML += contenidoTabla;
        });
        
        const btnEdit = document.getElementsByClassName("editButton");
        for(let i = 0; i < btnEdit.length; i++)
            btnEdit[i].addEventListener('click', datosPuntoInteres)

        const btnDelete = document.getElementsByClassName('removeButton')
        for(let i = 0; i < btnDelete.length; i++)
            btnDelete[i].addEventListener('click', eliminarPunto)

        // FALTA HACER EL EVEVENTO PARA LA ACUALIZACION DE LOS DATOS

        const addbtn = document.getElementById("addbtn")
        addbtn.addEventListener('click', mostrarAñadirPunto)

        const closeWindows = document.getElementById("closeWindows")
        closeWindows.addEventListener('click', () => {
            const backpanel = document.getElementById('backpanel')
            const addPanel = document.getElementById('addPanel')
            addPanel.classList.toggle("mostrarPanel")
            backpanel.classList.toggle("mostrarPanel")
        })
    })
};


index();


const datosPuntoInteres = (element) => ajax({'id': element.target.getAttribute('data-id'), '_token': token}, '/admin/puntosInteres/getPoint', 'POST', (response) => {
    const resourceList = document.querySelector("#resourceList")
    var orden = JSON.parse(response[0].orden)
    const content = `
    
    <div class="rounded-xl shadow-lg bg-white modifyPanel bigPanel">
        <div class="d-flex align-items-center px-4" style="height:10%; background-color:#F4F4F4;">
            <p id="windowTitle" class="name display-4 p-1 w-75">Editar ${response[0].name}</p>
            <div class="d-flex w-25 justify-content-end">
                <div class="closeModifyWindow" style="color:#dc3545;">
                    <i type="button" class="fa-solid fa-circle-xmark fa-3x"></i>
                </div>
            </div>
        </div>

        <div class="modifyPanelContent w-100 d-flex" id='modifyPanelContent' style="height:90%;">
            <div class="w-50 d-flex justify-content-center align-items-center flex-column">
                <div class="w-100">
                <img src=/img/puntosInteres/${response[0].poster} style='width:90%; margin:0 auto'>
                </div>
                <div class='w-100'>
                <h3 class='h3 text-center m-3'>Orden de visualización</h3>
                <ul id="items" class='ordenar handle' data-id='prueba'>
                    <li data-name='${orden[0]}'>${orden[0]}</li>
                    <li data-name='${orden[1]}'>${orden[1]}</li>
                    <li data-name='${orden[2]}'>${orden[2]}</li>
                    <li data-name='${orden[3]}'>${orden[3]}</li>
                </ul>
                </div>
            </div>
            <div class="w-50 d-flex flex-column p-5">
                <div class="mb-4">
                    <label for="resourceName" class="form-label">Nombre:</label>
                    <input type="text" value="${response[0].name}" data-field='name' class="name form-control ResourceField editInput"  data-id=${response[0].id} id="resourceName" style="border-radius: 0.25rem">
                </div>

                <div class="mb-4">
                    <label for="resourceAutor" class="form-label">Descripcion:</label>
                    <input type="text" value="${response[0].description}" class="autor form-control ResourceField editInput"  data-id=${response[0].id} data-field="description" id="resourceAutor" style="border-radius: 0.25rem">
                </div>
                            
                <div class="mb-4">
                     <label for="resourceUser" class="form-label">Contenido</label>
                     <textarea class="ckeditor editInput" name="editor1" id="editor1" data-id=${response[0].id} rows="10" cols="88" data-field="text">${response[0].text}</textarea>
                </div>

                <div class='recursos'>
                    <button class='imagenes' id='imagenesEnlazadas' data-id='${response[0].id}'><i class="fa-solid fa-photo-film"></i> Imagenes </button>
                    <button class='imagenes' id='videosEnlazadas' data-id='${response[0].id}'><i class="fa-solid fa-video"></i> videos </button>
                    <button class='imagenes' id='audiosRelacionado' data-id='${response[0].id}'><i class="fa-solid fa-volume-high"></i> Audios</button>
                </div>
            </div>
        </div>`;

    resourceList.innerHTML = content;
    var el = document.getElementById('items');
    //var sortable = Sortable.create(el);
    var sortable = new Sortable(el, {
        group: "posiciones",
        sort: true,
        handle: '.handle',
        animation: 150,
        dataIdAttr: "data-name",
        store: {
            set:  function (sortable) {
                var order = sortable.toArray();
                var orden = []
                for(let i = 0; i < order.length; i++){
                    let recurso
                    
                    
                    orden.push(recurso)
                    
                }

                console.log(order)

                console.log(orden)
                ajax({"id": response[0].id, "orden": JSON.stringify(order), "_token": token}, '/admin/puntosInteres/cambiarOrden', 'POST', response => {
                   
                })
                
            }
        }
    });
    

    

    const modifyPanel = document.querySelector(".modifyPanel ")
    const backPanel = document.querySelector(".backPanel")
    backPanel.style.display = "block"
    modifyPanel.style.display = "block"

    const botonCerrar = document.querySelector(".closeModifyWindow")
    botonCerrar.addEventListener('click', () => {
        modifyPanel.style.display = "none"
        backPanel.style.display = "none"
    })

    const inputActualizar  = document.getElementsByClassName("editInput");
        for(let i = 0; i < inputActualizar.length; i++)
            inputActualizar[i].addEventListener('change', actualizarDatos)

    var editor = CKEDITOR.replace('editor1')

    const btnImagenes = document.getElementById('imagenesEnlazadas')
    btnImagenes.addEventListener('click', imagenesRelacionadas)

    const btnVideos = document.getElementById('videosEnlazadas')
    btnVideos.addEventListener('click', videosRelacionados)

    const btnAudios = document.getElementById('audiosRelacionado')
    btnAudios.addEventListener('click', audiosRelacionados)
})


const actualizarDatos = (element) => ajax(
    {   
        'id': element.target.getAttribute('data-id'),
        'field':  element.target.getAttribute('data-field'),
        'value' : element.target.value,
        '_token': token
    },'/admin/puntosInteres/editPoint','POST',(response) => {
    
    const aviso = `
        <div class="alert alert-success" role="alert">
            Datos actualizados correctamente
        </div>
    `;

    const panelMensaje = document.getElementById('mensaje')
    panelMensaje.innerHTML = aviso;

    const ruta = `#card${element.target.getAttribute('data-id')} .${element.target.getAttribute('data-field')}`
    const cambiarCampos = document.querySelector(ruta);
    cambiarCampos.innerHTML = element.target.value;

    //ESTO NO FUNCIONA
    const ruta2 = `#windowTitle${element.target.getAttribute('data-id')} .${element.target.getAttribute('data-field')}` //<--- EL PETARDAZO ESTÁ AQUI
    const cambiarCampos2 = document.querySelector(ruta2);
    cambiarCampos2.innerHTML = "Editar " + element.target.value;
  
    const animacion = setInterval(() => {
        panelMensaje.innerHTML = ""
    }, 3000)

})


const  mostrarAñadirPunto = (element) => {
   const backpanel = document.getElementById('backpanel')
   const addPanel = document.getElementById('addPanel')
   const savePoint = document.getElementById("savePoint")
   addPanel.classList.toggle("mostrarPanel")
   backpanel.classList.toggle("mostrarPanel")
   // quitarle el scroll al document

   savePoint.addEventListener('click', añadirPunto)   
}


 const añadirPunto = async (event) => {
    event.preventDefault();
    
    let nombre = document.getElementById("typeName").value
    let desc   = document.getElementById("typeDesc").value
    let texto  = new String(CKEDITOR.instances['texto'].getData())
    let fecha = new Date()

    var formData = new FormData()
    var poster = document.getElementById('poster').files;
    formData.append('poster', poster[0])
    formData.append('fecha', fecha)
    formData.append('nombre', nombre)
    formData.append('description', desc)
    formData.append('texto', texto)
    await fetch('/api/puntosInteres/subirPoster', {
        method: 'post',
        body: formData
    }).then(data => data.json()).then (response => {
        const backpanel = document.getElementById('backpanel')
        const addPanel = document.getElementById('addPanel')

        backpanel.classList.toggle("mostrarPanel")
        addPanel.classList.toggle("mostrarPanel")

        document.getElementById("typeName").value = ""
        document.getElementById("typeDesc").value = ""
        CKEDITOR.instances['texto'].setData("")

        let contenidoTabla = `
        <div id="card${response.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
            src="/img/puntosInteres/${response.poster}" alt="${nombre}" />
        <div class="p-4">
            <h2 class="name text-lg text-gray-900 font-medium title-font mb-2 whitespace-nowrap truncate" id=${nombre} data-field='name'>
                ${nombre}
            </h2>
            <p class="description text-gray-600 font-light text-md mb-3" id=${desc} data-field='description'>
            ${desc}
            </p>        
            <div class="flex items-center mt-2 flex-row-reverse">
                <button class="btn btn-success rounded-circle flex editButton fa-solid fa-pen-to-square" data-id=${response.id}></button>
            </div>
        </div>    
    </div>`;

 
    

        const contenidoVista = document.querySelector(".contenidoPuntos")
        contenidoVista.innerHTML += contenidoTabla;

        
    })

}


/*
 *  BUSCAR PUNTOS DE INTERES
*/

const searchPoint = document.getElementById('searchPoint')
searchPoint.addEventListener('keyup', elemento => {
    let busqueda = elemento.target.value
    ajax({'search': busqueda, '_token': token}, '/admin/puntosInteres/searchPoints', 'POST', response => {
        const contenidoVista = document.querySelector(".contenidoPuntos")
        contenidoVista.innerHTML = "";
        response.forEach(data => {
            let contenidoTabla = `
                <div id="card${data.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%">
                <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                    src="/img/puntosInteres/${data.poster}" alt="${data.name}" />
                <div class="p-4">
                    <h2 class="name text-lg text-gray-900 font-medium title-font mb-2 whitespace-nowrap truncate" id=${data.name} data-field='name'>
                        ${data.name}
                    </h2>
                    <p class="description text-gray-600 font-light text-md mb-3" id=${data.description} data-field='description'>
                    ${data.description}
                    </p>        
                    <div class="flex items-center mt-2 flex-row-reverse">
                        <button class="btn btn-success rounded-circle flex editButton fa-solid fa-pen-to-square" data-id=${data.id}></button>
                    </div>
                </div>    
            </div>`;
    
            contenidoVista.innerHTML += contenidoTabla;
        });
    })

})


const eliminarPunto = elemento => {
    ajax({'id': elemento.target.getAttribute('data-id'), '_token': token}, '/admin/puntosInteres/eliminarPunto', 'POST', response => {
        let puntoInteres = document.getElementById(`card${elemento.target.getAttribute('data-id')}`)
        puntoInteres.remove()
    })
}


const cerrar = () => {
    modifyPanelContent.classList.toggle('oculto')
    document.getElementById('imagenesRelacionadas').remove()
    const btnBorrar =  document.getElementById('volver')
    btnBorrar.remove()
    btnBorrar.removeEventListener('click', cerrar)
}

const cerrarVideos = () => {
    modifyPanelContent.classList.toggle('oculto')
    document.getElementById('videosRelacionadas').remove()
    const btnBorrar =  document.getElementById('volver')
    btnBorrar.remove()
    btnBorrar.removeEventListener('click', cerrarVideos)
}


const cerrarAudios = () => {
    modifyPanelContent.classList.toggle('oculto')
    document.getElementById('audiosRelacionados').remove()
    const btnBorrar =  document.getElementById('volver')
    btnBorrar.remove()
    btnBorrar.removeEventListener('click', cerrarVideos)
}

/**
 * imagenes asociadas a un punto de interes
 */
const imagenesRelacionadas =  async (elemento) => {
    const modifyPanelContent = document.querySelector("#modifyPanelContent")
    modifyPanelContent.classList.toggle('oculto')

    const botonCerrar = document.querySelector('.closeModifyWindow')
    botonCerrar.insertAdjacentHTML("beforebegin", "<button id='volver'><i class='fa-solid fa-arrow-left'></i></button>")

    document.getElementById('volver').addEventListener('click', cerrar)

    const imagenes = await ajax({'id': elemento.target.getAttribute('data-id'), 'tipo': 'image'}, '/api/puntosInteres/verImagenesEnlazadas', 'POST', response => {
        const modifyPanelContent = document.querySelector("#modifyPanelContent")
        modifyPanelContent.insertAdjacentHTML("beforebegin", `<section id="imagenesRelacionadas"></section>`)
        const contenidoImagenesRelacionaas = document.getElementById('imagenesRelacionadas')
        response.forEach(data => {
            let contenido = `<img src='/img/puntosInteres/${data.url}' alt='${data.nombre}' class='${data.enlazado}' data-id=${data.id} data-idPunto=${elemento.target.getAttribute('data-id')}>`
            contenidoImagenesRelacionaas.insertAdjacentHTML("beforeend", contenido)
        })

        contenidoImagenesRelacionaas.addEventListener('click', modificarImagenesRelacionadas)
    })
}

const modificarImagenesRelacionadas =  async elemento => {
    var enlazado = elemento.target.getAttribute('class')
   // no lo reconoce como boolean por lo que no puedo hacer !enlazado para la asignacion :( me da toc, pero es lo que hay
   var enlazado;
    if(enlazado == 'true'){
        elemento.target.setAttribute('class', 'false')
        enlazado = 'false'
    }
    else{
        elemento.target.setAttribute('class', 'true')
        enlazado='true'
    }

    let idPunto = elemento.target.getAttribute('data-idPunto')
    let idRecurso = elemento.target.getAttribute('data-id')
    alert(`${idPunto} -> ${idRecurso} -> ${enlazado}`)
       
    await ajax({'idPunto': idPunto, 'idRecurso': idRecurso, 'enlazado': enlazado, '_token': token}, '/admin/puntosInteres/enlazarPuntoConRecurso', 'POST', response => {})
}


const videosRelacionados = async elemento => {
    const modifyPanelContent = document.querySelector("#modifyPanelContent")
    modifyPanelContent.classList.toggle('oculto')

    const botonCerrar = document.querySelector('.closeModifyWindow')
    botonCerrar.insertAdjacentHTML("beforebegin", "<button id='volver'><i class='fa-solid fa-arrow-left'></i></button>")

    document.getElementById('volver').addEventListener('click', cerrarVideos)
    
    const videos = await ajax({'id': elemento.target.getAttribute('data-id'), 'tipo': 'video'}, '/api/puntosInteres/verImagenesEnlazadas', 'POST', response => {
        const modifyPanelContent = document.querySelector("#modifyPanelContent")
        modifyPanelContent.insertAdjacentHTML("beforebegin", `<section id="videosRelacionadas"></section>`)
        const contenidoVideosRelacionaas = document.getElementById('videosRelacionadas')
        response.forEach(data => {
            let contenido = `<video src='/videos/${data.url}' alt='${data.nombre}' class='${data.enlazado}' data-id=${data.id} data-idPunto=${elemento.target.getAttribute('data-id')} ><video>`
            contenidoVideosRelacionaas.insertAdjacentHTML("beforeend", contenido)
        })

        contenidoVideosRelacionaas.addEventListener('click', modificarVideosRelacionados)
    })
}


const modificarVideosRelacionados = async elemento =>{
    var enlazado = elemento.target.getAttribute('class')

    var enlazado;
    if(enlazado == 'true'){
        elemento.target.setAttribute('class', 'false')
        enlazado = 'false'
    }
    else{
        elemento.target.setAttribute('class', 'true')
        enlazado='true'
    }

    let idPunto = elemento.target.getAttribute('data-idPunto')
    let idRecurso = elemento.target.getAttribute('data-id')
       
    await ajax({'idPunto': idPunto, 'idRecurso': idRecurso, 'enlazado': enlazado, '_token': token}, '/admin/puntosInteres/enlazarPuntoConRecurso', 'POST', response => {})
    
}

const audiosRelacionados = async elemento => {
    const modifyPanelContent = document.querySelector("#modifyPanelContent")
    modifyPanelContent.classList.toggle('oculto')

    const botonCerrar = document.querySelector('.closeModifyWindow')
    botonCerrar.insertAdjacentHTML("beforebegin", "<button id='volver'><i class='fa-solid fa-arrow-left'></i></button>")

    document.getElementById('volver').addEventListener('click', cerrarAudios)

    const imagenes = await ajax({'id': elemento.target.getAttribute('data-id'), 'tipo': 'audio'}, '/api/puntosInteres/verImagenesEnlazadas', 'POST', response => {
        const modifyPanelContent = document.querySelector("#modifyPanelContent")
        modifyPanelContent.insertAdjacentHTML("beforebegin", `<section id="audiosRelacionados"></section>`)
        const contenidoAudiosRelacionados = document.getElementById('audiosRelacionados')
        response.forEach(data => {
            let contenido = `
            <div>
                <audio src='/audio/${data.url}' controls></audio>
                <p class='${data.enlazado}' data-id=${data.id} data-idPunto=${elemento.target.getAttribute('data-id')}>Seleccionar/deseleccionar</p>
            </div>`
            
              /*
              let contenido = `
              <audio class='${data.enlazado}' data-id=${data.id} data-idPunto=${elemento.target.getAttribute('data-id')} constrols>
                <source src="/audios/${data.url}" type="audio/mp3">
                Tu navegador no soporta HTML5 audio.
              </audio>
              `
              */
            contenidoAudiosRelacionados.insertAdjacentHTML("beforeend", contenido)
        })

        contenidoAudiosRelacionados.addEventListener('click', modificarAudiosRelacionados)
    })
}


const modificarAudiosRelacionados = async elemento => {

    if(elemento.target.nodeName == "P"){
        var enlazado = elemento.target.getAttribute('class')
        // no lo reconoce como boolean por lo que no puedo hacer !enlazado para la asignacion :( me da toc, pero es lo que hay
        var enlazado;
         if(enlazado == 'true'){
             elemento.target.setAttribute('class', 'false')
             enlazado = 'false'
         }
         else{
             elemento.target.setAttribute('class', 'true')
             enlazado='true'
         }
     
     
         let idPunto = elemento.target.getAttribute('data-idPunto')
         let idRecurso = elemento.target.getAttribute('data-id')
            
         await ajax({'idPunto': idPunto, 'idRecurso': idRecurso, 'enlazado': enlazado, '_token': token}, '/admin/puntosInteres/enlazarPuntoConRecurso', 'POST', response => {})
    }
    
}