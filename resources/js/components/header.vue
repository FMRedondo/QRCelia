<template>
   <header class="header">
       <div class="wrapper">
           <div class="logo">
           <img src="/img/escudoCelia.png" alt="logo IES Celia Viñas">
           <h1 class="titulo"><span>qr</span>Celia</h1>
       </div>
       <nav>
           <a href="#">Inicio</a>
           <a href="#">Puntos Interes</a>
           <a href="#">206</a>
           <a href="#">kia</a>
       </nav>
       </div>
   </header>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 100px;
        position: fixed;
        top: 0;
        left: 0;
    }

    .header .wrapper{
        display: flex;
        justify-content: space-between;
        margin-top: 1em;
    }

    .logo{
        width: 10%;
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .logo img{
        width:30%;
    }


    .titulo{
        font-size: 1.8em;
    }

    .titulo span{
        color: red;
        text-transform: uppercase;
    }

    .header nav{
        width: 50%;
        display: flex;
        gap: 1.5em;
        align-items: center;
        justify-content: flex-end;
    }

    .header nav a{
        text-decoration: none;
        color: red;
        font-weight: bolder;
        font-size: 1.3em;
    }
    
</style>
