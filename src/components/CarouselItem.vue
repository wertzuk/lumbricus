<template>
  <transition name="slide">
    <div class="carousel-item" v-show="currentSlide === index">
      <img :src="require(`../assets/${image}`)" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ['image', 'currentSlide', 'index'],
};
</script>

<style lang="scss">
.carousel-item {
  position: absolute;
  inset: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
