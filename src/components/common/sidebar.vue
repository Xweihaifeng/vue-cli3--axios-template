<template>
    <article id="Sidebar">
        {{name}}
    </article>
</template>

<script>
    export default{
        name: 'Sidebar',
        data() {
            return {
                name: 'Sidebar'
            }
        }
    }
</script>

<style scoped>
    #Sidebar {
        width: 100%;
        height: 100%
    }
</style>
