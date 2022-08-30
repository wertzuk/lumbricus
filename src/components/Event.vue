<template>
  <transition name="fade">
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
      <!-- <div class="readmore flex justify-center align-center">Mehr erfahren</div> -->
    </div>
  </transition>
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
  position: relative;
  margin-bottom: 1.5rem;
  cursor: pointer;
  // height: 160px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &__header {
    // padding-bottom: 2rem;
    // border-bottom: 1px solid black;
  }
  &__title {
    font-size: $fs-600;
    font-weight: 300;
  }

  &__date {
    font-size: $fs-small;
    // font-weight: bolder;
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

  img.flip {
    transform: rotate(180deg);
  }
}

.fade-enter-from {
  transform: scaleY(0);
}

.fade-enter-to {
  transform: scaleY(1);
}
.fade-enter-active {
  transition: transform 300ms;
}

.readmore {
  position: absolute;
  inset: 0;
  top: 4rem;
  background-image: linear-gradient(transparent, rgba($clr-main-bg, 1));
}
</style>
