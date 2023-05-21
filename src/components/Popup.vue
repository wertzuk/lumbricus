<template>
  <div
    class="popup"
    :class="{
      success: store.state.success.isSuccess,
      active: store.state.success.active,
    }"
  >
    <p>{{ store.state.success.message }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store');
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.popup {
  position: fixed;
  padding: 0.7em 1.5em;
  right: 0;
  bottom: 100px;
  background: rgb(224, 73, 73);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: $fs-400;
  color: rgb(238, 233, 233);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.2s;
}

.popup.success {
  background: rgb(219, 234, 198);
  color: #645c5c;
}

.active {
  transform: translateX(0%);
}
</style>
