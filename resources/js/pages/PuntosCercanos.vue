<template>
  <section class="puntosCercanos" id="puntosCercanos">
    <header-component></header-component>
    <div class="wrapper">
      <separador-component texto="Puntos Cercanos"></separador-component>
      <p v-if="permission">{{ this.getData() }}</p>
     
      <p style="color: white">{{ latitude }} -- {{ longitude }}</p>
    </div>
  </section>
</template>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  data() {
    return {
      permission: false,
      data: [],
      latitude: null,
      longitude: null,
      updateTimeSeconds: 60, // son los segundos que tarda en actualizarse los datos (si se bajan estos segundos es bajo su responsabilidad, no he probado con muchos registros, si son pocos si se puede)
      // Esto tendria que venir de los ajustes del CMS, pero me da pereza, hoy es dia 8/8/2022 y es verano, como entederas no lo voy ha hacer
      // todo bien, espero que lo hagas tu! 🍺❗
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation(){
  
        if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position => {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
          }, error => {
            this.$swal({
                icon: "error",
                title: "Oops...",
                text: "No se pudo obtener la posición. Tienes que acepar los permisos de localización",
                footer:
                  '<a href="https://support.google.com/chrome/answer/142065?hl=es&co=GENIE.Platform%3DAndroid" target="_blanck">¿Tienes alguna duda?</a>',
              });
          })
        }
    },
    
  },
};
</script>


<style scoped>
.puntosCercanos {
  background-color: rgba(0, 0, 0, 0.7);
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  min-height: 100vh;
}

.puntosCercanos::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-image: url(/img/celiaRambla.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  background-attachment: fixed;
}

.wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>