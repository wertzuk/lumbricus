/* eslint-disable */
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
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
  },
  mutations: {},
  getters: {
    filterUpcoming: (state) => {
      const date = new Date('2022-09-21T12:17:52.650Z');
      // const date = new Date();
      return state.posts.filter((post) => {
        const postDate = new Date(post.dateStart);
        return date.getTime() < postDate.getTime();
      });
    },
    filterPassed: (state) => {
      const date = new Date('2022-09-21T12:17:52.650Z');
      // const date = new Date();
      return state.posts.filter((post) => {
        const postDate = new Date(post.dateStart);
        return date.getTime() > postDate.getTime();
      });
    },
  },
  actions: {
    async getPosts() {
      // const BASE_URL = 'http://localhost/lumbricus/server/api';
      const BASE_URL =
        'https://d54700af-37fc-4fc9-b440-ef8a6480bb63.mock.pstmn.io/lumbricus/server/api';

      const response = await fetch(`${BASE_URL}/posts.php`);
      const { data } = await response.json();
      this.state.posts = data;
    },
  },

  modules: {},
});
