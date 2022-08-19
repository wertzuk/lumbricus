<template>
  <div class="wrapper flex">
    <section class="event-cards">
      <h2 class="view-heading heading">Vortragsveranstaltungen</h2>
      <div class="cards flex">
        <Card class="card-item" />
        <Card class="card-item" />
        <Card class="card-item" />
        <Card class="card-item" />
        <Card class="card-item" />
      </div>
    </section>
    <section class="event-description">
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
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  props: {
    title: String,
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.wrapper {
  & > * {
    padding: 3em;
    color: $clr-text-400;
  }

  .cards {
    margin-top: 3rem;
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: calc(5rem * -1);
    }
    .card-item {
      z-index: 1;
    }
    .card-item:nth-child(2n) {
      background: $clr-card-bg;
    }
    .card-item:not(:first-child) {
    }
  }

  .view-heading {
    font-size: $fs-900;
  }
  .event-cards {
    flex-basis: 20%;
    flex-shrink: 1;
  }
  .event-description {
    flex-basis: 70%;
    margin-top: 8em;

    p {
      font-size: $fs-400;
      margin-bottom: 1.5em;
      width: 80%;
      margin-inline: auto;
    }
  }
}
</style>
