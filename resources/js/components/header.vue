<template>
   <header class="header" id="header">
       <div class="wrapper">
           <div class="logo">
           <img src="/img/escudoCelia.png" alt="logo IES Celia Viñas">
           <h1 class="titulo"><span>qr</span>Celia</h1>
       </div>
       <div class="btnMenu">
          <button @click="desplegarMenu" ><i class="fas fa-bars"></i></button>
       </div>
       </div>

        <nav class="nav" id="nav">
            <a href="#" @mouseover="imagenMenu('inicio')">Inicio</a>
            <a href="#" @mouseover="imagenMenu('puntos')">Puntos de interés</a>
            <a href="#" @mouseover="imagenMenu('misterioso')">QR Misterioso</a>
            <a href="#" @mouseover="imagenMenu('creditos')">Créditos</a>
        </nav>

   </header>
</template>

<script>

    export default{
        methods: {
            desplegarMenu: (event) => {
               const menu = document.getElementById('nav');
               menu.classList.toggle('oculto');
               const enlacesMenu = document.getElementsByClassName("enlaces");
               enlacesMenu.addEventListener("click" , () => {alert("ee")})
            },

            imagenMenu: (tipo) => {
              const nav = document.getElementById('nav');
              //nav.style.background = 'green';

                if(tipo == 'inicio')
                    nav.style.backgroundImage  = "url('/img/home/home.jpg')";


                if(tipo == 'puntos')
                    nav.style.backgroundImage  = "url('/img/home/escudo.jpg')";
                

                if(tipo == 'misterioso')
                    nav.style.backgroundImage  = "url('/img/home/misterio.jpeg')";

                if(tipo == 'creditos')
                    nav.style.backgroundImage  = "url('/img/home/puntos.jpeg')";
            }
            
        }
    }

</script>

<style scoped>

    .oculto{
        /*animation: ocultarMenu 200ms infinite;*/
        transition: ease-in-out 20ms;
        display: flex !important;
    }

    .ocultarDatos{
        display: flex !important;
    }

    .header{
        width: 100%;
        height: 100px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
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
        font-size: 2.2em;
    }

    .titulo span{
        color: red;
        text-transform: uppercase;
    }

    .header .btnMenu{
        width: 50%;
        display: flex;
        gap: 1.5em;
        align-items: center;
        justify-content: flex-end;
    }

    .header .btnMenu a{
        text-decoration: none;
        color: red;
        font-weight: bolder;
        font-size: 1.3em;
    }

    button{
        border: none;
        background-color: transparent;
        color: white;
        font-size: 2.2em;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-content: center;
    }


    .nav{
        width: 100%;
        height: 100vh;
        background-color: black;
        position: fixed;
        top: 0;
        right: 0;
        display: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
        font-size: 3.5em;
        padding: 2em;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        display: none;

    }

    .nav a{
        color: white;
        text-decoration: none;
    }

    .nav a:hover + .nav{
        background-color: purple !important;
    }

    
</style>
