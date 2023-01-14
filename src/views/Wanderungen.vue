<template>
  <header>
    <h1 class="section-heading">Wanderungen</h1>
  </header>
  <main class="flex">
    <div class="image-container">
      <Carousel :images="sources1" />
    </div>
    <div class="text-container">
      <p>
        Unsere Wanderungen bieten nicht nur viele naturkundliche Informationen,
        sie sind auch literarisch begleitet und bieten so einen „Mehrwert“ an
        Unterhaltung!
      </p>
      <p>Angeboten werden zum Beispiel:</p>
      <ul>
        <li>Märchenwanderungen für Jung und Alt</li>
        <li>Krimilesungen</li>
        <li>
          Wanderungen „Fabelhafte Jahreszeiten“ mit lebendigen Fabeln aus aller
          Herren Länder
        </li>
        <li>
          Dämmerungswanderungen gerne auch mit gruseligen Geschichten zur Nacht
        </li>
        <li>Fackelwanderungen</li>
        <li>
          Wanderungen „Sagenhaftes Saarland“ mit ausgewählten Sagen aus dem
          Saarland
        </li>
      </ul>
      <p>
        Schauen Sie doch einfach mal unter dem Menupunkt Termine, wann die
        nächste Wanderung/Lesung in Ihrer Nähe stattfindet.
      </p>
      <p>
        <strong
          >Unglaubliche Erzählungen –<br />
          von Wildschweinen, Wölfen, Bären und anderen „Untieren“</strong
        >
      </p>
      <p>
        Lasst euch entführen in die Welt der Waldgnome! Lernt die Abenteuer
        kennen, die ich als Geschichtenerzähler auf vielen meiner Touren
        bestehen musste. Oder erfreut euch an lustigen Kräutermärchen, die auch
        viel über die Heilkraft und den Einsatz der Kräuter verraten.<br />
        Solchen und ähnlichen Geschichten lauschen nicht nur Kinder gerne, wenn
        ich meine Zuhörer mitnehme auf eine Entdeckungsreise in die
        spannend-verrückte Welt der Waldgeister!
      </p>
      <p>Wälder und Bücher stecken voller Möglichkeiten für Jung und Alt:</p>
      <ul>
        <li>Waldlesenächte</li>
        <li>Literaturgeburtstage</li>
        <li>literarische Wanderungen und Dämmerungsspaziergänge</li>
        <li>Jahreszeitenwanderungen</li>
        <li>(Kräuter-) Märchenwanderungen</li>
        <li>Märchen-Workshops</li>
        <li>Herstellen eines Geschichten-Erinnermichs</li>
        <li>Lese- und Schreibwerkstatt</li>
        <li>musikalisch-literarische Events</li>
      </ul>
      <p>
        Viele dieser Veranstaltungen sind als 3-stündige Programme konzipiert
        und können bei Ihnen vor Ort stattfinden. Gerne beantworten wir ihre
        Anfragen und beraten Sie individuell.
      </p>
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
    const { imageSources } = store.state;
    const { sources1 } = imageSources;
    function datesToString(start, end) {
      return transformDates(start, end);
    }

    return {
      posts,
      datesToString,
      sources1,
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
  height: 80vh;
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
