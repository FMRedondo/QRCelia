<template>
    <div id="multimedia">
        <div class="videosPanel">
            <div class="wrapper">
                <separador-component texto='multimedia' color='white'></separador-component>
            </div>
            <div class="swiper swiper-videos videos">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <video controls>
                            <source src="/resources/video/videoprueba.mp4" type="video/mp4">
                            <span class="error">Tu navegador no es compatible con este recurso</span>
                        </video>
                    </div>
                    <div class="swiper-slide">
                        <video controls>
                            <source src="/resources/video/videoprueba.mp4" type="video/mp4">
                            <span class="error">Tu navegador no es compatible con este recurso</span>
                        </video>
                    </div>
                    <div class="swiper-slide">
                        <video controls>
                            <source src="/resources/video/videoprueba.mp4" type="video/mp4">
                            <span class="error">Tu navegador no es compatible con este recurso</span>
                        </video>                      
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <div class="audioPanel">
            <div class="audio-card">
                <img src="/img/audio.png" alt="">
                <button id="1" class="buttonPlay">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>

</script>

<style scoped>

</style>