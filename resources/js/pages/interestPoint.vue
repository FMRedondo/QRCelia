<template>
    <div>
        <img src="/img/celiaRambla.jpg" class="imagenFondo">
        <header-component></header-component>
        <div class="wrapper">

        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        </div>
                    
            <audio-component  :audio="this.audio" v-if="this.audio.length != ``"></audio-component>

            <separador-component texto='información'></separador-component>

            <information-component :titulo="this.name" :desc="this.desc" :texto="this.text" :poster="this.poster"></information-component>
            
            <!--
            <div id="multimedia" v-if="this.videos.length > 0">
                <div class="videosPanel">
                    <separador-component texto='multimedia' color='white'></separador-component>
                    <div class="swiper swiper-videos videos">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(video,index) in this.videos" :key="index">
                                <video controls>
                                    <source :src="video" type="video/mp4">
                                    <span class="error">Tu navegador no es compatible con este recurso</span>
                                </video>
                            </div>
                        </div>
                        <div class="swiper-pagination-videos"></div>
                    </div>
                </div>
            </div>
            -->

        </div>
    </div>
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
                    resources.push(response[i].url);
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
        this.getInterestPoint();
        this.getResources("image");
        this.getResources("video");
        this.getResources("audio");
    }
}
</script>

<style>

<<<<<<< HEAD
=======
.mySlides {
  display: none;
}

.mySlides:first-child {
  display: block;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.active {
  background-color: #717171;
}

.mySlides img{
    height: 80vh;
    width: 100%;
    margin: 0 auto;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 0.3s;
  animation-name: fade;
  animation-duration: 0.3s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
>>>>>>> 199b3d8d3b56a923e3d9d1c6be9310ca5b55b188
</style>