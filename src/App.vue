<script>

import AppHeader from './components/AppHeader.vue';
import AppFirstSection from './components/AppFirstSection.vue';
import AppSecondSection from './components/AppSecondSection.vue';


export default {
  data() {
    return { 
      
    }
  },
  
  components: {
    AppHeader,
    AppFirstSection,
    AppSecondSection
  },
  methods: {
    
  }
}
</script>

<template>
  <div>
    
    <AppHeader />
    
    <main>

      <AppFirstSection />

      <AppSecondSection />

    </main>

  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@use 'assets/scss/partials/reset.scss' as *;

</style>
