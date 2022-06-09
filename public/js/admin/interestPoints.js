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
        
           crearMensaje();
           const panelMensaje = document.getElementById('mensaje')
           panelMensaje.innerHTML = error;
           console.log("Error al realizar la peticion")

           const animacion = setInterval(() => {
                document.getElementById('mensaje').remove()
           }, 3000)

        },
    });
}


const eliminarPunto = elemento => {
    ajax({'id': elemento.target.getAttribute('data-id'), '_token': token}, '/admin/puntosInteres/eliminarPunto', 'POST', response => {
        let puntoInteres = document.getElementById(`card${elemento.target.getAttribute('data-id')}`)
        puntoInteres.remove()
    })
}

const index = () => {
    const response = ajax({}, '/admin/puntosInteres/getPoints?page=1', 'get', ( response ) => {
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
                        <div class="d-flex flex  mt-2 justify-content-between gap-3 ">
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

        const ordenBtn = document.getElementById('btnOrden')
        ordenBtn.addEventListener('click', modificarOrden)


        const closeWindows = document.getElementById("closeWindows")
        closeWindows.addEventListener('click', () => {
            const backpanel = document.getElementById('backpanel')
            const addPanel = document.getElementById('addPanel')
            addPanel.classList.toggle("mostrarPanel")
            backpanel.classList.toggle("mostrarPanel")
        })
    })
    document.getElementById('btnOrden').setAttribute('data-edit', 'false')
    document.getElementsByClassName('contenidoPuntos')[0].setAttribute("id", "")
}


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

        <div class="modifyPanelContent w-100 d-flex flex-wrap" id='modifyPanelContent' style="height:90%;">
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
                     <textarea class="ckeditor" name="editor1" id="editor1" data-id=${response[0].id} rows="10" cols="88" data-field="text">${response[0].text}</textarea>
                </div>

                <div class='recursos'>
                    <button class='imagenes' id='imagenesEnlazadas' data-id='${response[0].id}'><i class="fa-solid fa-photo-film"></i> Imagenes </button>
                    <button class='imagenes' id='videosEnlazadas' data-id='${response[0].id}'><i class="fa-solid fa-video"></i> videos </button>
                    <button class='imagenes' id='audiosRelacionado' data-id='${response[0].id}'><i class="fa-solid fa-volume-high"></i> Audios</button>
                </div>
            </div>
            <div class='w-50 d-flex justify-content-center align-items-center flex-column'>
                <h2 class='h2'>Categorias</h2>
                <div id='categoriasPuntos' class='d-flex flex-column flex-wrap' style='width: 90%'>
                    <i class="fa-solid fa-spinner fa-spin-pulse h1 d-flex justify-content-center m-auto mt-25" id='cargando'></i>
                </div>
            </div>
        </div>`;

    resourceList.innerHTML = content;
    pintarCategorias(response[0].id)
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

    editor.on('blur', (element) => {
        ajax(
            {
                'id': document.getElementById('editor1').getAttribute('data-id'),
                'field':  document.getElementById('editor1').getAttribute('data-field'),
                'value' : editor.getData(),
                '_token': token
            },'/admin/puntosInteres/editPoint','POST', response => {
        
            })
    })

})


const pintarCategorias = async idPoint => {
    await fetch(`/admin/puntosInteres/getType?id=${idPoint}`).then(data => data.json())
    .then(response => {
       document.getElementById("cargando").remove()
       response.forEach(element => {
        var input
        if(element.attached == true){
            input = `
            <label class='typesPoint'>
              <span>${element.type_name}</span>
              <input type='checkbox' data-id=${element.type_id} data-idPoint=${idPoint} class='inputType' checked/>
            </label>
           `
        }else{
            input = `
            <label class='typesPoint'>
              <span>${element.type_name}</span>
              <input type='checkbox' data-id=${element.type_id} data-idPoint=${idPoint} class='inputType'/>
            </label>
           `
        }

         document.getElementById("categoriasPuntos").innerHTML += input;

       });

       const inputType = document.getElementsByClassName('inputType')
       for(let i = 0; i < inputType.length; i++)
            inputType[i].addEventListener("change", changeInputType)
    })
}

const changeInputType = async element => {
   const input = element.target
   var attached = false
   if(input.checked)
        attached = true

   fetch(`/admin/puntosInteres/attachedPointType?idPoint=${input.getAttribute('data-idPoint')}&idType=${input.getAttribute('data-id')}&attached=${attached}`)
   .then(response => {console.log(response)})
}


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

    crearMensaje();
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
        panelMensaje.remove();
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

const modificarOrden = element => {
    if(element.target.getAttribute('data-edit') == 'false'){
        const contenidoPuntos = document.getElementsByClassName('contenidoPuntos')[0]
        contenidoPuntos.innerHTML = ""
        
        fetch("/admin/puntosInteres/getPoints").then(response => response.json()).then(data => {
            console.log(data)
        data.forEach(element => {
            let punto = `
            <div id="card${element.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32 cardMove" style="width: 30%" >
                <img class="rounded w-full object-cover object-center" src="/img/puntosInteres/${element.poster}" alt="${element.name}" />
                <p>${element.name}</p>
            </div>
            `
            contenidoPuntos.innerHTML += punto

            document.getElementById('btnOrden').setAttribute('data-edit', 'true')
            document.getElementsByClassName("contenidoPuntos")[0].setAttribute('id', 'movePoint')
            
            const el = document.getElementById("movePoint")
            Sortable.create(el, {
                group: "orden",
                sort: true,
                handle: '.handle',
                animation: 150,
                dataIdAttr: "data-id",
                store:{

                }
            })

            /*
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

            */
        });
        })
    }else{
        index()
    }
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
            <div id="card${response.id}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden w-32" style="width: 30%" >
            <img class="imagenPunto lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4"
                src="/img/puntosInteres/${response.poster}" alt="${nombre}" />
            <div class="p-4">
                <h2 class="name text-lg text-gray-900 font-medium title-font mb-2 whitespace-nowrap truncate" id=${nombre} data-field='name'>
                    ${nombre}
                </h2>
                <p class="description text-gray-600 font-light text-md mb-3" id=${desc} data-field='description'>
                ${desc}
                </p>        
                <div class="d-flex flex  mt-2 justify-content-between gap-3 ">
                    <button class="btn btn-danger rounded-circle flex removeButton fa-solid fa-trash " data-id=${response.id}></button>
                    <button class="btn btn-success rounded-circle flex editButton fa-solid fa-pen-to-square" data-id=${response.id}></button>
                </div>
            </div>    
        </div>`;


        const contenidoVista = document.querySelector(".contenidoPuntos")
        contenidoVista.innerHTML += contenidoTabla;

        console.log(response.qr)

        
    })

}

const mostrarFiltros = event => {
    const filter = document.getElementById("filtros")
    console.log(filter)
    filter.classList.toggle('oculto')
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
            let contenido = `<video src='/video/${data.url}' alt='${data.nombre}' class='${data.enlazado}' data-id=${data.id} data-idPunto=${elemento.target.getAttribute('data-id')} ><video>`
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

function crearMensaje() {
    var content = `
    <div class="mensaje" id="mensaje"></div>
    `;
    document.getElementById("app").append(content)
}