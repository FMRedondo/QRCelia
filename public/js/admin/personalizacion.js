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
    ajax({}, '/admin/obtenerCustomizacion', 'GET', response => {
        const contenidoVista = document.getElementById('contenido')

        const tabla = `
        <table class="table table-bordered mt-3">
            <thead>
            <tr>
                <th scope="col">Clave</th>
                <th scope="col">Valor</th>
            </tr>
            </thead>
            <tbody id="datos">
            </tbody>
        </table>
        `
        contenidoVista.innerHTML = tabla
        const datos = document.getElementById('datos')
        response.forEach(data => {
            let contenidoTabla = `
            <tr>
                <th scope="row">${data.option}</th>
                <td>
                    <input type='text' data-name=${data.option} value='${data.value}' class='actualizarCampo'>
                </td>
            </tr>`;
            datos.insertAdjacentHTML('beforeend', contenidoTabla)
        });

        const inputActualizar = document.getElementsByClassName('actualizarCampo')
        for(let i = 0; i < inputActualizar.length; i++)
            inputActualizar[i].addEventListener('change', actualizarCampo)
    }) 
}

index()


const actualizarCampo = elemento => {
   const campo = elemento.target.getAttribute('data-name')
   const valor = elemento.target.value

   ajax({'campo': campo, 'valor': valor, '_token' : token}, '/admin/cambiarCustomizacion', 'POST', response => {

   })
}