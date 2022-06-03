<template>
    <section class="separacion">
        <div class="linea"></div>
        <div class="texto">{{texto}}</div>
        <div class="linea"></div>
    </section>
</template>

<style scoped>
    
    .separacion{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: 2em;
    }

    .contenido{
        width: 33%;
    }

    .linea{
        display: block;
        background-color: white;
        width: 20%;
        height: 3px;
    }

    .texto{
        border: 2px solid white;
        color: white;
        padding: 1em;
        text-transform: uppercase;
        font-weight: bolder;
        text-align: center;
        width: 33%;
    }

    .mt{
        margin-top: 3em;
    }

     @media (max-width: 1100px){
        .linea{
            width: 10%;
        }

        .contenido{
            width: 80%;
        }
    }

    @media (max-width: 700px){
        .linea{
            width: calc(100% - 20px)!important
        }

        .contenido{
            width: calc(100% - 20px) !important;
        }
    }

</style>

<script>
export default {
  props: {
    texto: String
  }
};
</script>