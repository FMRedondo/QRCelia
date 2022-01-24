<template>

    <div id="audioButton" v-on:click="playAudio()">
        <audio :src="this.audio" id="audioPlayer"></audio>
        <i id="audioIcon" class="fa-solid fa-play"></i>
    </div>

</template>

<style>
    #audioButton{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        width: 4em;
        height: 4em;
        position: fixed;
        left: 1%; 
        bottom: 50%;
        background-color: var(--colorPrimario);
        border-radius: 50%;
        cursor: pointer;
        animation: music 3s infinite;
    }
    
    #audioIcon{
        color: white;
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
        audio: String
    },

    methods:{
        playAudio() {
            var button = document.getElementById("audioButton");
            var icon = document.getElementById("audioIcon");
            alert(document.getElementById("audioPlayer").src)
            var audio = new Audio(document.getElementById("audioPlayer").src);
            if (audio.duration > 0) {
                audio.play();
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
            }else{
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-play");
            }
        }
    }
}
</script>