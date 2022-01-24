<template>
    <section class="interestPoints">
        <header-component></header-component>
        <separador-component texto='Puntos de interés' class="primerElemento"></separador-component>
        <div class="wrapper">
            <div class="datos" > 
                <punto-interes v-for="(point, index) in this.datos" :key="index" :titulo=point.name :imagen=point.poster :texto=point.text :descripcion=point.description :enlace=point.enlace ></punto-interes>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'interestPoints',
    created () {
      this.obtenerDatos()
    },

    props: {
        datos: Array,
    },


    methods: {
        async obtenerDatos(){
           await fetch('/api/puntosInteres/getPoints', {
                 method: 'POST',
                  headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                   },
                   
            }).then(response => response.json()).then(response => {
               // // var id, name, img, desc, text, enlace = [];
                //var id= []; var name = []; var img = []; var desc = []; var text = [];
                var datos = [];
                for(let i = 0; i < response.length; i++){
                    var punto = {
                       'id'          : response[i].id,
                       'name'        : response[i].name,
                       'poster'      : response[i].poster,
                       'text'        : response[i].text,
                       'description' : response[i].description,
                       'enlace'      : "/puntodeinteres/" + response[i].id
                    }

                    datos.push(punto)
                }

                this.datos = datos    
                return this.datos;
            })    
        },
    }
}
</script>


<style scoped>

    .interestPoints{
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        padding: 0 !important;
        position: relative;
    }

    .interestPoints::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-image: url(/img/celiaRambla.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        z-index: -1;
    }


    .datos{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: space-between;
        align-items: center;

    }

    .datos .puntoInteres{
        width: 30%;
    }

</style>