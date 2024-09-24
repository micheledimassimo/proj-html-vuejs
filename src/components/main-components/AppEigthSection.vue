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
        <div class="my-row">
          <div class="my-col">
            <h2>
              Achieve Yuor Fitness Goals
            </h2>
            <p>
              Flexible membership packages to suit all levels of athlete and achieve your fitness goals
            </p>
          </div>
          <div>
            <button class="my-btn">
              <a href="#">
                Join us
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
  background-image: url('../../../images/home-parallax.jpg');
  background-position: 100% 30%;
  .container {
    .my-row {
      padding: 40px 20px;
      align-items: center;
      .my-col {
        flex-grow: 1;
        text-align: left;
        h2 {
          color: white;
          padding: 10px 0;
          font-size: 2.5rem
        }
        p {
          color: white;
          font-size: 1.1rem;
        }
      }
      .my-btn {
        border: 1px solid white;
        a {
          color: white;
        }
      }
    }
  }
}

</style>
