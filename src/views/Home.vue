<template>
  <div class="home flex flex-col">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  // display: flex;
  // justify-content: center;
  // gap: 2rem;
}
.shape {
  width: 100px;
  height: 140px;
  border: 3px solid black;
  background-image: url('../assets/test.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  img {
    object-fit: cover;
  }
}

.shape-1 {
  border-radius: 50px;
}
.shape-2 {
  border-radius: 50px 50px 0 0;
}
.shape-3 {
  width: 120px;
  border-radius: 50px;
}
.shape-4 {
  border-radius: 50px;
}
</style>
