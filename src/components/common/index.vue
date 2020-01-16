<template>
    <div id="Index">
        <template>
            <vSidebar></vSidebar>
            <vHeaders></vHeaders>
            <article class="content-box">
                <router-view></router-view>
            </article>
        </template>
    </div>
</template>

<script>
    import Bus from '@/bus/bus.js';
    import vSidebar from './sidebar.vue';
    import vHeaders from './header.vue';
    export default{
        name: 'Index',
        data() {
            return {
                name: 'Index'
            }
        },
        components: {
            vSidebar,
            vHeaders
        },
    }
</script>

<style scoped>
    #Index {
        width: 100%;
        height: 100%;
    }
</style>
