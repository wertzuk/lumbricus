import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useBreakpoints() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));
  console.log(windowWidth.value);

  const width = computed(() => windowWidth.value);

  return { width };
}
