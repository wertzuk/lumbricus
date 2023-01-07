<template>
  <form>
    <div class="row flex flex-col">
      <label for="vorname">Vorname</label>
      <input type="text" id="vorname" />
    </div>
    <div class="row flex flex-col">
      <label for="nachname">Nachname</label>
      <input type="text" id="nachname" />
    </div>
    <div class="row flex flex-col">
      <label for="adults">Anzahl Erwachsene</label>
      <input type="text" id="adults" />
    </div>
    <div class="row flex flex-col">
      <label for="children">Anzahl Kinder</label>
      <input type="text" id="children" />
    </div>
    <div class="flex justify-center">
      <button type="submit" class="submit">Anmelden</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../scss/vars';
.row {
  padding: 1rem;
}
input,
.submit {
  border-radius: 0.5rem;
}
input {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.2rem 0.5rem;
}

.submit {
  margin-top: 1.5rem;
  padding: 0.7rem 2rem;
  background: $clr-beige;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.7;
  }
}
</style>
