<template>
    <section>
        <div>
            <router-link to="/AboutPage">clicca qui</router-link>
        </div>
        <HomePage />
        <router-view></router-view>
    </section>
</template>

<script>
    import HomePage from '../pages/HomePage.vue'
    export default{
        components: {
            HomePage,
        }
    };
</script>

<style>

</style>
