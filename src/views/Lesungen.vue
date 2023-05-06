<template>
  <header></header>
  <main class="flex">
    <section class="text-container">
      <h1 class="section-heading">Lesungen</h1>
      <p>
        Unsere Vortragsveranstaltungen richten sich vor allem an Obst- und
        Gartenbauvereine, Landfrauenverbände, aber natürlich auch an andere
        interessierte Gruppen, Lehrerkollegien, Kindergartenteams und sind auch
        geeignet für die Weiterbildung in Kommunen und Gartenbaubetrieben.
      </p>
      <p>
        Unsere Vorträge werden mit modernster Technik, praxisnah und vor allem
        kurzweilig durchgeführt.
      </p>
      <p>
        Auf meine lockere, humorvolle Art und Weise werde ich jeden so in das
        jeweilige Thema einbinden können, dass ihm dieser Abend noch lange in
        Erinnerung bleibt.
      </p>
      <p>
        In fast allen Bereichen des Gartenbaus, und hier vor allem in der
        biologischen Gartenbewirtschaftung, aber auch in den Themenbereichen –
        Natur – Umwelt – Gesundheit – könnt ihr lehrreiche, interessante und
        humorvoll dargebotene Vorträge buchen.
      </p>
      <p>
        Unsere „Pflanzenportraits“ lassen euch die jeweilige Pflanze danach mit
        anderen Augen sehen (z.B. die Brennnessel). Lasst euch per Telefon oder
        Mail unser komplettes Angebot an Vortragsveranstaltungen unverbindlich
        mitteilen.
      </p>
      <p>
        Theoretisch und Praxisorientiert finden unsere Schnittkurse für
        Obstgehölze Rosen Sträucher statt. Geeignete Stellen für die praktische
        Durchführung sollten vor Ort zur Verfügung stehen.
      </p>
      <p>
        Vorträge können auch im Rosengarten des Umwelt- und Freizeitzentrums
        Finkenrech (bei Dirmingen) gehalten werden.
      </p>
    </section>
    <div class="corousel-container">
      <Carousel :images="sources1" />
    </div>
  </main>
</template>

<script setup>
import { useStore } from 'vuex';
import Carousel from '@/components/Carousel.vue';

const store = useStore();
const { posts } = store.state;
const { imageSources } = store.state;
const { sources1 } = imageSources;
</script>

<style lang="scss" scoped>
@import '../scss/vars';
@import '../scss/utilities';

main {
  flex-direction: row-reverse;
}
h1 {
  margin-bottom: 2rem;
}
.corousel-container {
  height: 80vh;
  flex-basis: 40%;

  .image-container {
    padding: 2rem;
  }
  margin: 2rem;
}
.text-container {
  flex-basis: 60%;
  font-size: $fs-400;
  color: $clr-text-400;
  padding: 0 5rem;
  margin-top: 1rem;
  p {
    margin-bottom: 1em;
  }
}

@media only screen and(max-width: $break-point) {
  main {
    display: block !important;
  }
  h1 {
    margin-bottom: 1rem;
  }
  .text-container {
    padding: 0 2rem;
  }

  .corousel-container {
    margin: 2rem;
  }
}
</style>
