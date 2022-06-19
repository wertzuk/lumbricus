<template>
  <header class="header flex align-center">
    <router-link to="/" class="header__logo">Lumbricus</router-link>

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
@import '../scss/vars';

.header {
  position: relative;
  padding-inline: 3rem;

  &__logo {
    font-weight: 400;
    font-size: $fs-800;
    // padding: $padding-header;
    color: black;
    margin-right: 5%;
  }
  border-bottom: $border-nav;
}
</style>
