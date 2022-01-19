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
        async getAllData() {
            axios.post(`/puntodeinteres/getPoint`, null, { params: {
                idpoint: this.idpoint,
                _token: document.getElementsByName("_token").nodeValue
            }})
            .then(response => response.status)
            .catch(err => console.warn(err));
        },
    },

        created() {
            this.getAllData();
        }
}
</script>

<style scoped>

</style>