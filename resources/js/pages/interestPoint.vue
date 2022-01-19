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
            try {
                const res = await fetch(`/puntodeinteres/getPoint`);

                if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                alert(message);
                }

                const data = await res.json();
                alert("SI")

            } catch (err) {
                this.getResult = err.message;
            }
        },



    }
}
</script>

<style scoped>

</style>