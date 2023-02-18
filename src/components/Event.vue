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
    <button class="sign-in btn" @click="showDialog">Zur Anmeldung</button>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { transformDates } from '@/utils/utils';

const props = defineProps({
  eventId: {
    type: Number,
  },
  title: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  detailHTML: {
    type: String,
  },
});
const store = inject('store');
const dialog = ref(null);
const active = ref(false);
function toggleActive() {}

function showDialog() {
  const { modal } = store.state;
  modal.id = props.eventId;
  modal.title = props.title;
  modal.active = true;
  store.state.modalActive = true;
  document.body.style.overflowY = 'hidden';
}

const startDate = new Date(props.startDate);
const endDate = new Date(props.endDate);

const dateStr = transformDates(startDate, endDate);
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';
.event {
  padding: 1.5em 2em;
  position: relative;
  margin-bottom: 1.5rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  background: $clr-beige;
  border-radius: 16px;

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

.sign-in {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  border: 2px solid black;
  border-radius: 1rem 0;
  padding: 1rem;
  background: $clr-beige;
  transition: all 0.2s;
  &:hover {
    background: $clr-event-bg;
  }
}
</style>
