<template>
    <section>
        <separador-component texto='Videos'></separador-component>

        <div class="slideVideo-container" id="video">

            <div id="videoPoster">
                <div id="fillVideo">
                </div>
                <i id="playVideoBTN" class="fa-solid fa-circle-play" @click="loadVideo(event)"></i>
                <div id="faviconBG"></div>
                <img :src="this.poster" id="posterVideoIMG">
                
                <a class="prev" id="prevButton" @click="changeVideo(-1)">&#10094;</a>
                <a class="next" id="nextButton" @click="changeVideo(1)">&#10095;</a>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    props: {
        videos: Array,
        poster: String
    },

    methods:{
        loadVideo: function (event){
            document.getElementById("playVideoBTN").remove();
            document.getElementById("posterVideoIMG").remove();
            document.getElementById("faviconBG").remove();

            let video = `<video id="pointVideo" src="/video/${this.videos[0]}" controls></video>`;

            document.getElementById("fillVideo").style.backgroundColor = "black";
            document.getElementById("fillVideo").innerHTML += video;

            let videoContent = document.getElementById("pointVideo");
            videoContent.play();

            
            if (this.videos.length > 1) {
                //--> No se muestra el de ir para atras! Que estamos en el primer video
                //document.getElementById("prevButton").style.display = "block"
                document.getElementById("nextButton").style.display = "block"
            }
        },

        changeVideo: function(change){
            let currentURL = document.getElementById("pointVideo").getAttribute("src");
            
            //Para quitar el /video/ del src y compararlo con el array de videos
            currentURL = currentURL.replace("/video/","")

            let index = this.videos.indexOf(currentURL);

            let newURL = "";
            
            if (change == 1){
                newURL = this.videos[index+1]
                if (index+1 == this.videos.length-1){
                    document.getElementById("prevButton").style.display = "block"
                    document.getElementById("nextButton").style.display = "none"
                }else{
                    document.getElementById("prevButton").style.display = "block"
                    document.getElementById("nextButton").style.display = "block"
                }

            }else if(change == -1){
                newURL = this.videos[index-1]
                if (index-1 <= 0){
                    document.getElementById("prevButton").style.display = "none"
                    document.getElementById("nextButton").style.display = "block"
                }else{
                    document.getElementById("prevButton").style.display = "block"
                    document.getElementById("nextButton").style.display = "block"                    
                }
            }

            document.getElementById("pointVideo").setAttribute("src","/video/" + newURL)
        },

    },

    created(){

    }
}
</script>
<style>
    #faviconBG{
        width: 5em;
        height: 5em;
        position: absolute;
        z-index: 1;
        background-color: white;
    }

    #video{
        padding-bottom: 10em;
    }

    #videoPoster, #videoPoster img, #fillVideo, #fillVideo video{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    #videoPoster{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #playVideoBTN{
        position: absolute;
        font-size: 8em;
        color: #F05454;
        z-index: 2;
    }

    #playVideoBTN:hover{
        cursor: pointer;
    }

    .prev{
        left: 0;
    }

    #prevButton, #nextButton{
        display: none;
        z-index: 10;
    }

</style>