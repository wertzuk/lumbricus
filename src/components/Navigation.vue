<template>
  <nav class="nav flex justify-between align-center">
    <ul class="flex justify-between nav__list">
      <li><router-link to="/">Home</router-link></li>
      <li @click="listActive = !listActive">
        <router-link to="/">Programm</router-link>
        <img src="../assets/icons/icon-arrow.svg" alt="" class="icon-down" />
        <ul class="program" :class="{ hidden: !listActive }">
          <li>
            <router-link to="/vortragsveranstaltungen"
              >Vortragsveranstaltungen</router-link
            >
          </li>
          <li><router-link to="/erlebniskurse">Erlebniskurse</router-link></li>
          <li><router-link to="/wanderungen">Wanderungen</router-link></li>
          <li>
            <router-link to="/geburtstage" class="last"
              >Waldgeburtstage</router-link
            >
          </li>
        </ul>
      </li>
      <li><router-link to="/">Über uns</router-link></li>
      <li><router-link to="/">Kontakt</router-link></li>
    </ul>
    <div>
      <button>Login</button>
      <input type="text" class="search" placeholder="Suche..." />
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const listActive = ref(false);

    return {
      listActive,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/utiltities';
@import '../scss/vars';

.nav {
  width: 100%;
  &__list {
    gap: 4rem;
    list-style: none;
    height: 100%;

    & > li {
      position: relative;
      padding: $padding-header;
      // & > a:hover {
      //   &::after {
      //     transform: scale(1);
      //   }
      // }
    }
  }

  a {
    color: $clr-text-400;
    text-transform: uppercase;
    font-size: $fs-500;
    position: relative;
    &::after {
      content: '';
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      background: black;
      transition: transform 0.2s;
      transform-origin: left;
      transform: scale(0);
    }
  }

  .icon-down {
    margin-left: 1rem;
    transform: rotate(90deg);
  }
}

.search {
  border: 1px solid $clr-text-400;
  color: $clr-text-400;
  border-radius: 15px;
  padding: 0.4em 1em;
  max-height: 35px;
  outline: none;
}

.program {
  position: absolute;
  border: $border-nav;
  border-radius: 18px;
  top: 1rem;
  left: 0;
  right: 0;
  li:first-child {
    margin-top: 5rem;
  }
  li {
    border-bottom: $border-nav;
    padding: 1rem;

    &:last-child {
      border: none;
    }
  }
  a {
    font-size: $fs-small;
    text-transform: none;
    padding-bottom: 0.5rem;
  }
}
</style>
