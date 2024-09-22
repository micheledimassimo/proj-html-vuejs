<script>
import { store } from '../store.js';

import AppFirstSection from './main-components/AppFirstSection.vue';
import AppSecondSection from './main-components/AppSecondSection.vue';
import AppThirdSection from './main-components/AppThirdSection.vue';


export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppFirstSection,
    AppSecondSection,
    AppThirdSection
  }
}
</script>

<template>
    
    <AppFirstSection />

    <AppSecondSection />

    <AppThirdSection />

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;


</style>
