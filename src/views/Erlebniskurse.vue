<template>
  <header>
    <h1 class="section-heading">Erlebniskurse</h1>
  </header>
  <div class="flex">
    <div class="image-container">
      <Carousel :images="sources2" />
    </div>
    <div class="text-container">
      <p>
        Auch nach über sieben Jahren erfreuen sich unsere
        Wildkräuter-Exkursionen immer noch großer Beliebtheit. Die festen
        Termine für Jedermann findest Du unter der Schaltfläche „Termine“.
      </p>
      <p>
        Und wenn ihr eine Gruppe von mindestens acht Personen seid, eine
        geeignete Koch-Möglichkeit habt, komme ich auch zu euch, um euch die
        abwechslungsreiche Wildkräuter-Küche näher zu bringen.
      </p>
      <p>Wie läuft das ab?</p>
      <p>
        Ganz einfach, wir vereinbaren einen Treffpunkt, es gibt eine kurze
        Einführung in die Wildkräuternutzung und schon geht’s los durch Wiesen,
        Felder, Wälder auf der Suche nach den essbaren Wildpflanzen unserer
        Heimat.
      </p>
      <p>
        Nebenbei lernen wir noch die ungenießbaren und giftigen Nachbarn kennen
        – und vor allem – wir sammeln die essbaren Kräuter, um sie nach der
        Wanderung in der Küche zu einem kompletten Menu zu verarbeiten.
      </p>
      <p>
        Ein gemeinsames Essen und eine Abschlussbesprechung gehören
        selbstverständlich dazu!
      </p>
      <p>
        Und wer schon immer mal seinen Senf dazu tun wollte, kann das an dem
        Erlebniskurs zur Senfherstellung. Nach einer theoretischen Hinführung
        zum Thema, dürfen die Teilnehmer ihren eigenen Senf anrühren und nach
        einer Verkostung selbstverständlich mit nach Hause nehmen.
      </p>
      <p>Weitere Erlebniskurse, die (fast) ganzjährig gebucht werden können:</p>
      <ul>
        <li>Essigherstellung</li>
        <li>Likörherstellung</li>
        <li>Dörren</li>
        <li>pflanzl. Brotaufstriche selbst bereitet</li>
        <li>raffinierte Salate selbst bereitet</li>
        <li>Wildkräuter = Würzkräuter?</li>
      </ul>
      <p>
        Andere Erlebniskurse biete ich auch im Bereich des Naturholz-Möbelbaus
        und Weidengeflechten an. Detaillierte Anfragen dazu beantworte ich gerne
        fernmündlich oder per Mail.
      </p>
      <p>
        Diese Erlebniskurse eignen sich auch für ein etwas anderes Betriebsfest,
        Wandertage und eignen sich gleichermaßen für Vereine (Obst- und
        Gartenbau, Landfrauen, Kirchengemeinden…) und für Jedermann!
      </p>
      <p>
        Und wenn Du mal nicht weißt, was Du einem lieben Menschen schenken
        sollst? – Wie wär’s mit einem Gutschein zur Teilnahme an einem der
        vielen Wildkräuterseminare??? Ein Geschenk, das immer gut ankommt,
        Freude bereitet und noch lange nachwirkt!
      </p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Carousel from '@/components/Carousel.vue';

const store = useStore();
const { posts } = store.state;
const { imageSources } = store.state;
const { sources2 } = imageSources;
</script>

<style lang="scss" scoped>
@import '../scss/vars';

h1 {
  text-align: center;
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

li {
  list-style: disc;
}
</style>
