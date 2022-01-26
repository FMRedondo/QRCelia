<template>
    <div>
        <header-component></header-component>
        <div class="wrapper">
            <div id="gallery">
                <div class="swiper gallery">
                    <div id="swiper-wrapper-photos" class="swiper-wrapper">
                        <div v-for="(image,index) in this.images" :key="index" class="swiper-slide">
                            <img :src="image">
                        </div>
                    </div>
                    <div class="swiper-button-next-images"></div>
                    <div class="swiper-button-prev-images"></div>
                    <div class="swiper-pagination-images"></div>
                </div>
            </div>
        </div>
        
        <audio-component :audio="this.audio"></audio-component>

        <div class="wrapper content-wrapper">
        <separador-component texto='información'></separador-component>

        <information-component :titulo="this.name" :desc="this.desc" :texto="this.text" :poster="this.poster"></information-component>
        

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
        }
    },

    created() {
        this.getInterestPoint();
        this.getResources("image");
        this.getResources("video");
        this.getResources("audio");

    }
}
</script>

<style scoped>
/* ESTILOS DE CARRUSELES VIDEO */
.videosPanel {
    background-color: #2D2D2D;
    padding: 3em 0;
}

.videosPanel .swiper-videos {
    width: 50%;
}
 
.videosPanel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 50% !important;
    box-shadow: 0px 0px 0px transparent;
}
 
.videosPanel .swiper-slide video {
    display: block;
    width: 100%;
}
 
.videosPanel .swiper-slide-active {
    opacity: 100;
}
 
.videosPanel .swiper-slide-visible{
    box-shadow: none !important;
}
 
.videosPanel .swiper-pagination-bullet{
    display: none;
}

.videosPanel .swiper-wrapper{
    margin-top: 2em;
}

</style>