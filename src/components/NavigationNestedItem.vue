<template>
  <li @click="closeMenu()">
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
@import '../scss/utiltities';
@import '../scss/vars';

li:first-child {
  margin-top: 4rem;
}
li {
  border-bottom: $border-nav;
  background: $main-clr-bg;
  transition: all 300ms;

  &:last-child {
    border: none;
  }
  &:hover {
    background: #ccf7bd;
  }
}
a {
  color: $clr-text-400;

  padding: 1rem;
  display: block;
  font-size: $fs-small;
  text-transform: none;
}
</style>
