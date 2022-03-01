<template>
    <div class="contentTitle">
        <h1>{{this.titulo}}</h1>
        <p id="desc">{{this.desc}}</p>
    </div>
</template>

<script>
export default{
    props: {
        titulo: String,
        desc: String
    }
}
</script>