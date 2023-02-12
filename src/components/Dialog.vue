<template>
  <header class="flex">
    <h2>{{ title }}</h2>
    <img src="../assets/icons/icon_close.svg" alt="" @click="toggleActive" />
  </header>
  <Form />
</template>

<script setup>
import Form from '@/components/Form.vue';
import { inject } from 'vue';

const store = inject('store');
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';
.dialog {
  padding-block: 1.5rem;
  position: fixed;
  border: none;
  inset: 0;
  background: white;
  // padding: 1rem 4rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;

  h2 {
    text-align: center;
    font-weight: 300;
    font-size: $fs-500;
  }
  img {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
  }
}

header {
  margin-inline: 10%;
}

.dialog::backdrop {
  background: rgba(0, 0, 0, 0.3);
}
</style>
