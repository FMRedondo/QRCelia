<template>
    <div class="puntoInteres">
        <img src="https://iescelia.org/web/wp-content/uploads/2015/05/home_slider_2-780x400.jpg" alt="IES CELIA VIÑAS">
        <div class="contenidoPunto">
            <h3>{{titulo}}</h3>
            <p class="descripcion">{{descripcion}}</p>
            <p>{{texto}}</p>
            <a href="#">Leer más</a>
        </div>
    </div>
</template>

<style scoped>
    .puntoInteres{
        width: 30%;
        margin-bottom: 1em;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        transition: ease-in-out 200ms;
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


</style>

<script>
export default {
  props: {
    titulo: String,
    imagen: String,
    texto: String,
    descripcion: String
  }
};
</script>