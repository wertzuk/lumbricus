<template>
  <form>
    <div class="flex row">
      <div class="flex flex-col">
        <label for="vorname">Vorname</label>
        <input type="text" id="vorname" required />
      </div>
      <div class="flex flex-col">
        <label for="nachname">Nachname</label>
        <input type="text" id="nachname" required />
      </div>
    </div>
    <div class="flex row">
      <div class="flex flex-col">
        <label for="adults">Anzahl Erwachsene</label>
        <input type="number" min="0" id="adults" />
      </div>
      <div class="flex flex-col">
        <label for="children">Anzahl Kinder</label>
        <input type="number" min="0" id="children" />
      </div>
    </div>
    <div class="flex row">
      <div class="flex flex-col">
        <label for="email">E-Mail</label>
        <input type="email" id="email" required />
      </div>
      <div class="flex flex-col">
        <label for="comment">Kommentar (Optional)</label>
        <textarea id="comment" name="w3review" rows="4" cols="15"></textarea>
      </div>
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

form {
  margin-inline: 2rem;
}
.row {
  padding: 1rem;
  gap: 2rem;
  & > * {
    flex-basis: 50%;
  }
}
label {
  font-size: 13px;
}
input,
.submit,
textarea {
  border-radius: 0.25rem;
}
input,
textarea {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.3rem 0.5rem;
  transition: 0.2s;
  &:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }
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
  height: 90px;
  &:focus {
    outline: none;
  }
}

@media only screen and(max-width: 800px) {
  .row {
    display: block;
    width: 100%;
    padding: 0;
    & > * {
      padding-bottom: 1rem;
    }
  }
}
</style>
