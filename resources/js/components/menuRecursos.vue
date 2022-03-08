<template>
    <nav class="menuLateral" id="menuLateral">
        <a href="#video" class="enlaceMenuLateral"><i class="fa-solid fa-video menuActivo"></i></a>
        <a href="#imagenes" class="enlaceMenuLateral"><i class="fa-solid fa-images"></i></a>
        <a href="#information" class="enlaceMenuLateral"><i class="fa-solid fa-file-lines"></i></a>
        <a href="#audioButton" class="enlaceMenuLateral"><i class="fa-solid fa-volume-high"></i></a>
    </nav>
</template>

<style scoped>

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
    }

    .menuLateral a{
        color: white;
    }

    .menuLateral a{
        color: white;
        transition: ease-in-out 200ms;
        font-size: 1.5em;
    }

    .menuLateral a:hover{
        transform: scale(1.1);
        color: #F05454;
    }

    .menuActivo{
        color: #F05454;
    }

</style>

<script>

export default{
        methods: {
            created() {
                const menuRecursos = document.getElementById('menuLateral')
                menuRecursos.addEventListener('click', elemento => {
                    if(elemento.target.nodeName == "I"){
                    document.querySelector('.menuActivo').classList.remove('menuActivo')
                    elemento.target.classList.add('menuActivo')
                }
            })
        },
    },
}
</script>
