<template>
   <header class="header" id="header">
       <div class="wrapper">
           <a class="logo" href="/">
                <img src="/img/escudoCelia.png" alt="logo IES Celia Viñas">
                <h1 class="titulo" id="tituloHeader"><span id="tituloBold">qr</span><span class='tituloNormal'>Celia</span></h1>
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
        },

        created() {
            window.addEventListener('DOMContentLoaded', (event) => {
                if(location.pathname == "/"){
                    let inicio = document.getElementsByClassName("menuInicio")
                    for(let i = 0; i < inicio.length; i++) {
                        inicio[i].className += " activo"; 
                    }
                }else if(location.pathname == "/puntosInteres"){
                    let inicio = document.getElementsByClassName("menuPuntos")
                    for(let i = 0; i < inicio.length; i++) {
                        inicio[i].className += " activo"; 
                    }
                }else if(location.pathname == "/creditos"){
                    let inicio = document.getElementsByClassName("menuCreditos")
                    for(let i = 0; i < inicio.length; i++) {
                        inicio[i].className += " activo"; 
                    }
                }
            });
        }
    }

</script>

<style scoped>

    .oculto{
        /*animation: ocultarMenu 200ms infinite;*/
        transition: ease-in-out 20ms;
        display: none !important;
    }

    .ocultarDatos{
        display: flex !important;
    }

    .header{
        width: 100%;
        height: 100px !important;
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

    .titulo #tituloBold{
        color: #CBAF87;
        text-transform: uppercase;
    }

    .titulo .tituloNormal{
        color: white !important;
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
       

        .activo{
            color: var(--colorPrimario) !important;
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
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
            margin-top: 0.8em;
        }

        .logo img{ 
            width: 3em;
        }

        .header > .wrapper{
            justify-content: space-between;
            text-align: center !important;
        }

    } 
    
</style>
