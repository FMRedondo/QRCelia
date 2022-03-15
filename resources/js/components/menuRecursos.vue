<template>
    <nav class="menuLateral oculto" id="menuLateral">
        <a href="#information" class="enlaceMenuLateral"><i class="fa-solid fa-file-lines"></i></a>
        <!--
        <a href="#video" class="enlaceMenuLateral"><i class="fa-solid fa-video menuActivo"></i></a>
        <a href="#imagenes" class="enlaceMenuLateral"><i class="fa-solid fa-images"></i></a>
        <a class="enlaceMenuLateral"><i class="fa-solid fa-volume-low" id='audioIcon'></i></a>

        -->
        
    </nav>
</template>

<style>

    .menuLateral{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 0;
        border-radius: 22px;
        padding: 1em 0.5em;
        gap: 1.5em;
        transform: translateY(-50%);
        color: white;
        margin-left: 0.5em;
        backdrop-filter: blur(20px);
        background-color: #14162560;
        transition: ease-in-out 200ms;
        min-height: 5em;
        z-index: 999;
    }

    .oculto{
        display: none !important;
        transform: translateX(-200%) !important;
        transition: ease-in-out 200ms;
    }

    .menuLateral a{
        color: white;
    }

    .menuLateral a{
        color: white;
        transition: ease-in-out 200ms;
        font-size: 1.7em;
    }

    .menuLateral a:hover{
        transform: scale(1.1);
        color: #F05454;
    }

    .menuActivo{
        color: #F05454;
    }

</style>