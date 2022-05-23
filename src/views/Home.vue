<template>
  <section class="welcome flex">
    <div class="logo"><img src="" alt="LOGO" /></div>
    <div class="welcome__content">
      <div class="section-heading">
        <h1 class="main-heading">Herzlich Willkommen!</h1>
        <p>Guido Guisens Umwelt Endutainment</p>
      </div>
      <p class="main-text">
        Alles, was Natur an Gutem schenken kann, schenkt sie uns in Fülle. Und
        dazu die Begabung, all das zu genießen! (indianische Weisheit)
      </p>
    </div>
  </section>

  <section>
    <div class="big-img">
      <img src="../assets/big-img.jpg" alt="" />
    </div>
  </section>

  <section>
    <div class="shapes">
      <div class="shape shape-1">
        <img src="../assets/slide-1.jpg" alt="" />
      </div>
      <div class="shape shape-2">
        <img src="../assets/slide-2.jpg" alt="" />
      </div>
      <div class="shape shape-3">
        <img src="../assets/slide-3.jpg" alt="" />
      </div>
      <div class="shape shape-4">
        <img src="../assets/slide-4.jpg" alt="" />
      </div>
      <div class="shape shape-2">
        <img src="../assets/slide-5.jpg" alt="" />
      </div>
      <div class="shape shape-3">
        <img src="../assets/slide-6.jpg" alt="" />
      </div>
      <div class="shape shape-4"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-4"></div>
    </div>
  </section>

  <!-- <div class="home flex flex-col">
  </div> -->
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.welcome {
  height: calc(100vh - 136px);
  padding: 5rem 3rem;
  overflow-x: hidden;
  .logo {
    flex-basis: 40%;
  }
  & > p {
    font-size: 2rem;
  }
  &__content {
    text-align: center;
    flex-basis: 60%;
  }

  .section-heading {
    margin-bottom: 3rem;
    h1 {
      font-size: 5rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }
}

.main-text {
  font-size: 1.2rem;
}

.big-img {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border-radius: 60px 60px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.shapes {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  margin: 6rem 0;
  transition: transform 0.2s;
  gap: 2rem;
  &:hover {
    // transform: translateX(-600px);
  }
}
.shape {
  width: 300px;
  aspect-ratio: 11/16;
  border: 4px solid $main-clr-bg;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.shape-1 {
  border-radius: 150px;
}
.shape-2 {
  border-radius: 150px 150px 0 0;
}
.shape-3 {
  // width: 120px;
  border-radius: 150px;
}
.shape-4 {
  border-radius: 150px;
}
</style>
