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
        Performance news
      </h3>
      <div>
        <img :src="store.doubleDivider" alt="">
      </div>
      <div class="container">
        <div class="my-row">
          <div v-for="(article, i) in store.articlesInfo" :key="i" class="my-col-1-3">
            <div class="img-container">
              <img :src="article.photo" :alt="article.title">
              <div class="card-hover">
                <span>
                  <i class="fa-solid fa-link"></i>
                </span>
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
            <div>
              <h5>
              {{ article.title }}
              </h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis nihil sunt dolore atque natus quidem modi neque quos cum. [...]
              </p>
            </div>
          </div>
        </div>
        <button class="my-btn">
          <a href="#">
            read all articles
          </a>
        </button>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
  background-color: $mainBgColor;
  h3 {
    padding: 50px 0;
    color: white;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
  .container {
    padding: 50px 0;
    .my-row {
      padding: 30px 0;
      
      .my-col-1-3 {
        width: calc(100% / 3);
        padding: 20px;
        .img-container {
          position: relative;
          > img {
          height: 220px;
          width: 300px;
          display: block;
          object-fit: cover;
          }
          .card-hover {
            background-color: $mainColor;
            height: 220px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            position: absolute;
            top: 0;
            
            &:hover {
              opacity: 0.75;
            }
            > span {
              color: white;
              font-size: 2rem;
              padding-right: 20px;
            }
          }
        }
        
        div:last-child {
          background-color: $mainBgColorDarker;
          padding: 10px;
          h5 {
          color: white;
          opacity: 0.9;
          font-size: 1.5rem;
          padding: 10px 0
          }
          p {
            color: lightgray;
            opacity: 0.8;
            line-height: 1.75rem;
            padding: 10px 0;
          }
        } 
        
      }
    }
    
  }
}
</style>
