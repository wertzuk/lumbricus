<template>
  <nav>
    <ul class="flex">
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
</style>
