<template>
    <div class="persona">
        <div class="imagen">
            <img v-bind:src="imagen" v-bind:alt="textoAlt">
        </div>
        <div class="datosPersona">
            <h3>{{nombre}}</h3>
            <p class="profesion">{{profesion}}</p>
            <p class="texto">{{texto}}</p>
        </div>
    </div>
</template>


<style scoped>
    .persona{
        width: 100%;
        background-color: white;
        margin-top: 5em;
        transition: ease-in-out 300ms;
    }

    .persona:hover{
        transform: translateY(-0.5em);
    }

    .persona .imagen{
        width: 30%;
        margin: 0 auto;
        transform: translateY(-3.5em);
        background-color: white;
        overflow: hidden;
        border-radius: 50%;
    }

    .persona .imagen img{
        width: 100%;
        border: 2px solid var(--colorPrimario);
                border-radius: 50%;
    }

    .datosPersona{
        padding: 2em;
    }

    h3{
        color: black;
        margin-top: -2.5em;
        text-align: center;
        font-size: 1.8em;
    }

    .profesion{
        text-align: center;
        color: var(--colorSecundario);
        font-weight: bolder;
        margin-top: 0.2em;
    }

    .texto{
        text-align: justify;
    }

</style>


<script>
export default {
    props: {
        imagen: String,
        textoAlt: String,
        nombre: String,
        profesion: String,
        texto: String,
    },
    methods:{

    }
}
</script>