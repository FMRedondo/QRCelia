<template>
  <section class="puntosCercanos" id="puntosCercanos">
    <header-component></header-component>
    <div class="wrapper">
      <separador-component texto="Puntos Cercanos"></separador-component>
      <p v-if="!permission">{{ this.popPermission() }}</p>
      <p v-if="permission">{{ this.getData() }}</p>
      <p style="color:white">
        {{latitude}} -- {{longitude}}
      </p>
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
      latitude: 0,
      longitude: 0,
      updateTimeSeconds: 60, // son los segundos que tarda en actualizarse los datos (si se bajan estos segundos es bajo su responsabilidad, no he probado con muchos registros, si son pocos si se puede)
                              // Esto tendria que venir de los ajustes del CMS, pero me da pereza, hoy es dia 8/8/2022 y es verano, como entederas no lo voy ha hacer
                              // todo bien, espero que lo hagas tu! 🍺❗
    };
  },
  created() {
    if (localStorage.getItem("permission")) this.permission = true;
  },
  methods: {
    popPermission() {
      this.$swal({
        title: "Antes de empezar...",
        text: "Necesitamos que tengas la ubicación activada para poder mostrar los puntos cercanos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, claro!",
        cancelButtonText: "No, cancelar!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal(
            "Perfecto!",
            "Ya tenemos tu permiso para acceder a tu ubicación. Ahora solo tienes que aceptar los permisos del navegador, a continuación, puede que te salga una ventana para aceptarlos",
            "success"
          );
          this.permission == true;
          localStorage.setItem("permission", true);
          this.getLocation();
        }
      });
    },
    getLocation() {
      if (this.permission) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            },
            function (error) {
               this.$swal({
                icon: "error",
                title: "Oops...",
                text: "No se pudo obtener la posición",
                footer: '<a href="https://support.google.com/chrome/answer/142065?hl=es&co=GENIE.Platform%3DAndroid">¿Tienes alguna duda?</a>',
              });
            }
          );
        }
      }else{
        alert("nop")
      }
    },

    getData() {
      this.getLocation();
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