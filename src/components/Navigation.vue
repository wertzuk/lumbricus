<template>
  <nav class="nav">
    <ul class="flex justify-between nav__list">
      <router-link to="/home">Home</router-link>
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

.nav {
  position: absolute;
  top: 120%;
  left: 10%;
  right: 10%;
  background: rgb(15, 119, 15);
  border-radius: 35px;
  padding-inline: 10%;
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
