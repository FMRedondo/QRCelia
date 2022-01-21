<template>
    <div>
        <header-component></header-component>
        <gallery-component></gallery-component>
        <div class="wrapper">
            <separador-component texto='información'></separador-component>
        </div>
        <information-component :titulo="this.name" :desc="this.desc" :texto="this.text" :poster="this.poster"></information-component>
        <multimedia-component></multimedia-component>
    </div>
</template>

<script>
export default{
    props: {
        idpoint: Number,
        createdAt: String,
        updatedAt: String,
        name: String,
        desc: String,
        text: String,
        url: String,
        poster: String

    },

    methods: {
        async getInterestPoint() {
            const response = await fetch("/api/puntodeinteres/getPoint",{
                method: "post",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": this.idpoint
                })
            })
            .then(response => response.json())
            console.log(response[0]);
                this.idpoint = response[0].id,
                this.createdAt = response[0].createdAt,
                this.updatedAt =response[0].updatedAt,
                this.name = response[0].name,
                this.desc = response[0].description,
                this.text = response[0].text,
                this.url = response[0].url,
                this.poster = response[0].poster
        },
    },

        created() {
            this.getInterestPoint();
        }
}
</script>

<style scoped>

</style>