<template>
  <div class="shapes-wrapper">
    <div class="shapes" ref="shapes">
      <div class="shape" v-for="image in images" :key="image">
        <img
          class="shape__img"
          :src="require(`../assets/${image}`)"
          :alt="image"
        />
      </div>
    </div>
  </div>
  <div class="arrows flex justify-between">
    <div class="arrow arrow-left" @click="showPrevImages">
      <img src="../assets/icons/icon_down.png" alt="" />
    </div>
    <div class="arrow arrow-right" @click="showNextImages">
      <img src="../assets/icons/icon_down.png" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = [
      'slide-1.jpg',
      'slide-2.jpg',
      'slide-3.jpg',
      'slide-4.jpg',
      'slide-5.jpg',
      'slide-6.jpg',
      'slide-6.jpg',
      'slide-6.jpg',
      'slide-6.jpg',
    ];

    const counter = ref(0);

    const shapes = ref(null);

    function showNextImages() {
      counter.value -= 100;
      shapes.value.style.transform = `translateX(${counter.value}vw)`;
    }

    function showPrevImages() {
      counter.value += 100;
      shapes.value.style.transform = `translateX(${counter.value}vw)`;
    }

    return {
      images,
      shapes,
      showNextImages,
      showPrevImages,
      counter,
    };
  },
};
</script>

<style lang="scss">
@import '../scss/vars';
.shapes-wrapper {
}
.shapes {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  transition: transform 600ms ease-in-out;
  gap: 2rem;
}
.shape {
  width: 350px;
  aspect-ratio: 11/16;
  border: 4px solid $main-clr-bg;
  overflow: hidden;
  border-radius: $shape-border-radius;
  transition: transform 0.2s;
  cursor: pointer;
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(1),
  &:nth-child(4) {
    border-radius: $shape-border-radius $shape-border-radius 0 0;
  }

  &:nth-child(2),
  &:nth-child(6) {
    border-radius: calc($shape-border-radius - 10%);
  }
}

.arrows {
  width: 100%;
}

.arrow {
  height: 100px;
  width: 100px;
  padding: 1rem;
  cursor: pointer;
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.arrow-right {
  transform: rotate(-90deg);
}

.arrow-left {
  transform: rotate(90deg);
}
</style>
