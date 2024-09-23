<script>
import { store } from '../../store';
export default {
  data() {
    return { 
      store
    }
  }
}
</script>

<template>
    <section>
        <h3>
            High Performance Facilities
        </h3>
        <div>
            <img :src="store.doubleDivider" alt="">
        </div>
        <div class="container">
          <div class="my-row">
            <div v-for="(photo, i) in store.facilitiesPhotos" :key="i" class="my-col-1-3">
              <img :src="photo" alt="facilieties">
            </div>
          </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
    background-color: $mainBgColor;
    padding: 100px 20px;
    h3 {
        color: white;
        text-transform: uppercase;
        font-size: 1.75rem;
        padding: 30px 0;
    }
    .container {
      padding: 20px 0;
      .my-row {
        .my-col-1-3 {
          width: calc(100% / 3);
          padding: 10px;
          

          &:hover {
            img {
              transform: scale(1.5);
              transition: 1s ease-in-out;
              cursor: pointer;
            }
          }
        }
      }
    }
}

</style>
