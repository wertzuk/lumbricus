<template>
  <div class="event" @click="toggleActive" :class="{ active: active }">
    <div class="icons" v-if="store.state.loggedIn">
      <img
        src="../assets/icons/icon_edit.png"
        alt=""
        @click="editEvent"
        title="Bearbeiten"
      />
      <img src="../assets/icons/icon_del.png" alt="" title="Löschen" />
    </div>
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
import { useRouter } from 'vue-router';

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
const router = useRouter();

function showDialog() {
  const { modal } = store.state;
  modal.id = props.eventId;
  modal.title = props.title;
  modal.active = true;
  store.state.modalActive = true;
  document.body.style.overflowY = 'hidden';
}

function editEvent() {
  store.state.eventSelected.id = props.eventId;
  store.state.eventSelected.title = props.title;
  store.state.eventSelected.dateStart = props.startDate;
  store.state.eventSelected.dateEnd = props.endDate;
  store.state.eventSelected.content = props.detailHTML;
  router.push('/edit');
}

const startDate = new Date(props.startDate);
const endDate = new Date(props.endDate);

const dateStr = transformDates(startDate, endDate);
</script>

<style lang="scss" scoped>
@import '../scss/utilities';
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

.icons {
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  img {
    width: 25px;
    height: 25px;
    margin-left: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
}

.sign-in {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  border: 2px solid black;
  border-radius: 1rem 0;
  padding: 1em;
  background: $clr-beige;
  transition: all 0.2s;
  &:hover {
    background: $clr-event-bg;
  }
}

@media only screen and(max-width: $break-point) {
  .event {
    padding-inline: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.9;

    &__title {
      font-size: $fs-450;
      font-weight: 300;
    }
    &__date {
      font-size: $fs-small;
      margin: 0.5rem 0 0;
      opacity: 1;
      width: 100%;
      font-weight: bolder;
    }

    &__detail {
      margin-block: 1rem;
      font-size: $fs-small;
      width: 100%;
      color: $clr-text-500;
    }
  }

  .sign-in {
    position: static;
    font-size: $fs-small;
  }
}
</style>
