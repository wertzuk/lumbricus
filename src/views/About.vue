<template>
  <div class="container flex">
    <div class="left"><img src="../assets/slide-2.jpg" alt="" /></div>
    <div class="right">
      <div class="main-heading">
        <h1>Guido Geisen</h1>
        <h2>Beruf aus Berufung</h2>
      </div>
      <ul>
        <li>Gärtner</li>
        <li>Umweltschutztechniker im Fachbereich Landschaftsökologie</li>
        <li>Umwelt- und Kräuterpädagoge</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../scss/vars';
.container {
  .left {
    width: 50%;
    height: 100vh;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
.right {
  margin-top: 4rem;
}
ul {
  margin-block: 3rem;
  font-size: $fs-500;
  color: $clr-text-400;
  opacity: 0.7;
}
</style>
