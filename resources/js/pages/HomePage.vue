<template>
  <section>
    <HeaderComponent />
    <MainComponent />
    <router-view></router-view>
  </section>
</template>

<script>
import MainComponent from "../components/MainComponent.vue";
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
  components: {
    MainComponent,
    HeaderComponent
  },
};
</script>

<style>
</style>
