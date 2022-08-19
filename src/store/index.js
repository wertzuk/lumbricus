import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {},
  getters: {
    filterByMonths: (state) => (month) => {
      console.log(month);
      return state.posts.filter((post) => {
        const comp = new Date(post.dateStart);
        return comp.getMonth() === month;
      });
    },
  },
  actions: {
    async getPosts() {
      const BASE_URL = 'http://pascal-barzen.de/lumbricus/api';

      const response = await fetch(`${BASE_URL}/posts.php`);
      const { data } = await response.json();
      this.state.posts = data;
    },
  },

  modules: {},
});
