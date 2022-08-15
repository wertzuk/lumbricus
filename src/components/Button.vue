<template>
  <button class="btn">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
  },
  setup(props) {
    console.log(props.title);
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.btn {
  padding: 0.4em 1.1em;
  min-width: 250px;
  font-size: $fs-500;
  color: $clr-text-400;
  background: rgb(227, 245, 227);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  &:hover {
    background: rgb(213, 245, 213);
  }
}
</style>
