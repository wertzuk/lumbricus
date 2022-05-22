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
</style>
