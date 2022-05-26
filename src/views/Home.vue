<template>
  <section class="welcome flex">
    <div class="logo"><img src="" alt="LOGO" /></div>
    <div class="welcome__content">
      <div class="section-heading">
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

  <section class="carousel">
    <Carousel />
  </section>

  <section class="program">
    <h1>Unser Programm auf einen Blick</h1>
    <!-- TODO Embed in spereate C  -->
    <ul>
      <li class="program__item">Wildkräuterwanderung (mit Verkostung)</li>
      <li class="program__item">Kräuterseminare</li>
      <li class="program__item">Erlebniskurse</li>
      <li class="program__item">Vortragsveranstalungen</li>
      <li class="program__item">Walderlebnistage</li>
      <li class="program__item">Waldgeburtstage</li>
      <li class="program__item">Ferienprogramm/Nachmittagsbeteuung</li>
      <li class="program__item">
        umweltbezogene Unterrichtsbegleitung (für alle Schulformen und
        Klassenstufen)
      </li>
      <li class="program__item">naturbezogene Kinder-Workshops</li>
      <li class="program__item">Lesungen zu allen Anlässen</li>
    </ul>
  </section>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: { Carousel },
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
    h1 {
      font-size: 5rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.corousel {
  margin: 10rem 0;
}

.program {
  margin-inline: 10%;
  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin: 1rem 0 2rem;
  }
}
.program,
.program__item {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
}

.program__item {
  padding: 1em;
}

// .program,
</style>
