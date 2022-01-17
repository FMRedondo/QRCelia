<template>
    <section class="separacion">
        <div class="linea contenido"></div>
        <div class="texto contenido">{{texto}}</div>
        <div class="linea contenido"></div>
    </section>
</template>

<style scoped>
    
    .separacion{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin: 1em auto;
    }

    .contenido{
        width: 33%;
    }

    .linea{
        display: block;
        background-color: black;
        width: 20%;
        height: 3px;
    }

    .texto{
        border: 2px solid black;
        color: black;
        padding: 1em;
        text-transform: uppercase;
        font-weight: bolder;
        text-align: center;
    }

</style>

<script>
export default {
  props: {
    texto: String
  }
};
</script>