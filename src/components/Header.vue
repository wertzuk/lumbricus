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

.header {
  position: relative;
  &__top {
    padding: 1rem 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
  }
}
</style>
