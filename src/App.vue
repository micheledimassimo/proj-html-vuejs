<script>

import AppHeader from './components/AppHeader.vue';
import AppFirstSection from './components/AppFirstSection.vue';


export default {
  data() {
    return { 
      
    }
  },
  
  components: {
    AppHeader,
    AppFirstSection
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

    </main>
    
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@use 'assets/scss/partials/reset.scss' as *;

</style>
