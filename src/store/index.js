/* eslint implicit-arrow-linebreak: ["error", "beside"] */
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
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
  },
  actions: {
    async getPosts() {
      const BASE_URL = 'https://lumbricus.herokuapp.com/server/api';

      // const BASE_URL = 'http://localhost/lumbricus/server/api';

      const response = await fetch(`${BASE_URL}/posts.php`);
      const { data } = await response.json();
      this.state.posts = data;
    },
  },

  modules: {},
});
