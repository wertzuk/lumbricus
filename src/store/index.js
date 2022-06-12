import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {},
  actions: {
    async getPosts() {
      const BASE_URL = 'http://localhost/lumbricus/server/api';

      const response = await fetch(`${BASE_URL}/posts.php`);
      const { data } = await response.json();
      // console.log(data);
      this.state.posts = data;
    },
  },
  modules: {},
});
