<template>
  <div class="gallery" id="gallery">
      <photogallery-component id="photo" :src="url"></photogallery-component>
  </div>
</template>

<script>
window.onload = function() {
  var photo = new Vue({
    el: '#photo',
    data: {
      url: "'/img/home/home.jpg'"
    }
  })
};
</script>

<style scoped>

</style>