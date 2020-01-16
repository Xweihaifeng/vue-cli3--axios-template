<template>
    <article id="Home">
        {{name}}
    </article>
</template>

<script>
    export default{
        name: 'Home',
        data() {
            return {
                name: 'Home'
            }
        }
    }
</script>

<style scoped>
    #Home {
        width: 100%;
        height: 100%
    }
</style>
