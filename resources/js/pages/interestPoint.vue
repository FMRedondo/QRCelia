<template>
    <div>
        <header-component></header-component>
        <div id="gallery">
            <div class="swiper gallery">
                <div id="swiper-wrapper-photos" class="swiper-wrapper">
                    <div v-for="(image,index) in this.images" :key="index" class="swiper-slide">
                        <img :src="image">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        
        <div class="wrapper">
            <separador-component texto='información'></separador-component>
        </div>
        <information-component :titulo="this.name" :desc="this.desc" :texto="this.text" :poster="this.poster"></information-component>
        <multimedia-component></multimedia-component>
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
        image: String
    },

    data: () => {
        return this.images;
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
                this.images = resources;
        }
    },

    created() {
        this.getInterestPoint();
        this.getResources("image");
    }
}
</script>

<style scoped>

</style>