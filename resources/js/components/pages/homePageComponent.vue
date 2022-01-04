<template>
    <div class="banner">
        <div class="container">
            <div class="contenidoBanner">
                <h1>QRCelia</h1>
                <p>Aprende toda la historia del instituto!</p>
            </div>
            <div class="imagenBanner">
                <img src="/img/celia.jpg" alt="ies celia viñas">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>

<style scoped>

    .container{
        width: 70%;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }

    .banner{
        width: 100%;
        height: 100%;
        background: url('/img/home/escudo.png') top left no-repeat,
            url('/img/home/porton.png') top right no-repeat,
            url('/img/home/escaleras.png') bottom left no-repeat,
            url('/img/home/ventana.png') bottom right no-repeat;
        background-size: 20%;
    }

    .contenidoBanner{
        width: 70%;
    }

    .imagenBanner{
        width: 30%;
    }

    .imagenBanner img{
        width: 100%;
    }

</style>
