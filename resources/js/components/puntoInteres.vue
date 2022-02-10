<template>
    <div class="puntoInteres">
        <img v-bind:src="'/img/puntosInteres/' + imagen" alt="IES CELIA VIÑAS">
        <div class="contenidoPunto">
            <h3>{{titulo}}</h3>
            <p class="descripcion">{{descripcion}}</p>
            <p class="texto" v-html="texto"></p>
            <a v-bind:href="enlace">Leer más</a>
        </div>
    </div>
</template>

<style scoped>
    .texto *{
        color: black !important;
    }

    .puntoInteres{
        width: 100%;
        margin-bottom: 1em;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        transition: ease-in-out 200ms;
        background-color: white;
        overflow: hidden;
    }

    .texto{
        color: black !important;
    }

    .puntoInteres:hover{
        transform: translateY(-0.5em);
    }

    .puntoInteres img{
        width: 100%;
    }

    .contenidoPunto{
        padding: 1.5em;
    }

    .contenidoPunto h3{
        color: black;
        text-transform: uppercase;
        font-weight: bolder;
        margin-bottom: 0.5em;
    }

    .descripcion{
        text-align: justify;
        font-weight: bolder;
        margin-bottom: 0.5em;
        color: var(--colorSecundario);
    }
    
    a{
        display: block;
        width: 50%;
        padding: 0.5em;
        color: var(--colorPrimario);
        font-weight: bolder;
        text-decoration: none;
        margin-top: 1em;
        text-transform: uppercase;
        transition: ease-in-out 200ms;
    }

    a:hover{
        color: var(--colorSecundario);
    }

    .texto *{
        color: black !important;
    }

    /* RESPONSIVE */


    @media (max-width: 1300px){
        .puntoInteres{
            width: 100%;
        }
    }

    @media (max-width: 850px){
        .puntoInteres{
            width: 100%;
            margin: 0 auto;
        }
    }


</style>

<script>
export default {
  props: {
    titulo: String,
    imagen: String,
    texto: String,
    descripcion: String,
    enlace: String,
  }
};
</script>