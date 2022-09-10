<template>
  <div class="card">
    <h1 class="card-heading">{{ title }}</h1>
    <div class="dates">{{ dateStr }}</div>
    <!-- <div v-html="detailHTML"></div> -->
  </div>
</template>

<script>
// import { ref } from 'vue';
import { transformDates } from '@/utils/utils';

export default {
  props: ['title', 'startDate', 'endDate', 'detailHTML'],
  setup(props) {
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const dateStr = transformDates(startDate, endDate);
    return {
      dateStr,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/vars';
.card {
  text-align: center;
  padding: 1.5em 1em;
  border-radius: 15px;
  background: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  //   max-width: 30rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  h1 {
    font-family: 'Alwyn New', sans-serif;
    font-size: $fs-600;
    letter-spacing: 1px;
    color: $clr-text-400;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
  }

  .dates {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding-top: 1.5rem;
  }
}

.card-heading {
  //   font-size: 2.8rem;
}
</style>
