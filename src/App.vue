<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default {
  data() {
    return { 
      
    }
  },
  
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    
  }
}
</script>

<template>
  <div>
    
    <AppHeader />
    
    <main>

      <AppMain />

    </main>

  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@use 'assets/scss/partials/reset.scss' as *;

</style>
