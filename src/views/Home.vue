<template>
  <section class="welcome flex align-center">
    <div class="logo">
      <!-- <img src="../assets/big-img.jpg" alt="LOGO" /> -->
    </div>
    <div class="welcome__content">
      <div class="main-heading">
        <h1>Herzlich Willkommen!</h1>
        <h2>Guido Guisens Umwelt Endutainment</h2>
      </div>
      <p class="main-text">
        Alles, was Natur an Gutem schenken kann, schenkt sie uns in Fülle. Und
        dazu die Begabung, all das zu genießen! (indianische Weisheit)
      </p>

      <Button title="Nächste Veranstaltungen" />
    </div>
  </section>
  <div class="right-img"></div>

  <div class="list">
    <h1>Unser Programmangebot in der Übersicht:</h1>
    <div class="program-grid">
      <div>
        <span>Wildkräuterwanderungen (mit Verkostung)</span
        ><img src="../assets/wk.jpg" alt="" />
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
      <div>
        <span>Waldgeburtstage (für groß und klein)</span
        ><img src="../assets/waldgeb.jpg" alt="" />
      </div>
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
      <div>
        <span>naturbezogene Kinder-Workshops</span
        ><img src="../assets/lesung.jpg" alt="" />
      </div>
      <div>
        <span>Lesungen zu allen Anlässen</span
        ><img src="../assets/lesung2.jpg" alt="" />
      </div>
    </div>
  </div>
  <section class="events">
    <div class="events__heading flex g-2 align-center">
      <h1 class="section-heading">Aktuelle Veranstaltungen</h1>
    </div>
    <div class="months flex g-2 align-center">
      <span>FILTER</span>
      <button class="btn btn-month">August</button>
      <button class="btn btn-month">September</button>
      <button class="btn btn-month">Oktober</button>
      <button class="btn btn-month">November</button>
      <button class="btn btn-month">Dezember</button>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <Event
          :title="post.title"
          :startDate="post.dateStart"
          :endDate="post.dateEnd"
          :detailHTML="post.content"
        />
      </li>
    </ul>
  </section>
  <!-- <section>
    <div class="big-img"></div>
  </section> -->

  <section class="carousel">
    <Carousel />
  </section>
</template>

<script>
import Event from '@/components/Event.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Carousel from '../components/Carousel.vue';
import Button from '../components/Button.vue';

export default {
  name: 'Home',
  components: { Carousel, Event, Button },
  setup() {
    const store = useStore();
    const events = ref(null);

    function scrollToElement() {
      console.log(events.value);
      if (events.value) {
        events.value.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(() => {
      store.dispatch('getPosts');
    });

    return {
      posts: computed(() => store.state.posts),
      scrollToElement,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.welcome {
  height: calc(100vh - 91.2px);
  // height: 100vh;
  // padding: 5rem 3rem;
  overflow: hidden;
  .logo {
    clip-path: circle(65.7% at 24% 25%);
    flex-basis: 35%;
    height: 100%;
    // min-width: 700px;
    background-image: url(../assets/big-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  .main-heading {
    h1 {
      font-size: $fs-heading;
      font-weight: 300;
      color: $clr-text-400;
      font-family: 'Alwyn New', sans-serif;
    }
    h2 {
      font-size: $fs-800;
      font-weight: 300;
      color: $clr-text-500;
    }
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
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.section-heading {
  font-family: 'Alwyn New', sans-serif;
  // margin-bottom: 3rem;
  font-size: $fs-900;
  letter-spacing: 1px;
  color: $clr-text-400;
  p {
    font-size: 2rem;
    font-weight: 400;
  }
}

.main-text {
  font-size: 1.2rem;
}

// .big-img {
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;
//   border-radius: 60px 60px 0 0;
//   background-image: url(../assets/big-img.jpg);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: right;
//   background-attachment: fixed;
//   margin-bottom: 5rem;
// }

.list {
  margin: 10rem 10%;
}

.program-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  & > div {
    // height: 300px;
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem 1rem 1rem;
      text-align: center;
      text-transform: uppercase;
      color: white;
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      display: block;
    }
    img {
      object-fit: cover;
      border-radius: none;
      width: 100%;
      height: 100%;
    }
  }
}

.corousel {
  margin-block: 8rem;
}

.events {
  margin: 10rem 10%;
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
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}

// .program,
</style>
