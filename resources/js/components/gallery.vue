<template>
  <div class="gallery" id="gallery">
      <photogallery-component id="photo"></photogallery-component>
  </div>
</template>

<script>
    var photo = new Vue(
      {
        el: '#photo',
        data:{
          src: "/img/celiaRambla.jpg",
          alt: "El celia lo peta"
        }
      }        
    )
</script>

<style scoped>

</style>