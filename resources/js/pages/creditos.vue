<template>
    <section class="creditos" id="creditos">
       <header-component></header-component>
       <div class="wrapper">
         <separador-component texto='Desarrolladores'></separador-component>
         <persona nombre="FMRedondo" imagen="https://avatars.githubusercontent.com/u/65115094?v=4" textoAlt='FMRedondo' profesion='Desarrollador' texto='FMRedondo es un desarrollador web de QRCelial el cual explota a don francisco javier porque si :)'></persona>
         <persona nombre="Javi" imagen="https://avatars.githubusercontent.com/u/74726752?v=4" textoAlt='Javi' profesion='Desarrollador' texto='Enamorado de la pakisima y explotado por FMRedondo. Felix, si esta aqui el mando jajaj'></persona>
         <separador-component texto='profesores' class="mt"></separador-component>
         <persona nombre="Félix Expósito López" imagen="https://thispersondoesnotexist.com/image" textoAlt='felix' profesion='Profesor' texto='Tutor de el alumnado de 2 de DAW y profesor de interfaces y frontend'></persona>
         <persona nombre="Alfredo Moreno Vozmediano" imagen="https://thispersondoesnotexist.com/image" textoAlt='alfredo' profesion='Profesor' texto='Encagargado del seguimiento del proyecto y profesor de backend'></persona>
         <div class="margenAbajo"></div>
       </div>
    </section>
</template>

<style scoped>

    .creditos{
        background-color: rgba(0, 0, 0, 0.7);
        min-height: 100vh;
    }

    .wrapper{
        width: 80%;
        margin: 0 auto;
    }

    .margenAbajo{
        padding-bottom: 3em;
    }


</style>