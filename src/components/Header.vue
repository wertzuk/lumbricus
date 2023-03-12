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
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &__logo {
    font-weight: 400;
    font-size: $fs-800;
    color: black;
    margin-right: 5%;
    font-family: 'Alwyn New', sans-serif;
  }
  // border-bottom: $border-nav;
}

@media only screen and(max-width: 800px) {
  .header {
    &__logo {
    }
  }
}
</style>
