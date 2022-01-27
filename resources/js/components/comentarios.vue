<template>
    <section class="comentarios ultimoElemento" id="comentarios" v-bind:data-id="about">
        <separador-component texto='comentarios'></separador-component>
        <div class="contenidoComentario">
            <p>Porfavor, si tienes alguna duda o segurencia sobre la web no dude en enviarnos tu sugerencia o contactar en el aula 8. Muchas gracias!</p>
            <textarea type="text" name="comentario" id="comentario" required></textarea>
            <button id="btn" v-on:click="enviarComentario()"><span>Enviar</span></button>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        about: String,
    },
    methods: {
        async enviarComentario(){
            const mensaje = document.getElementById('comentario').value 
            await fetch('/api/comentarios/addComment',{
                method: 'POST',
                headers:{
                   "Accept": "application/json",
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: mensaje, id: this.about})
            }).then((response) => {
                alert(response)
            })
        }
    },
}
</script>


<style scoped>

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
        color: white;
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


    @media (max-width: 950px){
        .contenidoComentario{
            width: 100%;
        }

        #btn{
            width: 100%;
        }
    }

</style>