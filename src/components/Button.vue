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
.btn {
  border: 1px solid black;
  padding: 0.4em 1.1em;
}
</style>
