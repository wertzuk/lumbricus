<template>
  <div class="event" @click="toggleActive">
    <div class="event__header">
      <div class="event__date">{{ date }}</div>
      <h2 class="event__title">
        {{ title }}
      </h2>
    </div>
    <div class="event__detail" v-if="active" v-html="detailHTML"></div>

    <img src="../assets/icons/icon_down.png" alt="" :class="{ flip: active }" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['title', 'date', 'detailHTML'],
  setup() {
    const active = ref(false);
    function toggleActive() {
      console.log('clicked');
      active.value = !active.value;
    }
    return {
      toggleActive,
      active,
    };
  },
};
</script>

<style lang="scss">
.event {
  padding: 1em;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;

  &__title {
    font-size: 2rem;
    font-weight: normal;
    margin-top: 1rem;
  }

  &__detail {
    margin-block: 2rem;
  }

  img {
    position: absolute;
    top: 2rem;
    right: 0;
    bottom: 0;
    height: 50px;
    transition: transform 0.3s;
  }

  img.flip {
    transform: rotate(180deg);
  }
}
</style>
