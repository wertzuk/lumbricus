/* eslint-disable */
import { reactive, ref } from 'vue';

const state = reactive({
  events: [],
  imageSources: {
    sources1: [
      'lesungen/-0039.jpg',
      'lesungen/jph.jpg',
      'lesungen/IMG_0070.jpg',
      'lesungen/20100623_29.jpg',
    ],
    sources2: [
      'erlebnis/DSC00606.jpg',
      'erlebnis/F4,5.jpg',
      'erlebnis/Fotolia_43338950_XS.jpg',
      'erlebnis/gg30.04.0518.jpg',
      'erlebnis/IMG_0061.jpg',
    ],
    sources3: [
      'wanderungen/IMG_1.jpg',
      'wanderungen/IMG_0002.jpg',
      'wanderungen/IMG_03.jpg',
      'wanderungen/IMG_0010.jpg',
      'wanderungen/IMG_0014.jpg',
    ],
    sources4: ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg'],
  },
  modal: {
    id: 0,
    title: '',
    active: false,
  },
  menuActive: false,
  showSuccessMessage: true,
  success: {
    active: false,
    isSuccess: false,
    message: '',
  },
});

const methods = {
  async getEvents() {
    const BASE_URL =
      'https://d54700af-37fc-4fc9-b440-ef8a6480bb63.mock.pstmn.io/lumbricus/server/api';
    const response = await fetch(`${BASE_URL}/posts.php`);
    const { data } = await response.json();
    state.events = data;
  },
  toggleActive() {
    state.modal.active = !state.modal.active;
  },
  closeModal() {
    state.modal.active = false;
    document.body.style.overflowY = 'auto';
  },
  displaySuccessMessage(success, message) {
    state.success.active = true;
    state.success.isSuccess = success;
    state.success.message = message;

    setTimeout(() => {
      state.success.active = false;
    }, 10000);
  },
};

const getters = {
  filterByMonth(upcoming = true) {
    const date = new Date('2022-07-21T12:17:52.650Z');
    return state.events.filter((event) => {
      const eventDate = new Date(event.dateStart);
      if (upcoming) {
        return date.getTime() < eventDate.getTime();
      }

      return date.getTime() >= eventDate.getTime();
    });
  },
};

export default {
  state,
  methods,
  getters,
};
