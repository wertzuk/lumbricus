<template>
  <div class="card rounded-1 flex" @click="showContent = !showContent">
    <div class="card__img">
      <img src="../assets/event_images/IMG_4767.jpg" class="rounded-1" alt="" />
    </div>
    <div class="card__title">
      Kinder-Ferien-Programm von NABU/NAJU Saarland e.V.: Sommercamp „Fuchsbau“
    </div>
    <div class="card__date">SA. 28.05.2022 14:00-16:00 Uhr</div>
    <div class="card__content">„Ach schüttel mich, ach rüttel mich…“</div>
  </div>
  <transition name="fade">
    <div v-if="showContent">
      <div class="detail-container rounded-1">
        <header class="flex justify-between">
          <h2>
            Kinder-Ferien-Programm von NABU/NAJU Saarland e.V.: Sommercamp
            „Fuchsbau“
          </h2>
          <img
            src="../assets/icons/icon_close.svg"
            alt=""
            @click="showContent = false"
          />
        </header>
        <div>SA. 28.05.2022 14:00-16:00 Uhr</div>
        <div class="card__content">
          Treffpunkt: Wanderparkplatz Netzbachweiher von: 10.00 Uhr – 17.00 Uhr
          Kosten: 30,00 €/Person, einschl. Zutaten und umfangreichem Skript Es
          ist schon Tradition, dass am Feiertag „Marie Himmelfahrt“ die
          Wildkräuter- Exkursion „himmlischer Genuss“ an der Netzbachhütte
          stattfindet. Die Teilnehmer lernen auch in diesem Jahr nicht nur die
          essbaren Wildkräuter aus Wald und Wiese kennen, sondern bereiten im
          Anschluss an die Wanderung mit Sammeln ein komplettes „himmlisches“
          Wildkräuter-Menu. Lassen Sie sich überraschen, welch seltene, leckere
          Wildkräuter-Kompositionen sich der Referent wieder ausgedacht hat!
        </div>
      </div>
    </div>
  </transition>
  <transition name="overlay">
    <div class="overlay" v-if="showContent" @click="showContent = false"></div>
  </transition>

  <!-- <div class="overlay" :class="{ active: showContent }"></div> -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showContent = ref(false);
    return {
      showContent,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.card {
  flex-direction: column;
  background: whitesmoke;
  padding: 2rem;
  width: 80%;
  box-shadow: 3px -3px 15px rgba(0, 0, 0, 0.1);
  transition: transform 200ms;
  z-index: 1;
  cursor: pointer;
  & > * {
    margin-bottom: 1.5rem;
    font-size: 19px;
  }
  &__img {
    width: 100%;
    height: 200px;
    margin-inline: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
  }
  &__date {
    font-weight: bolder;
  }

  &:not(:first-child) {
    margin-top: calc(5rem * -1);
  }

  &:nth-child(2n) {
    background: $clr-card-bg;
  }
  &:hover {
    transform: translateY(-20px);
  }
}

.detail-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 800px;
  background: white;
  padding: 2em 4em;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  header {
    gap: 2rem;
    img {
      width: 40px;
      height: 40px;
      margin-right: -3rem;
      cursor: pointer;
    }
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}

.fade-enter-from,
.overlay-enter-from {
  opacity: 0;
}

.fade-leave-to,
.overlay-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
  z-index: 100;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 300ms;
}
</style>
