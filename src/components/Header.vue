<template>
  <header class="header">
    <div class="header__top">
      <h1>Lumbricus</h1>
    </div>
    <Navigation />
  </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import '../scss/utiltities';
</style>
