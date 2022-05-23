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
</style>
