<template>
    <section id="contentSection">
        
        <header-component></header-component>
        <div class="wrapper" id="components">
            <menuRecursos style="order: -2"></menuRecursos>
            <title-component style="order: -1" :titulo="this.name" :desc="this.desc"></title-component> 
            
            
            <imagenes-component v-if="this.images.length != ``" id="imgComp" :images="this.images"></imagenes-component>

            <information-component id="infComp" :texto="this.text" :poster="'/img/puntosInteres/' + this.poster"></information-component>

            <audio-component id="audioComp" v-if="this.audio.length != ``" :audio="'/audio/' + this.audio"></audio-component>

            <video-component :poster="'/img/puntosInteres/' + this.poster" id="videoComp" v-if="this.videos.length > 0" :videos="this.videos"></video-component>
        </div>
        <div v-if="comments">
                <comentarios :about='this.idpoint'></comentarios>
        </div>

    </section>
</template>

<script>
export default{
    data() {
        return {
            comments: true
        };
    },

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
        audio: String,
        orden: Array
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
            .then(response =>{
                this.idpoint = response[0].id,
                this.createdAt = response[0].createdAt,
                this.updatedAt =response[0].updatedAt,
                this.name = response[0].name,
                this.desc = response[0].description,
                this.text = response[0].text,
                this.url = response[0].url,
                this.poster = response[0].poster
                const orden = JSON.parse(response[0].orden)
                setTimeout(function(){
                    const loadScreen = document.getElementById("loadSection")
                    document.getElementById("app").style.display = "block";
                    loadScreen.remove()
                }, 1000);

                return orden;
            })
            .then((orden)=> {
                this.ordenarComponentes(orden);
            })
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
                if (type == "image"){
                    this.images = resources;
                }


                if (type == "video"){
                    this.videos = resources;
                }

                    
                if (type == "audio"){
                    this.audio = resources;     
                }
                    
        },

        ordenarComponentes(orden){
                for (let i = 0; i < orden.length; i++) {
                    let posicion = i.toString()
                    if (orden[i] == "texto" && document.getElementById("infComp")){
                        document.getElementById("infComp").style.order = posicion;
                    }else if(orden[i] == "image" && document.getElementById("imgComp")){
                        document.getElementById("imgComp").style.order = posicion;
                    }else if(orden[i] == "video" && document.getElementById("videoComp")){
                        document.getElementById("videoComp").style.order = posicion;
                    }else if(orden[i] == "audio" && document.getElementById("audioComp")){
                        document.getElementById("audioComp").style.order = posicion;
                    }
                }
        },

        pintarMenu(){
            const menu = document.getElementById('menuLateral')
            if(this.audio.length > 0){
               menu.insertAdjacentHTML('beforeend',`<a class="enlaceMenuLateral" id='activarAudio'><i class="fa-solid fa-volume-low" id='audioIcon'></i></a>`)
               document.getElementById('activarAudio').addEventListener('click', this.activarAudio)
            }

            if(this.videos.length > 0){
               menu.insertAdjacentHTML('beforeend',`<a href="#video" class="enlaceMenuLateral"><i class="fa-solid fa-video"></i></a>`)
            }
            
            if(this.images.length > 0){
               menu.insertAdjacentHTML('beforeend',` <a href="#imagenes" class="enlaceMenuLateral"><i class="fa-solid fa-images"></i></a>`)
            }

            menu.classList.remove('oculto')
        },

        activarAudio(){
            const button = document.getElementById("audioButton");
            const icon = document.getElementById("audioIcon");
            const audio = document.getElementById("audioPlayer");
            if (audio.paused) {
                //button.style.animationPlayState = "paused";
                audio.play();
                icon.classList.remove("fa-volume-low");
                icon.classList.add("fa-volume-high");
            }else{
                //button.style.animationPlayState = 'running';
                audio.pause();
                icon.classList.remove("fa-volume-high");
                icon.classList.add("fa-volume-low");
            }

            audio.addEventListener("ended", function(){
                audio.currentTime = 0;
                icon.classList.remove("fa-volume-high");
                icon.classList.add("fa-volume-low")
            });
        },
         activateComments(){
            fetch('/api/activeComments').then(data => data.json()).then(response => {
                if(response[0].value == 0)
                    this.comments = false;
                else
                    this.comments = true;
            })
        },
    },

    created() {
        window.addEventListener('DOMContentLoaded', (event) => {
            this.getInterestPoint();
        });
            this.getResources("image");
            this.getResources("video");
            this.getResources("audio");
            this.activateComments();

            setTimeout(this.pintarMenu, '2000')
    },
}
</script>

<style>
#components{
    display: flex;
    flex-direction: column;
}

#contentSection{
    min-height: 100vh;
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
    background-color: rgba(0, 0, 0,0.8);
}

.next, .videoNext {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover, .videoPrev:hover, .videoNext:hover {
  background-color: rgba(240, 84, 84,0.8);
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