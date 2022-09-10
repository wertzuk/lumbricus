<template>
  <h1 class="section-heading">Vortragsveranstaltungen</h1>
  <div class="wrapper flex">
    <div class="left-main">
      <div v-for="post in posts" :key="post.id">
        <NewCard
          :title="post.title"
          :startDate="post.dateStart"
          :endDate="post.dateEnd"
          :detailHTML="post.content"
        />
      </div>
    </div>
    <div class="right-main">
      <div class="event-description main-text-clr">
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
      <div class="img flex g-2">
        <img
          src="../assets/event_images/IMG_4767.jpg"
          class="rounded-1"
          alt=""
        />
        <img
          src="../assets/event_images/IMG_4767.jpg"
          class="rounded-1"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewCard from '@/components/NewCard.vue';
// import Event from '@/components/Event.vue';
import { useStore } from 'vuex';
import { transformDates } from '@/utils/utils';

export default {
  props: {
    title: String,
  },
  components: {
    // Event,
    NewCard,
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

.section-heading {
  text-align: center;
  margin-block: 2rem;
}
.wrapper {
  margin: 3rem;
  transition: transform 600ms ease-in-out;
  // gap: 3rem;
}
.left-main {
  flex-basis: 40%;
}
.img {
  // width: 800px;
  aspect-ratio: 25/9;
  width: 400px;
  height: 400px;
  margin-top: 2rem;
  img {
    height: 100%;
    object-fit: cover;
  }
}
.right-main {
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  padding-inline: 4rem;
}

.event-description {
  flex: 1;
}
</style>
