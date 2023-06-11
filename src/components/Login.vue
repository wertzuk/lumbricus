<template>
  <div class="container" v-if="active">
    <header>
      <img
        src="../assets/icons/icon_close.svg"
        alt=""
        @click="store.state.loginActive = false"
      />
    </header>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';

const store = inject('store');

const username = ref('');
const password = ref('');

const active = computed(() => store.state.loginActive);

const submitForm = async () => {
  const API_URL = 'https://localhost/lumbricus/server/api/login.php';
  const payload = {
    username: username.value,
    password: password.value,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  };

  const response = await fetch(API_URL, options);
  if (!response.ok) {
    store.methods.displaySuccessMessage(false, 'Login fehlgeschlagen');
  } else {
    store.methods.displaySuccessMessage(true, 'Erfolgreich angemeldet');
    const { token } = await response.json();
    localStorage.setItem('token', token);
    store.state.loggedIn = true;
    store.state.loginActive = false;
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1rem;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  padding: 0 4rem 1rem;
}

header {
  position: relative;
  height: 20px;
  img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    transform: scale(0.8);
    cursor: pointer;
  }
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: block;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
}
</style>
