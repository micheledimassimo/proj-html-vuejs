<script>
export default {
  data() {
    return { 
      
    }
  }
}
</script>

<template>
    
    <section>
        <div class="container">
            <div class="my-row justify-space-between">
                <div>
                    <div class="my-row justify-content-between">
                        <p>
                            &copy; Copyright 2012 - 2020
                        </p>
                        <p>
                            |
                        </p>
                        <p>
                            Avada Theme by Theme Fusion
                        </p> 
                        <p>
                            |
                        </p>
                        <p>
                            All Rights Reserved
                        </p>
                        <p>
                            |
                        </p>
                        <p>
                            Powered By Wordpress
                        </p>
                    </div>
                </div>
                <div>
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
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
    background-color: $mainBgColorDarker;
    .container {
    padding: 20px 0;
    .my-row {
        align-items: center;
        > div {
            p {
                    color: lightgray;
                    opacity: 0.8;
                    font-size: 0.8rem;
                    padding-right: 7px;
                } 
            .social-links {
                display: flex;
                           
                .icon-container {
                    display: block;
                    line-height: 40px;
                    width: 40px;
                    border-radius: 10px;
                    background-color: $mainColor;
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
</style>
