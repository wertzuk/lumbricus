<template>
  <section class="welcome flex align-center">
    <div class="logo"></div>
    <div class="welcome__content">
      <div class="main-heading">
        <h1>Herzlich Willkommen!</h1>
      </div>
      <div class="sub-heading flex">
        <div class="heading-des">
          <h2>
            Guido Geisens <br />
            Lumbricus Umwelt Edutainment
          </h2>
          <p class="small">Umweltbildung natürlich!</p>
        </div>
        <div class="worm"><img src="../assets/wurm.png" alt="" /></div>
      </div>
      <q>
        Das Leben in der Natur gibt die Wahrheit der Dinge zu erkennen (A.Dürer)
      </q>

      <div class="flex g-2 justify-center buttons">
        <Button title="Unser Angebot" @click="scrollToOffering" />
        <Button title="Nächste Veranstaltungen" @click="scrollToElement" />
      </div>
    </div>
  </section>
  <div class="right-img"></div>

  <div class="list">
    <h1 class="section-heading" ref="offering">
      Unser Programmangebot in der Übersicht:
    </h1>
    <div class="program-grid">
      <div>
        <span>Wildkräuterwanderungen (mit Verkostung)</span
        ><img src="../assets/wk.jpg" alt="" loading="lazy" />
      </div>
      <div>
        <span>Kräuterseminare</span><img src="../assets/seminare.jpg" alt="" />
      </div>
      <div>
        <span>Erlebniskurse</span><img src="../assets/erlebnis.jpg" alt="" />
      </div>
      <div>
        <span>Vortragsveranstaltungen</span
        ><img src="../assets/lesung3.jpg" alt="" />
      </div>
      <div>
        <span>Walderlebnistage</span
        ><img src="../assets/erlebnis2.jpg" alt="" />
      </div>
      <!-- <div>
        <span>Waldgeburtstage (für groß und klein)</span
        ><img src="../assets/waldgeb.jpg" alt="" />
      </div>
        -->
      <div>
        <span>Ferienprogramme/Nachmittagsbetreuung</span
        ><img src="../assets/ferien.jpg" alt="" />
      </div>
      <div>
        <span>Märchenwanderungen</span
        ><img src="../assets/wanderung.jpg" alt="" />
      </div>
      <div>
        <span> umweltbezogene Unterrichtsbegleitung </span
        ><img src="../assets/betreuung.jpg" alt="" />
      </div>
      <!-- <div>
        <span>naturbezogene Kinder-Workshops</span
        ><img src="../assets/lesung.jpg" alt="" />
      </div> -->
      <div>
        <span>Lesungen zu allen Anlässen</span
        ><img src="../assets/lesung2.jpg" alt="" />
      </div>
    </div>
  </div>
  <section class="events">
    <div class="events__heading flex justify-between align-center">
      <h1 class="section-heading" ref="events">Aktuelle Veranstaltungen</h1>
      <router-link to="/event" class="new-event"
        >Neue Veranstaltung erstellen</router-link
      >
    </div>
    <!-- <button @click="store.getters.filterByMonth()">filter</button> -->
    <ul class="event-list">
      <li
        v-for="event in store.getters.filterByMonth(upcoming)"
        :key="event.id"
      >
        <Event
          :title="event.title"
          :startDate="event.dateStart"
          :endDate="event.dateEnd"
          :detailHTML="event.content"
        />
      </li>
      <span v-if="store.state.events.length === 0"
        >Keine Veranstaltungen in diesem Monat!</span
      >
    </ul>
  </section>
</template>

<script>
/* eslint-disable */

import Event from '@/components/Event.vue';
import { onMounted, ref, inject, reactive } from 'vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: { Event, Button },
  setup() {
    const store = inject('store');
    const offering = ref(null);
    const events = ref(null);
    const modal = ref(null);

    const upcoming = ref(true);

    function scrollToElement() {
      if (events.value) {
        events.value.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function scrollToOffering() {
      if (offering.value) {
        offering.value.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(async () => {
      await store.methods.getEvents();
    });

    return {
      store,
      scrollToElement,
      scrollToOffering,
      offering,
      events,
      modal,
      upcoming,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.welcome {
  height: calc(100vh - 91.2px);
  overflow: hidden;
  .logo {
    clip-path: circle(60.7% at 19% 28%);
    flex-basis: 35%;
    height: 100%;
    background-image: url(../assets/big-img.jpg);
    // background-image: url(../assets/wurm_neu.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  &__content {
    text-align: center;
    flex-basis: 60%;
    color: $clr-text-500;
    height: 100%;
    padding: 1rem;
  }
  h2 {
    font-size: $fs-800;
    font-weight: 300;
    color: $clr-text-400;
    line-height: 1.4;
  }
  p {
    margin-top: 1rem;
    opacity: 0.7;
  }
  q {
    display: block;
    font-style: italic;
    font-size: $fs-450;
    font-weight: 300;
    opacity: 0.7;
    margin-block: 4rem;
  }
  .list {
    text-align: left;
    margin-left: 6rem;
  }
  .sub-heading {
    margin-top: 2rem;
  }
  .heading-des {
    flex-basis: 80%;
  }
  .worm {
    width: 40%;
    max-width: 200px;
    aspect-ratio: 1;
    flex-basis: 20%;
  }
}

.sub-heading {
}
.right-img {
  width: 100vw;
  height: 50vh;
  background-attachment: fixed;
  background-image: url(../assets/DSCN6253.jpg);
  background-size: cover;
  img {
    object-fit: cover;
  }
}

.small {
  font-size: 1.3rem;
}

.section-heading {
  font-family: 'Alwyn New', sans-serif;
  font-size: $fs-900;
  letter-spacing: 1px;
  color: $clr-text-400;
  text-align: center;
  p {
    font-size: 2rem;
    font-weight: 400;
  }
}

.list {
  margin: 10rem 2rem;
}

.new-event {
  padding: 0.4em 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: $clr-text-400;
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}

.months {
  margin-top: 1rem;
}

.program-grid {
  margin-top: 3rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  // overflow: hidden;

  & > div {
    // height: 300px;
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      text-transform: uppercase;
      font-size: $fs-400;
      color: $clr-beige;
      font-weight: 500;
      letter-spacing: 1.5px;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding: 1rem;
      text-transform: uppercase;
    }
    img {
      object-fit: cover;
      border-radius: none;
      width: 100%;
      height: 100%;
    }
  }
}

.events {
  margin: 10rem auto;
  width: 60%;
  &__heading {
    display: flex;
    align-items: center;
  }
  ul {
    margin-top: 3rem;
  }
  .btn-month {
    border: 1px solid rgba(0, 0, 0, 0.6);
    display: block;
    padding: 0.4em 1em;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .btn-month.active {
    background: rgba(0, 0, 0, 0.3);
  }
}

.buttons {
  margin-top: 4rem;
}

@media only screen and(min-width: 1800px) {
  .welcome {
    .logo {
      clip-path: circle(62.7% at 25% 27%);
    }
  }
}

// .program,
</style>
