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
    <h1 class="section-heading" ref="offering">Unser Angebot</h1>
    <div class="program-grid">
      <div>
        <router-link to="/wanderungen">
          <span>Wildkräuterwanderungen (mit Verkostung)</span
          ><img src="../assets/wk.jpg" alt="" loading="lazy" />
        </router-link>
      </div>
      <div>
        <router-link to="/erlebniskurse">
          <span>Kräuterseminare</span
          ><img src="../assets/seminare.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/erlebniskurse">
          <span>Erlebniskurse</span><img src="../assets/erlebnis.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/lesungen">
          <span>Vortragsveranstaltungen</span
          ><img src="../assets/lesung2.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/geburtstage">
          <span>Walderlebnistage</span
          ><img src="../assets/erlebnis2.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/geburtstage">
          <span>Ferienprogramme / Nachmittagsbetreuung</span
          ><img src="../assets/ferien.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/wanderungen">
          <span>Märchenwanderungen</span
          ><img src="../assets/wanderung.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/lesungen">
          <span> umweltbezogene Unterrichtsbegleitung </span
          ><img src="../assets/betreuung.jpg" alt="" />
        </router-link>
      </div>
      <div>
        <router-link to="/lesungen">
          <span>Lesungen zu allen Anlässen</span
          ><img src="../assets/lesung3.jpg" alt="" />
        </router-link>
      </div>
    </div>
  </div>
  <section class="events">
    <div class="events__heading flex justify-between align-center">
      <h1 class="section-heading" ref="events">Aktuelle Veranstaltungen</h1>
      <router-link to="/event" class="new-event" v-if="store.state.loggedIn"
        >Neue Veranstaltung erstellen</router-link
      >
    </div>
    <ul class="event-list">
      <li
        v-for="event in store.getters.filterByMonth(upcoming)"
        :key="event.id"
      >
        <Event
          :eventId="event.id"
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
  <Dialog />
  <Popup />
</template>

<script setup>
import Event from '@/components/Event.vue';
import Button from '@/components/Button.vue';
import Dialog from '@/components/Dialog.vue';
import Popup from '@/components/Popup.vue';
import { onMounted, ref, inject } from 'vue';

const store = inject('store');
const offering = ref(null);
const events = ref(null);

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
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.welcome {
  height: calc(100vh - 89.6px);
  overflow: hidden;
  .logo {
    clip-path: circle(60.7% at 19% 28%);
    flex-basis: 35%;
    height: 100%;
    background-image: url(../assets/big-img.jpg);
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
  font-size: $fs-1000;
  letter-spacing: 1px;
  color: $clr-text-400;
  text-align: center;
  font-weight: bold;
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

  a {
    position: absolute;
    inset: 0;
  }
  & > div {
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.03);
    }
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

@media only screen and(max-width: $break-point) {
  .welcome {
    all: unset;
    height: auto;
    h1 {
      font-size: $fs-800;
      font-weight: bold;
      line-height: 1.3;
    }
    h2 {
      font-size: $fs-600;
    }
    .logo {
      width: 95%;
      min-height: 300px;
      background-position: -100px;
    }
    .worm {
      width: 100px;
      height: 100px;
      margin: 1rem auto;
    }
    q {
      font-size: $fs-400;
      margin-block: 2rem;
    }
    .buttons {
      flex-direction: column;
    }
  }
  .sub-heading {
    flex-direction: column;
  }
  .list {
    margin: 6rem 0;
    h1 {
      font-size: $fs-600;
      font-weight: bolder;
      padding-inline: 0.5rem;
    }
  }

  .new-event {
    display: none;
  }
  .program-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    & > div {
      border-radius: 1rem 1rem 0 0;
      aspect-ratio: 5/4;
      span {
        font-size: $fs-small;
      }
    }
    img {
      object-fit: contain;
    }
  }

  .events {
    width: 100%;
    margin-block: 5rem;
    padding: 1rem;
    h1 {
      font-size: $fs-600;
    }
  }
}

// .program,
</style>
