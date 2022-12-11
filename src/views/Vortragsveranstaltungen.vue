<template>
  <header>
    <h1 class="section-heading">Vortragsveranstaltungen</h1>
  </header>
  <main>
    <div class="top">
      <div class="image-container">
        <Carousel />
      </div>
      <div class="text-container">
        <p>
          Unsere Vortragsveranstaltungen richten sich vor allem an Obst- und
          Gartenbauvereine, Landfrauenverbände, aber natürlich auch an andere
          interessierte Gruppen, Lehrerkollegien, Kindergartenteams und sind
          auch geeignet für die Weiterbildung in Kommunen und
          Gartenbaubetrieben.
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
          Unsere „Pflanzenportraits“ lassen euch die jeweilige Pflanze danach
          mit anderen Augen sehen (z.B. die Brennnessel). Lasst euch per Telefon
          oder Mail unser komplettes Angebot an Vortragsveranstaltungen
          unverbindlich mitteilen.
        </p>
        <p>
          Theoretisch und Praxisorientiert finden unsere Schnittkurse für
          Obstgehölze Rosen Sträucher statt. Geeignete Stellen für die
          praktische Durchführung sollten vor Ort zur Verfügung stehen.
        </p>
        <p>
          Vorträge können auch im Rosengarten des Umwelt- und Freizeitzentrums
          Finkenrech (bei Dirmingen) gehalten werden.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { useStore } from 'vuex';
import { transformDates } from '@/utils/utils';
import Carousel from '@/components/Carousel.vue';

export default {
  props: {
    title: String,
  },
  components: {
    Carousel,
  },

  setup() {
    const store = useStore();
    const { posts } = store.state;
    console.log(posts);
    function datesToString(start, end) {
      return transformDates(start, end);
    }

    return {
      posts,
      datesToString,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';

h1 {
  text-align: center;
}
.top {
  display: flex;
}
.image-container {
  flex-basis: 40%;
  padding: 2rem;
}
.text-container {
  flex-basis: 50%;
  padding: 2rem;
  font-size: $fs-400;
  color: $clr-text-400;
  p {
    margin-bottom: 1em;
  }
}
</style>
