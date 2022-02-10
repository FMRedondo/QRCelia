<template>
    <section class="creditos" id="creditos">
       <header-component></header-component>
       <div class="wrapper">
         <separador-component texto='Desarrolladores'></separador-component>
        <div class="personas">
             <persona nombre="FMRedondo" imagen="https://avatars.githubusercontent.com/u/65115094?v=4" textoAlt='FMRedondi' profesion='Desarrollador' texto='Desarrollador de QRCelia, autodidacta y apasionado por el desarrollo. Enamorado de su bestia 206 🚕'></persona>
             <persona nombre="Javi" imagen="https://avatars.githubusercontent.com/u/74726752?v=4" textoAlt='Javi' profesion='Desarrollador' texto='Desarrollador de QRCelia, resolutivo y autodidacta. Busca cualquier excusa para irse de fiesta 🕺'></persona>
             <persona nombre="Pablo" imagen="https://avatars.githubusercontent.com/u/43436415?v=4" textoAlt='Pablo' profesion='Desarrollador' texto='Desarrollador de QRCelia'></persona>
        </div>
         <separador-component texto='profesores' class="mt"></separador-component>
         <div class="personas">
             <persona nombre="Félix Expósito López" imagen="/img/creditos/felix.png" textoAlt='felix' profesion='Profesor' texto='Tutor de el alumnado de 2 de DAW y profesor de interfaces y frontend. Nos enseña fundamentos y odia la DUAL 😡 '></persona>
            <persona nombre="Alfredo Moreno Vozmediano" imagen="https://avatars.githubusercontent.com/u/25744642?v=4" textoAlt='alfredo' profesion='Profesor' texto='Encargado del seguimiento del proyecto, profesor de backend y galardonado escritor. Tiembla cada vez que lo llamamos 🤦‍♂️'></persona>
         </div>
         <separador-component texto='Colaboradores especiales' class="mt"></separador-component>
             <div class="personas">
                 <persona nombre="Jose David Martinez (Jodamaru)" imagen="https://avatars.githubusercontent.com/u/16970714?v=4" textoAlt='Jodamaru' profesion='Editor de vídeos' texto='Editor de vídeos, piloto de dron y desarrollador CeliaCity. No lo saqueis de fiesta le duelen las rodillas 🎶'></persona>
                 <persona nombre="Abdellah" imagen="https://avatars.githubusercontent.com/u/48606104?v=4" textoAlt='Abdellah' profesion='Locutor' texto='Locutor de QRCelia y desarrollador de CeliaCity. Siempre esta contento 😊 '></persona>
                 <persona nombre="Francisco Javier Juárez (paco)" imagen="https://avatars.githubusercontent.com/u/72700788?v=4" textoAlt='paco' profesion='' texto='Desarrollador de CeliaCity. Administrador, guapo y siempre se queda dormido 😴 '></persona>
                 <persona nombre="Cristian Rosca" imagen="https://avatars.githubusercontent.com/u/70913113?v=4" textoAlt='Cristian Rosca' profesion='' texto='Desarrollador de CeliaCity y administrador de las fiestas en casa de Josamaru. Lo vamos a enderezar 🧛‍♀️'></persona>
             </div>
         <div class="ultimoElemento"></div>
       </div>
    </section>
</template>

<style scoped>

     .creditos{
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        padding: 0 !important;
        position: relative;
    }

    .creditos::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-image: url(/img/celiaRambla.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        background-attachment: fixed;
    }

    .wrapper{
        width: 80%;
        margin: 0 auto;
    }

    .margenAbajo{
        padding-bottom: 3em;
    }

    .personas{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }

    .personas .persona{
        width: 30%;
    }


    @media (max-width: 1600px){
        .personas{
            justify-content: center;
        }

        .personas .persona{
            width: 45%;
        }
    }

    @media (max-width: 950px){
        .personas .persona{
            width: 80%;
        }
    }

        @media (max-width: 650px){
        .personas .persona{
            width: 100%;
        }
    }

</style>