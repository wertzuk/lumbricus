<template>
  <div class="wrapper">
    <section class="event-cards"></section>
    <section class="type">
      <div class="top flex">
        <div class="who">
          <h2>Für wen?</h2>
          <p>
            Unsere Vortragsveranstaltungen richten sich vor allem an Obst- und
            Gartenbauvereine, Landfrauenverbände, aber natürlich auch an andere
            interessierte Gruppen, Lehrerkollegien, Kindergartenteams und sind
            auch geeignet für die Weiterbildung in Kommunen und
            Gartenbaubetrieben.
          </p>
        </div>
        <div class="how">
          <h2>Wie?</h2>
          <p>
            Unsere Vorträge werden mit modernster Technik, praxisnah und vor
            allem kurzweilig durchgeführt.
          </p>
        </div>
      </div>
      <div class="main">
        <h3>
          Auf meine lockere, humorvolle Art und Weise werde ich jeden so in das
          jeweilige Thema einbinden können, dass ihm dieser Abend noch lange in
          Erinnerung bleibt.
        </h3>
        <p>
          Unsere Vortragsveranstaltungen richten sich vor allem an Obst- und
          Gartenbauvereine, Landfrauenverbände, aber natürlich auch an andere
          interessierte Gruppen, Lehrerkollegien, Kindergartenteams und sind
          auch geeignet für die Weiterbildung in Kommunen und
          Gartenbaubetrieben.
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
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  & div {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
  //   grid-
}

.type {
  p {
    margin-bottom: 2em;
  }
}

.how,
.who,
.main {
  padding: 2em 3em;
  font-size: $fs-400;
}
</style>
