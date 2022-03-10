<template>
    <section>
        <separador-component texto='Videos'></separador-component>

        <div class="slideVideo-container" id="video">
            <div class="slide-videos fade" v-for="(videos,index) in this.videos" :key="index">
                <video :src="'/videos/' + videos" controls></video>
            </div>
            <a class="videoPrev" v-if="this.videos.length > 1" onclick="plusVideos(-1)">&#10094;</a>
            <a class="videoNext" v-if="this.videos.length > 1" onclick="plusVideos(1)">&#10095;</a>
        </div>
    </section>
</template>
<script>
export default{
    props: {
        videos: Array
    },
}
</script>