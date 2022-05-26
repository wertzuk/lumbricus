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
    <!-- <li class="event__item">

      <div class="event__date">Sonntag, 01. Mai 2022</div>
      <h2 class="event__title">
        Die Waldwerkstatt – ein Abenteuer- und Erlebnistag für Kinder + Eltern
      </h2>

      <div class="event__detail hidden">
        <div class="event__location">
          Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in
          Sulzbach
          <br />
          Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg
          1,66280 Sulzbach/Neuweiler) <br />
          ab: 10.00 Uhr<br />
          kostenfrei!
        </div>
        <div class="event__description">
          Nach dem überwältigenden Erfolg in den Vorjahren lädt auch in diesem
          Jahr die Stadt Sulzbach zu ihrer 3. Waldwerkstatt in die
          Schluchtenlandschaft am Karl-May-Weg. Verschiedene Akteure werden ein
          reichhaltiges Mitmachprogramm für Groß und Klein bereit halten. Wir
          sind dabei mit einer kleinen Wildkräuterwanderung und unserer
          Waldwerkstatt, in der wir dann „Wurzelgeister“ zum Leben erwecken!
        </div>
      </div>

      <img src="../assets/icons/icon_down.png" alt="" />
    </li>
    <li class="event__item">
      <div class="event__date">Donnerstag, 05. Mai 2022</div>
      <h2 class="event__title">
        Erlebniskurs: Brennnessel – die „heimliche“ Königin des Gartens
      </h2>
      <div class="event__detail hidden">
        <div class="event__location">
          Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in
          Sulzbach
          <br />
          Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg
          1,66280 Sulzbach/Neuweiler) <br />
          ab: 10.00 Uhr<br />
          kostenfrei!
        </div>
        <div class="event__description">
          Nach dem überwältigenden Erfolg in den Vorjahren lädt auch in diesem
          Jahr die Stadt Sulzbach zu ihrer 3. Waldwerkstatt in die
          Schluchtenlandschaft am Karl-May-Weg. Verschiedene Akteure werden ein
          reichhaltiges Mitmachprogramm für Groß und Klein bereit halten. Wir
          sind dabei mit einer kleinen Wildkräuterwanderung und unserer
          Waldwerkstatt, in der wir dann „Wurzelgeister“ zum Leben erwecken!
        </div>
      </div>
      <img
        src="../assets/icons/icon_down.png"
        alt=""
        @click.prevent="toggle($event)"
      />
    </li>
    <li class="event__item">
      <div class="event__date">Samstag, 07. Mai 2022</div>
      <h2 class="event__title">
        Wildkräuterexkursion „So schmeckt der Frühling!“
      </h2>
      <div class="event__detail hidden">
        <div class="event__location">
          Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in
          Sulzbach
          <br />
          Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg
          1,66280 Sulzbach/Neuweiler) <br />
          ab: 10.00 Uhr<br />
          kostenfrei!
        </div>
        <div class="event__description">
          Nach dem überwältigenden Erfolg in den Vorjahren lädt auch in diesem
          Jahr die Stadt Sulzbach zu ihrer 3. Waldwerkstatt in die
          Schluchtenlandschaft am Karl-May-Weg. Verschiedene Akteure werden ein
          reichhaltiges Mitmachprogramm für Groß und Klein bereit halten. Wir
          sind dabei mit einer kleinen Wildkräuterwanderung und unserer
          Waldwerkstatt, in der wir dann „Wurzelgeister“ zum Leben erwecken!
        </div>
      </div>
      <img
        src="../assets/icons/icon_down.png"
        alt=""
        @click.prevent="toggle($event)"
      />
    </li>
    <li class="event__item">
      <div class="event__date">Sonntag, 22. Mai 2022</div>
      <h2 class="event__title">Erlebniskurs „Kompostierung“</h2>
      <div class="event__detail hidden">
        <div class="event__location">
          Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in
          Sulzbach
          <br />
          Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg
          1,66280 Sulzbach/Neuweiler) <br />
          ab: 10.00 Uhr<br />
          kostenfrei!
        </div>
        <div class="event__description">
          Nach dem überwältigenden Erfolg in den Vorjahren lädt auch in diesem
          Jahr die Stadt Sulzbach zu ihrer 3. Waldwerkstatt in die
          Schluchtenlandschaft am Karl-May-Weg. Verschiedene Akteure werden ein
          reichhaltiges Mitmachprogramm für Groß und Klein bereit halten. Wir
          sind dabei mit einer kleinen Wildkräuterwanderung und unserer
          Waldwerkstatt, in der wir dann „Wurzelgeister“ zum Leben erwecken!
        </div>
      </div>
      <img
        src="../assets/icons/icon_down.png"
        alt=""
        @click.prevent="toggle($event)"
      />
    </li> -->
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
      '<p>Ruhbachtal und Zweckverband „Brennender Berg“ am Karl-May-Weg in Sulzbach<br>Treffpunkt: Eingang Waldparkplatz gegenüber Forsthaus (Sulzbacher Weg 1,66280 Sulzbach/Neuweiler)<br>ab: 10.00 Uhr<br>kostenfrei!</p>',
    ];

    return {
      toggle,
      details,
    };
  },
};
</script>

<style lang="scss"></style>
