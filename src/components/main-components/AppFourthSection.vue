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
        <div class="container">
            <h2>
            Real World results
            </h2>
            <div>
                <img :src="store.doubleDivider" alt="">
            </div>
            <div class="my-row">
                <div v-for="(card, i) in store.cardInfo" :key="i" class="my-col-1-2">
                    <div class="card">
                        <div class="card-img">
                            <img :src="card.image" alt="">
                        </div>
                        <div class="card-info">
                            <p>
                                {{ card.quote }}
                            </p>
                            <p>
                                -{{ card.memberName }}
                            </p>
                        </div>
                    </div>
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
  padding-bottom: 100px;
  h2 {
    color: white;
    text-transform: uppercase;
    padding: 50px 0;
    font-size: 2rem;
  }
  .my-row {
    padding: 10px 0;
    .my-col-1-2 {
      width: calc(50% - 30px);
      margin: 20px 15px;
      
      .card {
        display: flex;
        padding: 30px;
        background-color: $mainBgColorDarker;
        
        .card-img {
            width: 300px;
            padding: 5px;
        }
        .card-info {
            flex-grow: 1;
            padding: 5px;
            color: $colorGray;
            text-align: left;
            p {
                padding: 10px;
            }
            >p:first-child {
                font-style: italic;
            }
        }
      } 
    }
  }
}

</style>
