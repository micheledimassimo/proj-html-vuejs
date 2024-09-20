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
        <h3>
            WORLD CLASS Fitness
        </h3>
        <div>
            <span>
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </span>
            <span>
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </span>
        </div>
        <p>
            At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped to help you reach your goals of a healty and fit lifestyle.
        </p>
   </div>
   </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/main' as *;

section {
    background-color: $mainBgColor;
}
.container-sm {
    h3 {
        color: white;
        font-size: 2rem;
        padding: 100px 0 30px;
    }
    > div > span {
        color: $mainColor;
        padding: 30px 5px;
    }
    p {
        padding: 20px 50px 100px;
        color: white
    }
}
</style>
