<template>
  <div id="information">
    <div class="pointContent">
      <div class="contentHeader">
        <div class="contentTitle">
          <h1>{{this.titulo}}</h1>
          <p id="desc">{{this.desc}}</p>
          <p id="type">"Tanques chulos"</p>
        </div>
        <div class="contentThumbnail">
          <img :src="this.poster" alt="Miniatura del punto">
        </div>
      </div>
      <div class="contentText">
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
      document.getElementsByClassName("contentText").innerHTML = this.texto
    }
}
</script>

<style scoped>

</style>