<template>
  <div class="card rounded-1 flex" @click="showContent = !showContent">
    <div class="card__img">
      <img src="../assets/event_images/IMG_4767.jpg" class="rounded-1" alt="" />
    </div>
    <div class="card__title">
      Kinder-Ferien-Programm von NABU/NAJU Saarland e.V.: Sommercamp „Fuchsbau“
    </div>
    <div class="card__date">SA. 28.05.2022 14:00-16:00 Uhr</div>
    <div class="card__content">„Ach schüttel mich, ach rüttel mich…“</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showContent = ref(false);
    return {
      showContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  background: red;
}
.fade-enter-to {
  background: limegreen;
}
.card {
  flex-direction: column;
  background: whitesmoke;
  padding: 2rem;
  width: 80%;
  box-shadow: 3px -3px 15px rgba(0, 0, 0, 0.1);
  transition: transform 200ms;
  cursor: pointer;
  & > * {
    margin-bottom: 1.5rem;
    font-size: 19px;
  }
  &__img {
    width: 100%;
    height: 200px;
    margin-inline: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
  }
  &__date {
    font-weight: bolder;
  }

  &:hover {
    transform: translateY(-20px);
  }
}
</style>
