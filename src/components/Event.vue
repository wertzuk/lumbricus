<template>
  <div class="event" @click="toggleActive" :class="{ active: active }">
    <div class="event__header justify-between align-center">
      <div class="flex justify-between">
        <h2 class="event__title">
          {{ title }}
        </h2>
      </div>
      <div class="flex">
        <div class="event__date">{{ dateStr }}</div>
      </div>
    </div>
    <div class="event__detail" v-html="detailHTML"></div>
    <button class="sign-in btn">Zur Anmeldung</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { transformDates } from '@/utils/utils';

export default {
  props: ['title', 'startDate', 'endDate', 'detailHTML'],
  setup(props) {
    const active = ref(false);
    function toggleActive() {
      active.value = !active.value;
    }

    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);

    const dateStr = transformDates(startDate, endDate);

    return {
      toggleActive,
      active,
      dateStr,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';
.event {
  padding: 1.5em 2em;
  position: relative;
  margin-bottom: 1.5rem;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  // max-height: 160px;
  transition: max-height 0.4s ease-in-out;
  background: rgb(210, 239, 212);

  // &.active {
  //   max-height: 1000px;
  // }

  &__title {
    font-size: $fs-600;
    font-weight: 300;
  }

  &__date {
    font-size: $fs-small;
    margin-right: 3px;
    opacity: 0.7;
  }

  &__title,
  &__date {
    color: $clr-text-400;
  }

  &__detail {
    margin-block: 2rem;
    font-size: 1rem;
    width: 80%;
    color: $clr-text-500;
    opacity: 0.7;
  }

  img {
    height: 50px;
    transition: transform 0.3s;
  }
}

.readmore {
  position: absolute;
  inset: 0;
  top: 4rem;
  background-image: linear-gradient(transparent, rgba($clr-main-bg, 1));
}

.sign-in {
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding: 1rem;
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
