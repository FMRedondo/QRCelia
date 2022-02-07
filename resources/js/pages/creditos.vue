<template>
    <section class="creditos" id="creditos">
       <header-component></header-component>
       <div class="wrapper">
         <separador-component texto='Desarrolladores'></separador-component>
        <div class="personas">
             <persona nombre="FMRedondo" imagen="https://avatars.githubusercontent.com/u/65115094?v=4" textoAlt='FMRedondi' profesion='Desarrollador' texto='Desarrollador web que esta explotando a javi para que programe todo QRCelia'></persona>
             <persona nombre="Javi" imagen="https://avatars.githubusercontent.com/u/74726752?v=4" textoAlt='Javi' profesion='Desarrollador' texto='Enamorado de la pakisima y explotado por FMRedondo. Felix, si esta aqui el mando jajaj'></persona>
             <persona nombre="Pablo" imagen="https://avatars.githubusercontent.com/u/43436415?v=4" textoAlt='Pablo' profesion='Desarrollador' texto='Desarrollador de QRCelia'></persona>
        </div>
         <separador-component texto='profesores' class="mt"></separador-component>
         <div class="personas">
             <persona nombre="Félix Expósito López" imagen="/img/creditos/felix.png" textoAlt='felix' profesion='Profesor' texto='Tutor de el alumnado de 2 de DAW y profesor de interfaces y frontend'></persona>
            <persona nombre="Alfredo Moreno Vozmediano" imagen="https://avatars.githubusercontent.com/u/25744642?v=4" textoAlt='alfredo' profesion='Profesor' texto='Encagargado del seguimiento del proyecto y profesor de backend'></persona>
         </div>
         <separador-component texto='Colaboradores especiales' class="mt"></separador-component>
             <div class="personas">
                 <persona nombre="Jodamaru" imagen="https://thispersondoesnotexist.com/image" textoAlt='Jodamaru' profesion='Editor de videos' texto='texto a elegir por jodamaru'></persona>
                 <persona nombre="Abdelah" imagen="https://thispersondoesnotexist.com/image" textoAlt='Abdelah' profesion='Locutor' texto='texto a elegir por Abdelah'></persona>
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