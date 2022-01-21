<template>
    <section class="interestPoints">
        <header-component></header-component>
        <separador-component texto='Puntos de interés' class="primerElemento"></separador-component>
        <div class="datos">
            <punto-interes titulo='chema lo peta' imagen='/img/celia.jpg' texto='este es el tecto' descripcion='claro claro esta es la desc' enlace='puntoInteres/$id'></punto-interes>
        </div>
    </section>
</template>

<script>
export default {
    name: 'interestPoints',
    created () {
      this.obtenerDatos()
    },
    methods: {
        async obtenerDatos(){
           await fetch('/api/puntosInteres/getPoints', {
                 method: 'POST',
                  headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                   },
                   
            }).then(response => {
               const datos = response.json()
               console.log(datos)
            })
           
       },

    }
}
</script>