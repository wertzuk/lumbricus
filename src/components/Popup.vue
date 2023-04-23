<template>
  <div
    class="popup"
    :class="{ success: store.state.success.isSuccess }"
    v-if="store.state.success.show"
  >
    <h1>{{ store.state.success.message }}</h1>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store');
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  padding: 2rem;
  right: 0;
  bottom: 100px;
  background: whitesmoke;
}

.popup.sucess {
}
</style>
