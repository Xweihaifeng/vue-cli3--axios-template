<template>
    <article id="Footer">
        {{name}}
    </article>
</template>

<script>
    export default{
        name: 'Footer',
        data() {
            return {
                name: 'Footer'
            }
        }
    }
</script>

<style scoped>
    #Footer {
        width: 100%;
        height: 100%
    }
</style>
