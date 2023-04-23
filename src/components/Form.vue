<template>
  <form @submit.prevent="submitData">
    <div class="flex row">
      <div class="flex flex-col required">
        <label for="vorname">Vorname</label>
        <input type="text" id="vorname" v-model="firstname" required />
      </div>
      <div class="flex flex-col required">
        <label for="nachname">Nachname</label>
        <input type="text" id="nachname" v-model="lastname" required />
      </div>
    </div>
    <div class="flex row">
      <div class="flex flex-col required">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="flex flex-col required">
        <label for="tel">Telefon</label>
        <input type="tel" id="tel" v-model="tel" required />
      </div>
    </div>
    <div class="flex row">
      <div class="flex flex-col">
        <label for="adults">Anzahl Erwachsene</label>
        <input type="number" min="0" id="adults" v-model="adults" />
      </div>
      <div class="flex flex-col">
        <label for="children">Anzahl Kinder</label>
        <input type="number" min="0" id="children" v-model="children" />
      </div>
    </div>
    <div class="flex flex-col align-center">
      <label for="comment">Kommentar</label>
      <textarea
        id="comment"
        name="w3review"
        rows="4"
        cols="15"
        v-model="comment"
      ></textarea>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="submit">Anmelden</button>
    </div>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue';
const firstname = ref(null);
const lastname = ref(null);
const email = ref(null);
const tel = ref(null);
const adults = ref(null);
const children = ref(null);
const comment = ref(null);

const store = inject('store');
const { id } = store.state.modal;

async function submitData() {
  const payload = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    tel: tel.value,
    adults: adults.value,
    children: children.value,
    comment: comment.value,
    eventid: parseInt(id),
  };

  // TODO extract to separate place

  const API_URL = 'https://localhost/lumbricus/server/api/signin.php';
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  const response = await fetch(API_URL, options);
  if (response.ok) {
    store.methods.closeModal();
    store.methods.displaySuccessMessage(true, 'alles gut');
  } else {
    const { message } = await response.json();
  }
}
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

.required label::after {
  content: ' *';
  color: red;
}

.submit {
  margin-top: 1.5rem;
  padding: 0.7rem 2rem;
  background: $clr-beige;
  border: 1px solid black;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
}

textarea {
  border: 1px solid black;
  padding: 0.5rem;
  height: 90px;
  width: 90%;
  &:focus {
    outline: none;
  }
}

@media only screen and(max-width: $break-point) {
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
