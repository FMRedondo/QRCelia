<template>
    <section class="comentarios ultimoElemento" id="comentarios" v-bind:data-id="about">
        <separador-component texto='comentarios'></separador-component>
        <div class="contenidoComentario">
            <p class="textoComentario">Porfavor, si tienes alguna duda o segurencia sobre la web no dude en enviarnos tu sugerencia o contactar en el aula 8. Muchas gracias!</p>
            <textarea type="text" name="comentario" id="comentario" required></textarea>
            <button id="btn" v-on:click="enviarComentario()"><span>Enviar</span></button>
        </div>
    </section> 
</template>

<script>
export default {
    props:{
        about: Number,
    },
    methods: {
        async enviarComentario(){
            const mensaje = document.getElementById('comentario').value 
            if (!mensaje.length <= 0){
                await fetch('/api/comentarios/addComment',{
                method: 'POST',
                headers:{
                   "Accept": "application/json",
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: mensaje, id: this.about})
            }).then((response) => {
                const contenido = `
                    <div id='mensajeAlerta'>
                       <div class='iconoAlerta'>
                            <i class="fa-regular fa-circle-check"></i>
                       </div>
                       <div class="contentAlert">
                            <p class='tituloAlert'>¡Muchas gracias!</p>
                            <p class='textoAlert'>Gracias por colaborar en este proyecto sobre nuestro instituto</p>
                            <p class='textoAlert'>Si deseas saber más sobre el proyecto puedes visitar el aula 8 y preguntar</p>
                       </div>
                    </div>
                `
                const panel = document.getElementById("app")
                panel.innerHTML += contenido

                const ventana = document.getElementById("mensajeAlerta")
                const timer = setTimeout(() => {
                    ventana.classList.add("dissapear");
                }, 3000);

            })
            }
        }
    },
}
</script>


<style>

    /* MENSAJE DE ALERTA  */
    #mensajeAlerta{
        display: flex;
        position: fixed;
        flex-direction: column;
        width: 50%;
        top: 18%;
        left: 25%;
        color: black !important;
        z-index: 9999999;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }

    .iconoAlerta{
        width: 100%;
        padding: 1.5em;
        background-color: #38C172;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2em 2em 0 0;
    }

    .iconoAlerta i {
        font-size: 5em;
        color: whitesmoke;
    }

    .contentAlert{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #A2F5BF;
        padding: 1em;
        font-size: 1.5em;
        border-radius: 0 0 2em 2em;
    }

    .tituloAlert{
        font-size: 2em;
    }


    .comentarios{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    #comentario{
        width: 100% !important;
        height: 10em !important;
        border: none;
        margin-bottom: 2em;
        border: 2px solid #C6A878;
        transition: ease-in-out 300ms;
        border-radius: 5px;
    }

    #comentario:focus{
        outline: none;
        border: 2px solid var(--colorPrimario);
    }

    p{
        color: black;
        margin-bottom: 1em;
        text-align: justify;
    }

    #btn{
        padding: 1em;
        text-align: center;
        background-color: #C6A878;
        border: none;
        color: white;
        position: relative;
        z-index: 1;
        overflow: hidden;
        width: 30%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    #btn::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        left: calc( -100% - 80px);
        background: var(--colorPrimario);
        border-bottom: 80px solid var(--colorPrimario);
        border-right: 80px solid transparent;
        transition: 300ms ease-in-out;
    }

    #btn:hover::after{
        left: 0;
        cursor: pointer;
    }

    span{
        position: relative;
        z-index: 3;
    }

    .contenidoComentario{
        width: 75%;
        margin: 0 auto
    }

    .textoComentario{
        color: white;
    }

    .dissapear{
        animation-name: desaparece;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }


    @media (max-width: 950px){
        .contenidoComentario{
            width: 100%;
        }

        #btn{
            width: 100%;
        }
    }

    @keyframes desaparece{
        0%{
            opacity: 1;
        }
        25%{
            opacity: 0.75;
        }
        50%{
            opacity: 0.5;
        }
        75%{
            opacity: 0.25;
        }
        100%{
            opacity: 0;
            display: none;
        }
    }

</style>