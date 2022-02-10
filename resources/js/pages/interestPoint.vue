<template>
    <section id="contentSection">
        
        <header-component></header-component>
        <div class="wrapper">

            <div class="slideshow-container" v-if="this.images.length > 0">
                <div class="slide-images fade" v-for="(image,index) in this.images" :key="index">
                    <img :src="'img/puntosdeInteres/' + image">
                </div>
                <a class="prev" v-if="this.images.length > 1" onclick="plusIMG(-1)">&#10094;</a>
                <a class="next" v-if="this.images.length > 1" onclick="plusIMG(1)">&#10095;</a>
            </div>
                                    
            <audio-component  :audio="this.audio" v-if="this.audio.length != ``"></audio-component>

            <separador-component texto='información'></separador-component>

            <information-component :titulo="this.name" :desc="this.desc" :texto="this.text" :poster="'img/puntosdeInteres/' + this.poster"></information-component>
                    
            <separador-component v-if="this.videos.length > 0" texto='Videos'></separador-component>

            <div class="slideVideo-container" v-if="this.videos.length > 0">
                <div class="slide-videos fade" v-for="(videos,index) in this.videos" :key="index">
                    <video :src="videos" controls></video>
                </div>
                <a class="videoPrev" v-if="this.videos.length > 1" onclick="plusVideos(-1)">&#10094;</a>
                <a class="videoNext" v-if="this.videos.length > 1" onclick="plusVideos(1)">&#10095;</a>
            </div>

            <comentarios :about='this.idpoint'></comentarios>
        </div>
    </section>
</template>

<script>
export default{
    props: {
        idpoint: Number,
        createdAt: String,
        updatedAt: String,
        name: String,
        desc: String,
        text: String,
        url: String,
        poster: String,
        images: Array,
        videos: Array,
        audio: String
    },
        
    methods: {
        async getInterestPoint() {
            const response = await fetch("/api/puntodeinteres/getPoint",{
                method: "post",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": this.idpoint
                })
            })
            .then(response => response.json())
                this.idpoint = response[0].id,
                this.createdAt = response[0].createdAt,
                this.updatedAt =response[0].updatedAt,
                this.name = response[0].name,
                this.desc = response[0].description,
                this.text = response[0].text,
                this.url = response[0].url,
                this.poster = response[0].poster
                                const loadScreen = document.getElementById("loadSection")
                loadScreen.remove()
        },

        async getResources(type){
            const response = await fetch("/api/puntodeinteres/getResources",{
                method: "post",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": this.idpoint,
                    "type": type
                })
            })
            .then(response => response.json())
                const resources = []; 
                for (let i = 0; i < response.length; i++) {
                    resources.push((response[i].url));
                } 
                if (type == "image")
                    this.images = resources; 
                if (type == "video")
                    this.videos = resources;
                if (type == "audio")
                    this.audio = resources;
        },
    },

    created() {
        window.addEventListener('DOMContentLoaded', (event) => {
            this.getInterestPoint();
        });
            this.getResources("image");
            this.getResources("video");
            this.getResources("audio");
    },
}
</script>

<style>
#contentSection{
    min-height: 100%;
}
/* SLIDER DE IMAGENES */
.slideshow-container, .slideVideo-container {
    height: 70vh;
    width: 75%;
    position: relative;
    margin: 3em auto;
}

.slide-images, .slide-videos {
  display: none;
}

.slide-images:first-child, .slide-videos:first-child {
  display: block;
}

.prev, .next, .videoPrev, .videoNext {
    cursor: pointer;
    position: absolute;
    top: 45%;
    width: auto;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    transition: 0.3s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next, .videoNext {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover, .videoPrev:hover, .videoNext:hover {
  background-color: rgba(0,0,0,0.8);
}

.active {
  background-color: #717171;
}

.slide-images img{
    height: 70vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.slide-videos video{
    height: 70vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 0.3s;
  animation-name: fade;
  animation-duration: 0.3s;
}

/* SLIDER DE VIDEOS */




/* ANIMACIONES */
@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@media (max-width: 1050px) {
    .slideshow-container, .slideVideo-container {
        height: 50vh;
        width: 100%;
    }

    .slide-images img, .slide-videos video{
        height: 50vh;
        width: 100%;
    }
}

@media (max-width: 750px) {
    .slideshow-container, .slideVideo-container {
        height: 35vh;
        width: 100%;
    }

    .slide-images img, .slide-videos video{
        height: 35vh;
        width: 100%;
    }

    .prev, .next {
        font-size: 1.5em;
    }
}

@media (max-width: 500px) {
    .slideshow-container, .slideVideo-container{
        height: 25vh;
        width: 100%;
    }

    .slide-images img, .slide-videos video{
        height: 25vh;
        width: 100%;
    }

    .prev, .next, .videoPrev, .videoNext {
        font-size: 1.5em;
    }
}

</style>