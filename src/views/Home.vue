<template>
  <section class="welcome flex">
    <div class="logo"><img src="" alt="LOGO" /></div>
    <div class="welcome__content">
      <div>
        <h1 class="main-heading">Herzlich Willkommen!</h1>
        <p>Guido Guisens Umwelt Endutainment</p>
      </div>
      <p class="main-text">
        Alles, was Natur an Gutem schenken kann, schenkt sie uns in Fülle. Und
        dazu die Begabung, all das zu genießen! (indianische Weisheit)
      </p>
    </div>
  </section>

  <section>
    <div class="big-img">
      <img src="../assets/big-img.jpg" alt="" loading="lazy" />
    </div>
  </section>

  <section class="events" v-if="posts">
    <h1 class="section-heading">Aktuelle Veranstaltungen</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <Event
          :title="post.title"
          :date="post.date"
          :detailHTML="post.content"
        />
      </li>
    </ul>
  </section>

  <section class="carousel">
    <Carousel />
  </section>
</template>

<script>
import Event from '@/components/Event.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: { Carousel, Event },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('getPosts');
    });

    return {
      posts: computed(() => store.state.posts),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.welcome {
  height: calc(100vh - 136px);
  padding: 5rem 3rem;
  overflow-x: hidden;
  .logo {
    flex-basis: 40%;
  }
  & > p {
    font-size: 2rem;
  }
  &__content {
    text-align: center;
    flex-basis: 60%;
  }

  .section-heading {
    margin-bottom: 3rem;
    font-size: $fs-900;
    letter-spacing: 1px;
    color: $clr-text-400;
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }
}

.main-heading {
  font-size: $fs-heading;
  font-weight: 500;
}

.main-text {
  font-size: 1.2rem;
}

.big-img {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border-radius: 60px 60px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.corousel {
  margin-block: 8rem;
}

.events {
  margin: 10rem 10%;
}

// .program,
</style>
