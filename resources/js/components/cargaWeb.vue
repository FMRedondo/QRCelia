<template>
    <div class="cargas">
        <div class="imagenCarga"></div>
        <div class="contenidoPunto">
        </div>
    </div>
</template>

<style scoped>
    .cargas{
        width: 100%;
        overflow: hidden;
        background-color: white;
        color: black;
        position: relative;
    }

    .imagenCarga{
        width: 100%;
        height: 27em;
        animation: carga 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        background: linear-gradient(to right, #eeeeee 10%, #dddddd 50%, #eeeeee 90%);
        position: absolute;
        top: 0;
        left: 0;
    }


    .contenidoPunto{
        margin-top: 27em;
    }

    @keyframes carga{
        0%{
            left: -100%;
        }
        100%{
            left: 100%;
        }
    }




</style>