<template>
  <div class="carousel">
    <CarouselItem
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      :currentSlide="currentSlide"
      :index="index"
    />
  </div>
</template>

<script>
/* eslint-disable */

import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import CarouselItem from './CarouselItem.vue';

export default {
  components: {
    CarouselItem,
  },
  props: {
    images: Array,
  },
  setup(props) {
    const SLIDE_DURATION = 4000;
    let slideIntervall = reactive(null);
    const currentSlide = ref(0);
    onMounted(() => {
      slideIntervall = setInterval(() => {
        currentSlide.value += 1;
        if (currentSlide.value === props.images.length) {
          currentSlide.value = 0;
        }
      }, SLIDE_DURATION);
    });

    onBeforeUnmount(() => {
      clearTimeout(slideIntervall);
    });

    return {
      currentSlide,
      slideIntervall,
    };
  },
};
</script>

<style lang="scss">
@import '../scss/vars';

.carousel {
  position: relative;
  overflow: hidden;
  widows: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
}
</style>
