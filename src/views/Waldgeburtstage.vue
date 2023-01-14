<template>
  <header>
    <h1 class="section-heading">Waldgeburtstage</h1>
  </header>
  <main>
    <div class="top">
      <div class="image-container">
        <Carousel :images="sources1" />
      </div>
      <div class="text-container">
        <p>
          Ein Geburtstag sollte ein besonderer Tag sein. Mit der gesamten
          Geburtstagsschar in den Wald, in die Natur: bauen, spielen, lernen,
          erforschen und eintauchen in die geheimnisvolle Welt des Waldes. Wäre
          dies nicht eine besondere Geburtstagsüberraschung für Ihr Kind?
        </p>
        <p>
          Abgestimmt auf das Alter der Mädchen und Jungen werden mit naturnahen
          Spielen und erlebnispädagogischen Aktionen alle Sinne angesprochen.<br />
          Bei unseren Geburtstagen stehen neben der Freude am gemeinsamen Tun,
          auch pädagogische Inhalte im Mittelpunkt. Dabei werden Tipps und
          Anregungen für eine kreative Gestaltung von besonderen Anlässen
          gegeben.
        </p>
        <p>
          Ein Waldgeburtstag ist als dreistündiges Programm konzipiert, wird
          ganzjährig angeboten und kann selbstverständlich an Ihrem Wohnort
          durchgeführt werden.
        </p>
        <p>
          Der Preis dazu: <strong>150,00 €</strong> (innerhalb des Saarlandes),
          einschl. Fahrtkosten,<br />
          Gruppengröße bis max. 15 Kindern, je weiteres Kind 5,00 € Aufpreis
        </p>
        <p>
          Da die Veranstaltung im Freien stattfindet, ist auf wetterfeste,
          beschmutzbare Kleidung und entsprechendes Schuhwerk zu achten.
        </p>
        <p>
          Neben den folgenden Themen, die als Beispiele dienen, sind natürlich
          weitere Themen unter Berücksichtigung eigener Wünsche in Absprache
          möglich. Rufen Sie uns an, wir erläutern Ihnen gerne den genauen
          Ablauf dazu!
        </p>
        <p>
          Sie finden unser Angebot auch auf der Plattform
          <a
            href="https://de.bester-geburtstag.de/activity-companies/guido-geisens-lumbricus-umweltedutainment-661"
            >„Bester Geburtstag“</a
          >!
        </p>
        <p>Themen für die Kleinen, ab 5 Jahren:</p>
        <p>
          <strong>Fantasievolle Reise ins Reich der Zwerge</strong><br />
          Auf der Suche nach den kleinen Wächtern des Waldes, machen wir uns
          ganz klein und gehen auf Entdeckungstour. Zaubersprüche und allerlei
          Rätselhaftes werden unsere Reise begleiten.
        </p>
        <p>
          <strong>Fantasievolle Reise ins Reich der Elfen</strong><br />
          Auf der Suche nach den traumhaften Wesen des Waldes, lernen wir die
          leisen Spuren der Naturwesen lesen und tauchen ein in die bezauberte
          Welt der Elfen und Feen.
        </p>
        <p>
          <strong>Vogelhochzeit</strong><br />
          Auf spielerische Art lernen wir das Leben der Vögel im Jahresrhythmus
          kennen, bauen Vogelnester und üben uns im „Eierlegen“.
        </p>
        <p>Themen für die etwas Größeren, ab 8 Jahren:</p>
        <p>
          <strong>Die wilden Wilderer</strong><br />
          Verwegene Wilderer streifen durch die Wälder, immer auf der Flucht vor
          erzürnten Jägern. Ob es ihnen gelingt sich vor den Jägern zu
          verstecken? Leise und doch „wild“ müssen sie dabei vorgehen, immer auf
          der Hut vor den Jägern.
        </p>
        <p>
          <strong>Den Wald mit allen Sinnen erleben</strong><br />
          Ein Programm, bei dem nicht nur unsere sieben Sinne gefordert und
          gefördert werden. Unsinn und Wahnsinn kommen dabei auch nicht zu kurz.
        </p>
        <p>
          <strong>Wassergeburtstag</strong><br />
          Am besten an einem kleinen Fließgewässer/Bach werden wir spielerisch
          dessen Lebewesen untersuchen, Holzschiffchen bauen und uns spannende
          Wettrennen liefern!
        </p>
        <p>
          <strong>Dämmerungsgeburtstag</strong><br />
          Wenn der Tag allmählich der dunklen Nacht weicht, ist der Wald
          besonders spannend. Mit einsetzender Dämmerung mit dem Wald
          verschmelzen, seine Besonderheiten zu diesen Stunden kennen lernen.
          Gerne auch mit anschließender Fackelwanderung (Fackeln sind im Preis
          nicht inbegriffen)!
        </p>
        <p>
          <strong>Fledermausgeburtstag</strong><br />
          Ausgestattet mit einem Fledermaus-Detektor und anderen Hilfsmitteln
          lernen wir die Welt der leisen Flieger kennen und verwandeln uns
          selbst in solche!
        </p>
        <p><strong>Neu im Programm:</strong></p>
        <p><strong>Waldgeburtstage für Erwachsene</strong></p>
        <p>
          Sie sind eingeladen zu einer Geburtstagsfeier, haben aber noch nicht
          das passende Geschenk gefunden? Wie wär es mit einem Waldgeburtstag
          für Erwachsene?<br />
          Ein Naturerlebnisprogramm der besonderen Art, das bei dem
          Geburtstagskind und seinen Gästen noch lange in Erinnerung bleiben
          wird!<br />
          Wie das Ganze von statten geht? Rufen Sie mich unverbindlich an – ich
          erkläre Ihnen gerne den Ablauf dazu!<br />
          Eine Geburtstagsüberraschung, die von Freunden/Verwandten gemeinsam
          verschenkt werden kann!
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
li {
  list-style: decimal;
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
