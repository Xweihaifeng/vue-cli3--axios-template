<template>
    <article id="Header">
        {{name}}
    </article>
</template>

<script>
    export default{
        name: 'Header',
        data() {
            return {
                name: 'Header'
            }
        }
    }
</script>

<style scoped>
    #Header {
        width: 100%;
        height: 100%
    }
</style>
