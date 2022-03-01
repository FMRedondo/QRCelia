<template>
  <div id="information">
    <div class="pointContent">
      <div class="contentHeader">
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
        texto: String,
        poster: String
    },
    
    created(){
    }
}
</script>

<style scoped>

</style>