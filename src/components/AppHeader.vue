<script>
import { store } from '../store.js';
export default {
  data() {
    return { 
      store
    }
  },
  methods: {
    clickedBtn() {
        alert('Sign up with the form below')
    }
  }
}
</script>

<template>
    <header>
        <div class="my-row justify-space-between">
            <img :src="store.logoImg" alt="Avada Gym">
            <nav>
                <ul class="my-row">
                    <li v-for="(link, i) in store.navLinks" :key="i">
                        <a
                        :class="{
                            'active': link.active
                        }" 
                        :href="link.url">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <div class="my-container">
                <h2>
                    no pain no gain
                </h2>
                <p>
                    Motivation is what gets you started. Habit is what keeps you going
                </p>
                <button @click="clickedBtn()" class="my-btn">
                    <a href="#">
                        Join us today
                    </a>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;

header {
  background-image: url('/images/home-banner.jpg');
  background-position: 50% 9%;
  padding: 20px 70px;
  text-align: center;
  >.my-row {
    align-items: center;
    > nav {
        > ul {
            list-style: none;
            li > a {
                text-decoration: none;
                text-transform: uppercase;
                color: white;
                opacity: 0.8;
                padding: 10px;

                &:hover,
                &.active {
                    color: $mainColor;
                } 
            
            }
        }
    }
  }
  div >.my-container {
    margin: 100px 0 180px;
    h2 {
        font-size: 7rem;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        padding: 100px 0 0;
    }
    p {
        color: $colorLightgray;
        font-size: 1.5rem;
        padding: 10px 0 20px;
    }
    
  }
}



</style>
