<template>
  <li @click="closeMenu">
    <router-link :to="route"><slot></slot></router-link>
  </li>
</template>

<script setup>
import { inject } from 'vue';

defineProps(['route']);
const store = inject('store');

function closeMenu() {
  if (store.state.innerWidth <= 800) {
    store.state.menuActive = false;
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/utilities';
@import '../scss/vars';

li {
  position: relative;
  padding: $padding-header;
}

a,
span {
  color: $clr-text-400;
  text-transform: uppercase;
  font-size: $fs-450;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    background: black;
    transition: transform 0.2s;
    transform-origin: left;
    transform: scale(0);
  }
}
</style>
