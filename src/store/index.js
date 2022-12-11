/* eslint implicit-arrow-linebreak: ["error", "beside"] */
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
    imageSources: {
      sources1: [
        'slide-1.jpg',
        'slide-2.jpg',
        'slide-3.jpg',
        'slide-4.jpg',
        'slide-5.jpg',
        'slide-6.jpg',
      ],
      sources2: ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg'],
      sources3: ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg'],
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
      const BASE_URL = 'http://localhost/lumbricus/server/api';
      // const BASE_URL = 'https://lumbricus.herokuapp.com/server/api';

      const response = await fetch(`${BASE_URL}/posts.php`);
      const { data } = await response.json();
      this.state.posts = data;
    },
  },

  modules: {},
});
