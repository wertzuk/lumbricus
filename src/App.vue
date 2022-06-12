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
@import './scss/reset';
@import './scss/utiltities';
@import './scss/vars';

body {
  font-family: alwyn-new-rounded-web, sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
  background: $clr-main-bg;
}

.section-heading {
  font-size: 4rem;
  font-weight: 400;
  margin: 1rem 0 2rem;
}

.hidden {
  display: none;
}
</style>
