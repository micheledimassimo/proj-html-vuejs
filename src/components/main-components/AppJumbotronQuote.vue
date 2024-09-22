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
        <div class="container-sm">
            <p>
                " I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times "
            </p>
            <h5>
                Bruce Lee &#x2022; Quote of the day
            </h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
    background-image: url('../../../images/home-testimonial-bg.jpg');
    background-position: center;
    background-size: cover;
    text-align: center;
    .container-sm {
        padding: 200px 100px;
        p {
            color: white;
            font-size: 1.8rem;
            padding-bottom: 20px;

        }
        h5 {
            text-transform: uppercase;
            color: white;
        }
    }
}
</style>
