<script>
import { store } from '../store.js';

import AppFirstSection from './main-components/AppFirstSection.vue';
import AppSecondSection from './main-components/AppSecondSection.vue';
import AppThirdSection from './main-components/AppThirdSection.vue';
import AppFourthSection from './main-components/AppFourthSection.vue';
import AppFifthSection from './main-components/AppFifthSection.vue';
import AppSixthSection from './main-components/AppSixthSection.vue';
import AppJumbotronQuote from './main-components/AppJumbotronQuote.vue';
import AppSeventhSection from './main-components/AppSeventhSection.vue';
import AppEigthSection from './main-components/AppEigthSection.vue';




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
    AppFourthSection,
    AppFifthSection,
    AppSixthSection,
    AppJumbotronQuote,
    AppSeventhSection,
    AppEigthSection
  }
}
</script>

<template>
    
    <AppFirstSection />

    <AppSecondSection />

    <AppThirdSection />

    <AppFourthSection />

    <AppFifthSection />

    <AppJumbotronQuote />

    <AppSixthSection />

    <AppSeventhSection />

    <AppEigthSection />
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;


</style>
