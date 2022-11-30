<template>
  <section class="welcome flex align-center">
    <div class="logo">
      <!-- <img src="../assets/big-img.jpg" alt="LOGO" /> -->
    </div>
    <div class="welcome__content">
      <div class="main-heading">
        <h1>Herzlich Willkommen!</h1>
        <h2>Guido Geisens Umwelt Endutainment</h2>
      </div>
      <div class="txt flex">
        <p class="main-text">
          Alles, was Natur an Gutem schenken kann, schenkt sie uns in Fülle. Und
          dazu die Begabung, all das zu genießen! (indianische Weisheit)
        </p>
        <!-- <div class="worm"><img src="../assets/wurm.png" alt="" /></div> -->
      </div>

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
    <div class="months flex g-2 align-center">
      <span>FILTER</span>
      <button class="btn btn-month" @click="setFilter(6)">
        Nächste 3 Monate
      </button>
      <button class="btn btn-month" @click="setFilter(7)">August</button>
      <button class="btn btn-month" @click="setFilter(8)">September</button>
    </div>
    <ul class="event-list">
      <li v-for="post in posts" :key="post.id">
        <Event
          :title="post.title"
          :startDate="post.dateStart"
          :endDate="post.dateEnd"
          :detailHTML="post.content"
        />
      </li>
      <span v-if="filterByDays.length === 0"
        >Keine Veranstaltungen in diesem Monat!</span
      >
    </ul>
  </section>
</template>

<script>
import Event from '@/components/Event.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
// import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: { Event, Button },
  setup() {
    const store = useStore();
    const offering = ref(null);
    const events = ref(null);

    const currentFilter = ref(null);

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
    function setFilter(month) {
      currentFilter.value = month;
    }

    const filterByDays = computed(() => {
      if (currentFilter.value === null) return store.state.posts;
      return store.getters.filterByMonths(currentFilter.value);
    });
    console.log(filterByDays);

    const filtered = computed(() => store.getters.filterUpcoming);

    onMounted(() => {
      store.dispatch('getPosts');
    });

    return {
      posts: computed(() => store.state.posts),
      filterByDays,
      setFilter,
      scrollToElement,
      scrollToOffering,
      offering,
      events,
      filtered,
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
    margin-bottom: 7rem;
    color: $clr-text-500;
  }
  p {
    opacity: 0.7;
    padding: 3rem;
  }
  .list {
    text-align: left;
    margin-left: 6rem;
  }
  .worm {
    width: 40%;
    aspect-ratio: 1;
  }
}
.right-img {
  width: 100vw;
  height: 50vh;
  background-attachment: fixed;
  background-image: url(../assets/DSCN6253.jpg);
  background-size: cover;
  // aspect-ratio: 4/3;
  // clip-path: circle(40.8% at 100% 49%);
  img {
    object-fit: cover;
  }
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

.main-text {
  font-size: 1.2rem;
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
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  // overflow: hidden;

  & > div {
    // height: 300px;
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      text-transform: uppercase;
      font-size: $fs-400;
      color: white;
      background: rgba(0, 0, 0, 0.4);
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
  margin-top: 2rem;
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
