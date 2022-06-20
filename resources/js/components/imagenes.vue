<template>
    <section>
        <separador-component id="imagenes" texto='Imagenes'></separador-component>

        <div class="slideshow-container">
            <div class="slide-images fade" v-for="(image,index) in this.images" :key="index">
                <img class="imagenSlider" :src="'/img/puntosInteres/' + image">
            </div>
            <a class="prev" v-if="this.images.length > 1" onclick="plusIMG(-1)">&#10094;</a>
            <a class="next" v-if="this.images.length > 1" onclick="plusIMG(1)">&#10095;</a>
        </div>
    </section>
</template>

<script>
export default{
    props: {
        images: Array
    },

    methods: {

    },

    created() {
        setTimeout(function(){
            const imgSlider = document.getElementsByClassName("imagenSlider");
            
            for (let i = 0; i < imgSlider.length; i++) {
                let img = new Image();
                img.src = imgSlider[i].getAttribute("src")

                // DE NORMAL ES UNA FOTO NORMAL PANORAMIX, COMO EL DRUIDA

                if (img.width < img.height) {
                    imgSlider[i].classList.add("imgVertical")

                }else if(img.width == img.height){
                    imgSlider[i].classList.add("imgCuadrada")

                }
            }
        }, 1000);

    }
}
</script>

<style scoped>
.slide-images.fade{
    height: 100%;
}

.imgVertical{
    width: 50% !important;
}

.imgCuadrada{
    height: 100%;
    width: auto;
}

@media (max-width: 1050px) {
    .imgCuadrada{
        height: 50vh;
        width: auto;
    }
}
</style>