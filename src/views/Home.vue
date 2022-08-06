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
    <div class="right-img">
      <img src="../assets/food-1.jpg" alt="" />
    </div>
  </section>

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
  <section>
    <div class="big-img"></div>
  </section>

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
  // padding: 5rem 3rem;
  overflow: hidden;
  .logo {
    clip-path: circle(65.7% at 32% 25%);
    flex-basis: 40%;
    height: 100%;
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

  .right-img {
    position: absolute;
    bottom: -300px;
    right: 0;
    width: 500px;
    height: 500px;
    // aspect-ratio: 4/3;
    clip-path: circle(40.8% at 100% 49%);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
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

.big-img {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border-radius: 60px 60px 0 0;
  background-image: url(../assets/big-img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  margin-bottom: 5rem;
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
