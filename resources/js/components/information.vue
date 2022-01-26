<template>
  <div id="information">
    <div class="pointContent">
      <div class="contentHeader">
        <div class="contentTitle">
          <h1>{{this.titulo}}</h1>
          <p id="desc">{{this.desc}}</p>
        </div>
        <div class="contentThumbnail">
          <img :src="this.poster" alt="Miniatura">
        </div>
      </div>
      <div class="contentText" v-html="this.texto">
      </div> 
    </div>
  </div>
</template>

<script>
export default{
    props: {
        titulo: String,
        desc: String,
        texto: String,
        poster: String
    },
    
    created(){
    }
}
</script>

<style scoped>

</style>