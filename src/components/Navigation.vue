<template>
  <nav
    class="nav flex justify-between align-center"
    v-if="store.state.menuActive || width > 800"
  >
    <ul class="flex justify-between nav__list">
      <NavigationBasicItem route="/">Home</NavigationBasicItem>
      <li @click.stop="listActive = !listActive">
        <span to="/">Programm</span>
        <img src="../assets/icons/icon-arrow.svg" alt="" class="icon-down" />
        <ul class="program" :class="{ hidden: !listActive }">
          <NavigationNestedItem route="/lesungen"
            >Lesungen</NavigationNestedItem
          >

          <NavigationNestedItem route="/erlebniskurse"
            >Erlebniskurse</NavigationNestedItem
          >
          <NavigationNestedItem route="/wanderungen"
            >Wanderungen</NavigationNestedItem
          >
          <NavigationNestedItem route="/geburtstage"
            >Waldgeburtstage</NavigationNestedItem
          >
        </ul>
      </li>
      <NavigationBasicItem route="/about">Über uns</NavigationBasicItem>
      <!-- <NavigationBasicItem route="/">Gästebuch</NavigationBasicItem> -->
      <li
        class="login"
        v-if="!store.state.loggedIn"
        @click="store.state.loginActive = true"
      >
        <button>Login</button>
      </li>
      <li class="login" v-else>
        <button>Logout</button>
      </li>
      <Login />
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import NavigationBasicItem from '@/components/NavigationBasicItem.vue';
import NavigationNestedItem from '@/components/NavigationNestedItem.vue';
import Login from '@/components/Login.vue';

const store = inject('store');
const listActive = ref(false);
document.body.addEventListener('click', () => {
  listActive.value = false;
});
const li = document.querySelectorAll('li');

const width = computed(() => store.state.innerWidth);
</script>

<style lang="scss" scoped>
@import '../scss/utilities';
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
    }
  }

  a,
  span {
    color: $clr-text-400;
    text-transform: uppercase;
    font-size: $fs-450;
    position: relative;
    cursor: pointer;
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
    transform: rotate(90deg);
    margin: 0 1rem 6px;
  }
}

.program {
  position: absolute;
  border: $border-nav;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 100;
  overflow: hidden;
}

.search,
.btn-login {
  padding: 0.4em 1em;
  max-height: 35px;
  outline: none;
  min-width: 10rem;
}

.btn-login {
  background: $clr-text-400;
  color: white;
}

.login {
  position: absolute !important;
  display: block;
  top: 0.6rem;
  right: 1rem;
}

@media only screen and(max-width: 800px) {
  .nav {
    all: unset;
    * {
      all: unset;
    }
    position: fixed;
    inset: 0;
    background: white;
    z-index: 100;
    top: 67px;
    &__list {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      & > li {
        position: relative;
        padding: 0.5rem 1.3rem;
      }
    }
  }

  .login {
    top: unset;
    bottom: 1rem;
    left: 1rem;
  }
}
</style>
