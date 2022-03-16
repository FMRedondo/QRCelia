<template>
   <header class="header" id="header">
       <div class="wrapper">
           <a class="logo" href="/">
                <img src="/img/escudoCelia.png" alt="logo IES Celia Viñas">
                <h1 class="titulo" id="tituloHeader"><span id="tituloBold">qr</span>Celia</h1>
            </a>
           
            <div class="btnMenu">
                <button @click="desplegarMenu" ><i class="fas fa-bars"></i></button>
            </div>
            
       </div>

        <div class="wrapper navContainer oculto" id="menuOrdenador">
            <nav class="nav" id="nav">
                <i class="far fa-times-circle closeNav" @click="cerrarMenu"></i>
                <a href="/" @mouseover="imagenMenu('inicio')"  @mouseleave="quitarImagen">Inicio</a>
                <a href="/puntosInteres" @mouseover="imagenMenu('puntos')" @mouseleave="quitarImagen">Puntos de interés</a>
                <a href="/qrmisterioso" @mouseover="imagenMenu('misterioso')" @mouseleave="quitarImagen">QR Misterioso</a>
                <a href="/creditos" @mouseover="imagenMenu('creditos')" @mouseleave="quitarImagen">Créditos</a>
            </nav>
        </div>
        <nav class='navMovil' id='navMovil'>
           <div class="wrapper">
                <div class="icono">
                <i class="fa-solid fa-house "></i>
                <a href="/" class="activo">Inicio</a>
            </div>
           <div class="icono">
               <i class="fa-solid fa-signs-post"></i>
                <a >Puntos de interés</a>
           </div>
           <div class="icono">
                <i class="fa-solid fa-question"></i>
                 <a href="/qrmisterioso" @mouseover="imagenMenu('misterioso')" @mouseleave="quitarImagen">QR Misterioso</a> 
           </div>
            <div class="icono">
                <i class="fa-solid fa-users"></i>
                <a href="/creditos">Créditos</a>
            </div>
           </div>
        </nav>
   </header>
</template>

<script>

    export default{

        methods: {
            desplegarMenu: (event) => {

                const navContainer = document.getElementById("menuOrdenador");
                navContainer.classList.toggle('oculto');
            },
            cerrarMenu: (event) =>{
                const navContainer = document.getElementById("menuOrdenador");
                navContainer.classList.toggle('oculto');
            },

            quitarImagen: (event) => {
                const nav = document.getElementById('nav');
                nav.style.backgroundImage  = "";
            },

            scrollNav: (event) => {
                const header = document.getElementById('header');
                if (window.scrollY == 0) {
                    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                } else if(window.scrollY > 1){
                    header.style.backgroundColor = "rgba(0, 0, 0, 1)";
                } 
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
        z-index: 9999;
        background-color: transparent;
        position: relative;
        z-index: 9;
    }

    .header .wrapper{
        display: flex;
        justify-content: space-between;
        padding-top: 1em;
        width: 80%;
        margin: 0 auto;
    }

    .logo{
        width: 10%;
        display: flex;
        align-items: center;
        gap: 1em;
        position: relative;
        z-index: 99999;
    }

    .wrapper{
        width: 80%;
    }

    .logo img{
        width:30%;
    }


    .titulo{
        font-size: 2.2em;
        color: white;
    }

    .titulo span{
        color: #CBAF87;
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

    .header .navContainer{
        position: relative;
        z-index: 999999 !important;
        top: 0 !important;
        left: 0 !important;
        width: 100%;
        min-height: calc(100vh - 100px);
    }

    .nav{
        width: 50%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7); 
        backdrop-filter: blur(3px);
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        font-size: 2em;
        padding: 2em;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        z-index: 999999999 !important;
        text-align: right;

    }

    .nav a{
        color: white !important;
        text-decoration: none;
        text-align: right;
        transition: ease-in-out 100ms;
    }

    .nav a:hover{
        color: #C6A878 !important;
    }

    .nav a:hover + .nav{
        background-color: purple !important;
    }


    .closeNav{
        position: fixed;
        top: 1em;
        right: 6em;
    }

    .navMovil{
        display: none;
    }

    .logo:focus{
        border: none !important;
    }

    @media (max-width: 1285px){
        #nav{
            width: 100%;
        }

        .closeNav{
            align-items: flex-end;
        }
    }

    @media (max-width: 650px){
        .navMovil{
            display: block;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #30475E;
        }

        .navMovil .wrapper{
            padding: 0.5em;
            display: flex;
            gap: 1em;
            justify-content: space-between;
        }

        .navMovil a{
            color: white;
            font-weight: bolder;
            text-decoration: none;
            transform: translateY(-0.5em);
        }

        .activo{
            color: var(--colorPrimario) !important;
           
        }

        button{
            display: none;
        }

        .icono{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 0.5em;
        }

        .icono i{
            font-size: 1.2em;
            margin-bottom: 0.2em;
            color: #CBAF87;
        }

        .icono a{
            font-size: 0.8em;
        }

        .logo img{ 
            width: 3em;
        }

        .header > .wrapper{
            justify-content: center;
            text-align: center !important;
        }

    } 
    
</style>
