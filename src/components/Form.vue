<template>
  <form>
    <div class="row flex flex-col">
      <label for="vorname">Vorname</label>
      <input type="text" id="vorname" required />
    </div>
    <div class="row flex flex-col">
      <label for="nachname">Nachname</label>
      <input type="text" id="nachname" required />
    </div>
    <div class="row flex flex-col">
      <label for="adults">Anzahl Erwachsene</label>
      <input type="text" id="adults" />
    </div>
    <div class="row flex flex-col">
      <label for="children">Anzahl Kinder</label>
      <input type="text" id="children" />
    </div>
    <div class="row flex flex-col">
      <label for="email">E-Mail</label>
      <input type="email" id="email" required />
    </div>
    <div class="row flex flex-col">
      <label for="comment">Kommentar (Optional)</label>
      <textarea id="comment" name="w3review" rows="4" cols="50">
At w
</textarea
      >
    </div>
    <div class="flex justify-center">
      <button type="submit" class="submit">Anmelden</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  border: 1px solid black;
  outline: none;
  // box-shadow: 0 0 8px 2px  rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.7;
  }
}

textarea {
  border: 1px solid black;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
}
</style>
