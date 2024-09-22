<script>
import { store } from '../../store';
export default {
  data() {
    return { 
      store
    }
  },
  methods: {
    submitForm() {
        console.log('userName:', this.store.userName);
        console.log('userMail:', this.store.userMail);
    }
  }
}
</script>

<template>
    <section>
        <div class="triangole">
            &#9660;
        </div>
        <div class="container">
        <div class="my-row">
            <div class="my-col-1-2">
                <img :src="store.formImg" alt="form image">
            </div>
            <div class="my-col-1-2">
                <h4>
                    Sign Up For a Free Training Session!
                </h4>
                <form>
                    <div>
                        <label for="input-name">Name*</label>
                        <input v-model="store.userName" type="text" id="input-name" required>
                    </div>
                    <div>
                        <label for="input-mail">Email</label>
                        <input v-model="store.userMail" type="text" id="input-mail" required>
                    </div>
                    <button @click.prevent="submitForm()" class="my-btn" type="submit">
                        <a href="#">
                            Start Now!
                        </a>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/main.scss' as *;

section {
    position: relative;
    background-color: $mainBgColorDarker;
    .triangole {
        display: block;
        position: absolute;
        top: -9%;
        left: 48%;
        color: $mainBgColor;
        font-size: 5rem;
    }
    .container {
        text-align: left;
        padding: 30px;
        .my-row > .my-col-1-2 {
            margin: 50px 0;
            width: calc(50% - 30px);
            padding: 10px;
            h4 {
                color: white;
                padding-bottom: 20px;
                font-size: 1.25rem
            }
        }
    }
    label {
        color: $colorLightgray;
        font-size: 0.8rem;
    }
    input {
        width: 100%;
        line-height: 1.5rem;
        background-color: $mainBgColorDarker;
        border: 1px solid $colorGray;
        color: white;
        border-radius: 3px;
        margin: 10px 0;
    }
    .my-btn {
        width: 100%;
        background-color: $mainColor;
        padding: 10px;
        margin-top: 20px;
        a {
            text-decoration: none;
            color: white;
            width: 100%;
            text-transform: uppercase;
        }

    }
}
</style>
