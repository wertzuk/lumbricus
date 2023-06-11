<template>
  <Header />
  <router-view />
  <footer>
    <router-link to="/impressum">Impressum</router-link>
  </footer>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { provide } from 'vue';
import store from '@/store';

window.addEventListener(
  'resize',
  () => (store.state.innerWidth = window.innerWidth),
);

provide('store', store);

const token = localStorage.getItem('token');
if (token) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ token }),
  };
  fetch('http://localhost/lumbricus/server/api/verify.php', options).then(
    (response) => {
      if (response.ok) store.state.loggedIn = true;
      else {
        store.state.loggedIn = false;
      }
    },
  );
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');
@import './scss/reset';
@import './scss/utilities';
@import './scss/vars';

@font-face {
  font-family: 'Alwyn New';
  src: url('./assets/fonts/alwyn.woff2') format('woff2');
}

footer {
  padding: 2rem;
  background: rgb(16, 73, 16);
  color: black;
  text-align: center;
  margin-top: 4rem;
  a {
    color: white;
    font-size: $fs-450;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
  background: $main-clr-bg;
}

.section-heading {
  font-family: 'Alwyn New', sans-serif;
  font-size: $fs-1000;
  letter-spacing: 1px;
  color: $clr-text-400;
  font-weight: 600;
}

.main-heading {
  h1 {
    font-size: $fs-heading;
    font-weight: 300;
    color: $clr-text-400;
    font-family: 'Alwyn New', sans-serif;
  }
  h2 {
    font-size: $fs-800;
    font-weight: 300;
    color: $clr-text-500;
  }
}

.ql-toolbar.ql-snow {
  border: 1px solid rgba(0, 0, 0, 0.6) !important;
}

.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0px !important;
}

.ql-container.ql-snow {
  border: 1px solid rgba(0, 0, 0, 0.6) !important;
}
.hidden {
  display: none;
}

@media only screen and(max-width: $break-point) {
  .section-heading {
    font-size: $fs-800;
  }
}
</style>
