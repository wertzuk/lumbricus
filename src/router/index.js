import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Lesungen from '../views/Lesungen.vue';
import Erlebniskurse from '../views/Erlebniskurse.vue';
import Wanderungen from '../views/Wanderungen.vue';
import Geburtstage from '../views/Waldgeburtstage.vue';
import NewEvent from '../views/NewEvent.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lesungen',
    name: 'Lesungen',
    component: Lesungen,
  },
  {
    path: '/erlebniskurse',
    name: 'Erlebniskurse',
    component: Erlebniskurse,
  },
  {
    path: '/wanderungen',
    name: 'Wanderungen',
    component: Wanderungen,
  },
  {
    path: '/geburtstage',
    name: 'Geburtstage',
    component: Geburtstage,
  },
  {
    path: '/event',
    name: 'NewEvent',
    component: NewEvent,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
