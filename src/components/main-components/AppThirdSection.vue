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
        <div class="my-row">
          <div class="my-col-1-4">
            <div>
                <span class="fa-stack fa-2x">
                  <i class="fa-regular fa-circle fa-stack-2x"></i>
                  <i class="fa-solid fa-link-slash fa-stack-1x"></i>
                </span>
            </div>
            <h5>
              Strength & Conditioning
            </h5>
            <div>
              <img :src="store.singleDivider" alt="xx">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat modi totam qui voluptatem ipsam ut?
            </p>
          </div>
          <div class="my-col-1-4">
            <div>
                <span class="fa-stack fa-2x">
                  <i class="fa-regular fa-circle fa-stack-2x"></i>
                  <i class="fa-solid fa-bicycle fa-stack-1x"></i>
                </span>
            </div>
            <h5>
              Fitness & Cardio
            </h5>
            <div>
              <img :src="store.singleDivider" alt="xx">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat modi totam qui voluptatem ipsam ut?
            </p>
          </div>
          <div class="my-col-1-4">
            <div>
                <span class="fa-stack fa-2x">
                  <i class="fa-regular fa-circle fa-stack-2x"></i>
                  <i class="fa-brands fa-skyatlas fa-stack-1x"></i>
                </span>
            </div>
            <h5>
              Flexibility & Rest
            </h5>
            <div>
              <img :src="store.singleDivider" alt="xx">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat modi totam qui voluptatem ipsam ut?
            </p>
          </div>
          <div class="my-col-1-4">
            <div>
                <span class="fa-stack fa-2x">
                  <i class="fa-regular fa-circle fa-stack-2x"></i>
                  <i class="fa-solid fa-heart-pulse fa-stack-1x"></i>
                </span>
            </div>
            <h5>
              Health & Diet
            </h5>
            <div>
              <img :src="store.singleDivider" alt="xx">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat modi totam qui voluptatem ipsam ut?
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
  background-image: url('../../../images/gym_bkgd_bw-compressor.jpg');
  .container {
    padding: 20px;
    .my-row {
      padding: 50px 0;
      .my-col-1-4 {
        width: calc(25% - 40px);
        margin: 20px 10px;
        >div >.fa-stack > * {
          color: $mainColor;
        }
        h5 {
          color: white;
          margin: 20px 0;
          font-size: 1.1rem;
        }
        p {
          margin: 20px 10px;
          color: $colorGray;
        }
        &:hover {
          transition: .3s ease-in-out;
          transform: scale(1.3);
          cursor: pointer;
          h5 {
            color: $mainColor;
          }
        }
      }
    }
  }
}


</style>
