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
            <i class="far fa-times-circle closeNav" @click="cerrarMenu"></i>
            <a href="/" @mouseover="imagenMenu('inicio')"  @mouseleave="quitarImagen">Inicio</a>
            <a href="/puntosDeInteres" @mouseover="imagenMenu('puntos')" @mouseleave="quitarImagen">Puntos de interés</a>
            <a href="/QRMisterioso" @mouseover="imagenMenu('misterioso')" @mouseleave="quitarImagen">QR Misterioso</a>
            <a href="/creditos" @mouseover="imagenMenu('creditos')" @mouseleave="quitarImagen">Créditos</a>
        </nav>
        <nav class='navMovil' id='navMovil'>
           <div class="wrapper">
                <div class="icono">
                <i class="fa-solid fa-house activo"></i>
                <a href="/" @mouseover="imagenMenu('inicio')"  @mouseleave="quitarImagen" class="activo">Inicio</a>
            </div>
           <div class="icono">
               <i class="fa-solid fa-signs-post"></i>
                <a href="/puntosDeInteres" @mouseover="imagenMenu('puntos')" @mouseleave="quitarImagen">Puntos de interés</a>
           </div>
           <div class="icono">
                <i class="fa-solid fa-question"></i>
                <a href="/QRMisterioso" @mouseover="imagenMenu('misterioso')" @mouseleave="quitarImagen">QR Misterioso</a>
           </div>
            <div class="icono">
                <i class="fa-solid fa-users"></i>
                <a href="/creditos" @mouseover="imagenMenu('creditos')" @mouseleave="quitarImagen">Créditos</a>
            </div>
           </div>
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

                    nav.style.transition = " 6t1s";
            },
            cerrarMenu: (event) =>{
                const menu = document.getElementById('nav');
                menu.classList.toggle('oculto');
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
    }

    .header .wrapper{
        display: flex;
        justify-content: space-between;
        padding-top: 1em;
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


    .closeNav{
        position: fixed;
        top: 0.5em;
        right: 1.5em;
    }

    .navMovil{
        display: none;
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
            color: #CBAF87 !important;
           
        }

        .nav{
            display: none;
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
