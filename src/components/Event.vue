<template>
  <div class="event" @click="toggleActive">
    <div class="event__header justify-between align-center">
      <div class="flex justify-between">
        <h2 class="event__title">
          {{ title }}
        </h2>
        <img
          src="../assets/icons/icon-next.svg"
          alt=""
          :class="{ flip: active }"
        />
      </div>
      <div class="flex">
        <div class="event__date">{{ gerStartDate }}</div>
        <div class="event__date" v-if="gerEndDate !== 'Invalid Date'">
          - {{ gerEndDate }}
        </div>
      </div>
    </div>
    <div class="event__detail" v-if="active" v-html="detailHTML"></div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['title', 'startDate', 'endDate', 'detailHTML'],
  setup(props) {
    const active = ref(false);
    function toggleActive() {
      active.value = !active.value;
    }

    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const gerStartDate = startDate.toLocaleDateString('de-DE', options);
    const gerEndDate = endDate.toLocaleDateString('de-DE', options);

    return {
      toggleActive,
      active,
      gerStartDate,
      gerEndDate,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';
.event {
  padding: 1em;
  // border-top: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;

  &__title {
    font-size: $fs-600;
    font-weight: normal;
    margin-top: 1rem;
  }

  &__date {
    font-size: $fs-small;
    font-weight: bolder;
    margin-right: 3px;
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
    opacity: 0.8;
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
