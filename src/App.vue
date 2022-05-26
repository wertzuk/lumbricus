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
@import './scss/reset';
@import './scss/utiltities';
@import './scss/vars';

body {
  font-family: sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
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
