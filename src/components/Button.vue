<template>
  <button class="btn">{{ title }}</button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.btn {
  padding: 0.4em 1.1em;
  min-width: 350px;
  font-size: $fs-500;
  color: $clr-text-400;
  background: $clr-beige;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  border-radius: 8px;
  &:hover {
    background: rgb(213, 245, 213);
  }
}

@media only screen and(max-width: 800px) {
  .btn {
    min-width: 100px;
    font-size: $fs-400;
  }
}
</style>
