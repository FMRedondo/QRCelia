<template>
    <section class="interestPoints">
        <header-component></header-component>
        <div class="wrapper">
                            {{data}}
                            {{felix}}

            <separador-component texto='Puntos de interés'></separador-component>
            <div id="carga">
                <carga-punto></carga-punto>
                <carga-punto></carga-punto>
                <carga-punto></carga-punto>
                <carga-punto></carga-punto>
                <carga-punto></carga-punto>
                <carga-punto></carga-punto>
            </div>
            <div class="datos ultimoElemento" >
                <punto-interes v-for="(point, index) in this.datos" :key="index" :titulo="point.name" :imagen="point.poster" :texto="point.text" :descripcion="point.description" :enlace="point.enlace"></punto-interes>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from "vue";
export default {
    name: 'interestPoints',

    data(){
        return{
            data: [],felix:null
        }
    },

    created () {
        document.addEventListener('DOMContentLoaded', () => {
             this.obtenerDatos()
        })
    },

    methods: {
        async obtenerDatos(){
           await fetch('/api/pointHasType/get?main=1', {
                 method: 'GET',
                  headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                   },
                   
            }).then(response => response.json()).then(response => {
                    var datos = []
                     response.forEach(row => {
                         var aux = true
                         for(let i = 0; i < datos.length; i++){
                             if(datos[i][0] == row.typeId){
                                aux = false
                             }
                         }
                         if(aux){
                             datos.push([row.typeId, [
                                 {
                                    name: row.pointName,
                                    poster: row.poster,
                                    text: row.text,
                                    description: row.description,
                                    enlace: row.enlace
                             }
                             ]])
                         }else{
                             // busca la poscion del tipo y añades el objeto
                         }

                    });

                     
                    this.data = datos
                            
                const carga = document.getElementById("carga")
                carga.remove()
                console.log(this.data)
            
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
        min-height: 100%;
    }

    .interestPoints::before{
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


    .datos, #carga{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        padding-bottom: 3em;

    }

    #carga{
        width: 100%;
    }

    .datos .puntoInteres, #carga .cargas{
        width: 30%;
    }
    @media (max-width: 1500px){
        .datos .puntoInteres, #carga .cargas{
            width: 45%;
        }
    }
     @media (max-width: 800px){
        .datos .puntoInteres, #carga .cargas{
            width: 80%;
        }
    }

    @media (max-width: 500px){
        .datos .puntoInteres, #carga .cargas{
            width: 100%;
        }
    }

</style>