<template>
  <header class="header flex align-center">
    <router-link to="/" class="header__logo">Lumbricus</router-link>
    <button
      class="nav-toggle"
      @click="store.state.menuActive = !store.state.menuActive"
    >
      <img
        src="../assets/icons/icon-hamburger.svg"
        alt="hamburger"
        v-if="!store.state.menuActive"
      />
      <img
        src="../assets/icons/icon-close.svg"
        alt="close"
        v-if="store.state.menuActive"
      />
    </button>

    <Navigation />
  </header>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import { inject } from 'vue';

const store = inject('store');
</script>

<style lang="scss">
@import '../scss/utilities';
@import '../scss/vars';

.header {
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  z-index: 100;
  background: $main-clr-bg;
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

.nav-toggle {
  display: none;
}

@media only screen and(max-width: 800px) {
  .header {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;

    &__logo {
      font-size: $fs-600;
    }
  }

  .nav-toggle {
    display: block;
  }
}
</style>
