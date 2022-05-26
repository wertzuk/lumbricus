<template>
  <div class="shapes">
    <div class="shape" v-for="image in images" :key="image">
      <img :src="require(`../assets/${image}`)" :alt="image" />
    </div>
    <div class="arrow arrow-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 1l8.836 8.836L1 18.671"
        />
      </svg>
    </div>
    <div class="arrow arrow-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 1l8.836 8.836L1 18.671"
        />
      </svg>
    </div>
  </div>
</template>

<script>
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

    return {
      images,
    };
  },
};
</script>

<style lang="scss">
@import '../scss/vars';
.shapes {
  position: relative;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  margin: 10rem 0;
  transition: transform 0.2s;
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
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

// .arrow {
//   position: absolute;
//   height: 100px;
//   width: 100px;
//   background-color: rgba(0, 0, 0, 0.3);
//   display: grid;
//   place-items: center;
//   z-index: 100;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.4);
//   }
// }

// .arrow-right {
//   left: calc(100vw - 100px);
//   svg {
//     transform: scale(1.8);
//   }
// }

// .arrow-left {
//   left: 0;
//   svg {
//     transform: rotate(180deg) scale(1.8);
//   }
// }
</style>
