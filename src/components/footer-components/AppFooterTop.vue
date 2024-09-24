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
        <div class="my-row justify-content-between">
          <div class="my-col-1-4">
            <p>
              Come find us
            </p>
            <div>
              <p>
                12345 North Main Street New York,
                <br>
                NY 555555
              </p>
            </div>
            <div>
              <p>
                Phone: <a href="#">1.800.555.6789</a>
                <br>
                Email: <a href="#">info@your-domain.com</a>
              </p>
            </div>
          </div>
          <div class="my-col-1-4">
            <p>
              Recent posts
            </p>
            <div>
              <p>
                <a href="#">&#129170; Train with free weights or your body weight?</a>
              </p>
            </div>
            <div>
              <p>
                <a href="#">&#129170; Nutritional advice that will keep you training</a>
              </p>
            </div>
          </div>
          <div class="my-col-1-4">
            <p>
              Opening times
            </p>
            <div>
              <p>
                Weekday Monday - Friday 
                <br>
                09:00 - 19:00
              </p>
            </div>
            <div>
              <p>
                Weekends Saturady - Sunday 
                <br>
                09:00 - 21:00
              </p>
            </div>
          </div>
          <div class="my-col-1-4">
            <img src="/images/gym_ad-compressor.jpg" alt="monthly offer">
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
  padding: 20px 0;
  .container {
    color: $colorGray;
    text-align: left;
    padding: 30px 0;
    .my-row {
      align-items: flex-start;
      .my-col-1-4 {
        width: 25%;
        padding: 0 20px;
        > p {
          text-transform: uppercase;
          padding: 20px 0;
        }
        > div {
          > p {
            line-height: 1.5rem;
            font-size: 0.75rem;
            > a {
              text-decoration: none;
              color: $colorLightgray;
            }
          }
        }
      }
    }
  }
}
</style>
