<template>
    <div>
        <header-component></header-component>
        <gallery-component></gallery-component>
        <div class="wrapper">
            <separador-component texto='información'></separador-component>
        </div>
        <information-component></information-component>
        <multimedia-component></multimedia-component>
    </div>
</template>

<script>
export default{
    props: {
        idpoint: Number
    },

    methods: {
        async getInterestPoint() {
            axios.get("/puntodeinteres/getPoint", null, { params: {
                id: this.idpoint,
            }})
            .then(function (response) {
                console.log(response.data)
            })
            .catch(err => console.log(err.message));
        },
    },

        created() {
            this.getInterestPoint();
        }
}
</script>

<style scoped>

</style>