<template>
  <nav class="nav">
    <ul class="flex justify-between nav__list">
      <router-link to="/">Home</router-link>
      <router-link to="/vortragsveranstaltungen"
        >Vortragsveranstaltungen</router-link
      >
      <router-link to="/erlebniskurse">Erlebniskurse</router-link>
      <router-link to="/wanderungen">Wanderungen</router-link>
      <router-link to="/geburtstage">Waldgeburtstage</router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../scss/utiltities';
@import '../scss/vars';

.nav {
  width: 80%;
  background: $main-clr-bg;
  border-radius: 35px;
  padding-inline: 10%;
  margin: 1rem auto 0;
  &__list {
    list-style: none;
    width: 100%;
  }
  a {
    // padding: 1rem 2rem;
    color: white;
    padding: 1rem 2rem;
    // background: red;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
