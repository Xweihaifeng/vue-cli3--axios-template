<template>
    <article id="Login">
        {{name}}
    </article>
</template>

<script>
    import Reauest from '@/api/main.js'
    export default{
        name: 'Login',
        data() {
            return {
                name: 'Login'
            }
        }
    }
</script>

<style scoped>
    #Login {
        width: 100%;
        height: 100%
    }
</style>
