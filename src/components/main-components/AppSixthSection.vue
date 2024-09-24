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
            Meet our trainers
        </h3>
        <div>
            <img :src="store.doubleDivider" alt="">
        </div>
        <div class="container">
            <div class="my-row">
                <div v-for="(trainer, i) in store.trainerInfo" :key="i" class="my-col-1-3">
                    <div class="card-container">
                        <img :src="trainer.image" :alt="trainer.trainerName">
                        <div class="info-trainer">
                            <h5>
                                {{ trainer.trainerName }}
                            </h5>
                            <h5>
                                {{ trainer.job }}
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam deserunt dolore provident!
                            </p>
                            <div class="social-links">
                                <div class="icon-container">
                                    <a href="#">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="icon-container">
                                    <a href="#">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="icon-container">
                                    <a href="#">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <button class="my-btn">
                <a href="#">
                    view all trainers
                </a>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
    background-color: $mainBgColorDarker;
    h3 {
        padding: 150px 0 30px;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
    .container {
        padding: 50px 0;
        .my-row {
            padding-bottom: 50px;
            .my-col-1-3 {
                width: calc(100% / 3);
                padding: 15px;
                .card-container {
                    
                    > img {
                            display: block;
                            &:hover {
                                transform: scale(1.1);
                                transition: .5s ease-in;
                                cursor: pointer;
                                
                            }
                        }
                    .info-trainer {
                        background-color: $mainBgColor;
                        padding: 40px 30px;
                        text-align: left;
                        
                        h5 {
                            color: white;
                            padding-bottom: 5px;
                            opacity: 0.9;
                        }
                        p {
                            line-height: 1.5rem;
                            padding: 20px 0;
                            color: lightgray;
                            opacity: 0.7;
                            font-size: 0.8rem
                        }
                        
                        .social-links {
                            display: flex;
                            
                            .icon-container {
                                display: block;
                                line-height: 40px;
                                width: 40px;
                                border-radius: 10px;
                                background-color: $mainBgColorDarker;
                                text-align: center;
                                margin-right: 10px;
                                > a {
                                    text-decoration: none;
                                    > i {
                                    color: white;
                                }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>
