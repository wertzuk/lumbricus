<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: { Header },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');
// @import url('//db.onlinewebfonts.com/c/d0ae96cdbc43eb013ecbe320aed05d6a?family=Alwyn+New');
// @import url('//db.onlinewebfonts.com/c/d84d21edd74ed51d716b01a48b817b40?family=Alwyn+New');
@import './scss/reset';
@import './scss/utiltities';
@import './scss/vars';

@font-face {
  font-family: 'Alwyn New';
  src: url('./assets/fonts/alwyn.woff2') format('woff2');
}

body {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
  background: $clr-main-bg;
}

// .section-heading {
//   font-size: 4rem;
//   font-weight: 400;
//   margin: 1rem 0 2rem;
// }

.section-heading {
  font-family: 'Alwyn New', sans-serif;
  font-size: $fs-900;
  letter-spacing: 1px;
  color: $clr-text-400;
  font-weight: 400;
}

.hidden {
  display: none;
}
</style>
