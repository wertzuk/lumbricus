<template>
  <div class="event" @click="toggleActive">
    <div class="event__header flex justify-between align-center">
      <h2 class="event__title">
        {{ title }}
      </h2>
      <div class="flex g-2">
        <div class="event__date">{{ germanDate }}</div>
        <img
          src="../assets/icons/icon_down.png"
          alt=""
          :class="{ flip: active }"
        />
      </div>
    </div>
    <div class="event__detail" v-if="active" v-html="detailHTML"></div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['title', 'date', 'detailHTML'],
  setup(props) {
    const active = ref(false);
    function toggleActive() {
      console.log('clicked');
      active.value = !active.value;
    }

    const date = new Date(props.date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const germanDate = date.toLocaleDateString('de-DE', options);

    return {
      toggleActive,
      active,
      germanDate,
    };
  },
};
</script>

<style lang="scss">
@import '../scss/utiltities';
@import '../scss/vars';
.event {
  padding: 1em;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;

  &__title {
    font-size: $fs-800;
    font-weight: normal;
    margin-top: 1rem;
  }

  &__date {
    font-size: $fs-500;
  }

  &__title,
  &__date {
    color: $clr-text-400;
  }

  &__detail {
    margin-block: 2rem;
    font-size: $fs-400;
    width: 80%;
    color: $clr-text-500;
  }

  img {
    // position: absolute;
    // top: 2rem;
    // right: 0;
    // bottom: 0;
    height: 50px;
    transition: transform 0.3s;
  }

  img.flip {
    transform: rotate(180deg);
  }
}
</style>
