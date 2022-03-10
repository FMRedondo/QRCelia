<template>
    <section>
        <separador-component texto='Imagenes'></separador-component>

        <div class="slideshow-container" id="imagenes">
            <div class="slide-images fade" v-for="(image,index) in this.images" :key="index">
                <img :src="'/img/puntosInteres/' + image">
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
}
</script>