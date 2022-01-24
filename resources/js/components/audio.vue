<template>

    <div id="audioButton" onclick="playAudio()" playing="true">
        <i id="audioIcon" class="fa-solid fa-headphones-simple"></i>
    </div>

</template>

<style>
    #audioButton{
        z-index: 999;
        padding: 1.5em;
        position: fixed;
        left: 1%; 
        bottom: 50%;
        background-color: var(--colorPrimario);
        border-radius: 50%;
        cursor: pointer;
        animation: music 3s infinite;
    }
    
    #audioIcon{
        color: var(--colorSecundario);
        font-size: 2em;
    }

@keyframes music {
    25%{
        transform: translateY(1em);
    }

    50%{
        transform: translateY(0);
    }

    75%{
        transform: translateY(1em);
    }

    100%{
        transform: translateY(0);
    }
}
</style>

<script>
export default{
    props: {
        url: String
    },

    methods:{
        playAudio() {
            var button = document.getElementById("audioButton");
            var icon = document.getElementById("audioIcon")
            icon.style.backgroundColor = "white"
        }
    },

    created(){
    }
}
</script>