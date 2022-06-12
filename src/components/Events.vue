<template>
  <h1 class="section-heading">Aktuelle Veranstaltungen</h1>
  <ul class="events">
    <Event
      date="Sonntag, 01. Mai 2022"
      title="Die Waldwerkstatt – ein Abenteuer- und Erlebnistag für Kinder + Eltern"
      :detailHTML="details[0]"
    />
    <Event
      date="Donnerstag, 05. Mai 2022"
      title="Erlebniskurs: Brennnessel – die „heimliche“ Königin des Gartens"
      :detailHTML="details[0]"
    />
    <Event
      date="Samstag, 07. Mai 2022"
      title="Wildkräuterexkursion „So schmeckt der Frühling!"
      :detailHTML="details[0]"
    />
    <Event
      date="Donnerstag, 19. Mai 2022"
      title="Erlebniskurs „Kompostierung“"
      :detailHTML="details[0]"
    />
  </ul>
</template>

<script>
import Event from '@/components/Event.vue';

export default {
  components: {
    Event,
  },
  setup() {
    // let detailactive = false;
    function toggle(e) {
      console.log(e.target.parentNode);
      e.target.classList.toggle('flip');
      e.target.previousSibling.classList.toggle('hidden');
    }

    const details = [
      '<p>Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in Sulzbach<br>Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg 1,66280 Sulzbach/Neuweiler)<br>ab: 10.00 Uhr<br>kostenfrei!</p><br>„Hilfe, die Ostereier sind weg!“ Der kleine Osterhase Hoppel hat seine bunten Eier verloren, die er doch zu den Kindern bringen wollte. Ob ihr ihm wohl helfen könnt die Eier im Urwald wieder zu finden? Bei dieser kleinen Wanderung zum Osterfeste dürfen sich die Teilnehmer nicht nur an Geschichten und Gedichten zu diesem alten Fest erfreuen, sie erfahren auch viel über die Mythologie der Kelten, die dieses Fest ebenso feierten, wie später die Christen.',
    ];

    return {
      toggle,
      details,
    };
  },
};
</script>

<style lang="scss"></style>
