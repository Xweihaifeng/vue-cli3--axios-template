<template>
    <article id="Page">
        {{name}}
    </article>
</template>

<script>
    export default{
        name: 'Page',
        data() {
            return {
                name: 'Page'
            }
        }
    }
</script>

<style scoped>
    #Page {
        width: 100%;
        height: 100%
    }
</style>
