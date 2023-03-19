<template>
  <div class="dialog" ref="dialog" v-if="store.state.modal.active">
    <header class="flex">
      <div>
        <p>Anmeldung zur Veranstaltung</p>
        <h2>{{ store.state.modal.title }}</h2>
      </div>
      <img src="../assets/icons/icon_close.svg" alt="" @click="closeModal" />
    </header>
    <Form />
  </div>
  <div
    class="backdrop"
    v-if="store.state.modal.active"
    @click="closeModal"
  ></div>
</template>

<script setup>
import Form from '@/components/Form.vue';
import { computed, inject, onMounted, ref } from 'vue';

const store = inject('store');
function closeModal() {
  store.state.modal.active = false;
  document.body.style.overflowY = 'auto';
}
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';
.dialog {
  padding-block: 1.5rem;
  position: fixed;
  border: none;
  background: white;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  z-index: 10;

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
  text-align: center;
  p {
    font-weight: 300;
  }
}

.backdrop {
  content: '';
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: 0;
}

@media only screen and(max-width: $break-point) {
  .dialog {
    width: 90vw;
    h2 {
      font-size: $fs-450;
    }
    img {
      top: 1rem;
      right: 0.7rem;
      transform: scale(0.7);
    }
  }
}
</style>
