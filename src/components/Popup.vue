<template>
  <div class="popup" :class="{ success: isSuccess }">
    {{ title }}
    testtest
  </div>
  <div class="overlay"></div>
</template>

<script>
export default {
  props: {
    title: String,
    isSuccess: Boolean,
  },
  setup(props) {
    console.log(props.title);
    console.log(props.isSuccess);
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
}

/* .overlay {
    inset: ;
} */
</style>
