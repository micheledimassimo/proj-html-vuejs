<script>
import { store } from '../store.js';
import AppFooterTop from './footer-components/AppFooterTop.vue';
import AppFooterBottom from './footer-components/AppFooterBottom.vue';


export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppFooterTop,
    AppFooterBottom
  }
}
</script>

<template>
    <AppFooterTop />
    <AppFooterBottom />
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;


</style>
