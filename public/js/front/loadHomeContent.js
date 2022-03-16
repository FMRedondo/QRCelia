window.addEventListener('DOMContentLoaded', (event) => {
    this.getHomeData();
});

async function getHomeData() {
    const response = await fetch("/obtenerCustomizacion",{
        method: "get",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
        var options = {};

        response.forEach(opcion => {
            options[opcion.option] = opcion.value;
        })

        const datosHome = document.getElementById("datosHome");
        const content = `
        <div class="wrapper">
            <p class="datosBanner">
                ${options.titulo}
            </p>
            <p class="textoBanner">
                ${options.descripcion}
            </p>
            <div class="botones">
                <a href="${options.urlboton1}" class="boton">
                    <span>
                        ${options.boton1}
                    </span>
                </a>
                <a href="${options.urlboton2}" class="boton">
                    <span>
                        ${options.boton2}
                    </span>
                </a>
            </div>
        </div>
        `;
        
        document.getElementById("tituloHeader").innerHTML = `<span id="tituloBold">${options.tituloBold}</span>${options.tituloNormal}</h1>`;
        
        datosHome.innerHTML = content;

        document.getElementById("loadSection").remove();
}