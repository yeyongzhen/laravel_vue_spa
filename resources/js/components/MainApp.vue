<template>
    <div id="main">
        <Header/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';

    export default {
        main: 'main-app',
        components: {
            Header
        }
    }
</script>
