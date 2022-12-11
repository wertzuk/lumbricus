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
  setup() {
    const images = [
      'slide-1.jpg',
      'slide-2.jpg',
      'slide-3.jpg',
      'slide-4.jpg',
      'slide-5.jpg',
      'slide-6.jpg',
    ];

    const SLIDE_DURATION = 4000;

    let slideIntervall = reactive(null);
    const currentSlide = ref(0);
    onMounted(() => {
      slideIntervall = setInterval(() => {
        console.log(currentSlide.value);
        currentSlide.value += 1;
        if (currentSlide.value === images.length) {
          currentSlide.value = 0;
        }
      }, SLIDE_DURATION);
    });

    onBeforeUnmount(() => {
      clearTimeout(slideIntervall);
    });

    return {
      images,
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
