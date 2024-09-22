<script>
import { store } from '../store.js';

import AppFirstSection from './main-components/AppFirstSection.vue';
import AppSecondSection from './main-components/AppSecondSection.vue';
import AppThirdSection from './main-components/AppThirdSection.vue';
import AppFourthSection from './main-components/AppFourthSection.vue';



export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppFirstSection,
    AppSecondSection,
    AppThirdSection,
    AppFourthSection
  }
}
</script>

<template>
    
    <AppFirstSection />

    <AppSecondSection />

    <AppThirdSection />

    <AppFourthSection />

    
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;


</style>
