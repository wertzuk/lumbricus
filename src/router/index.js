import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Lesungen from '../views/Lesungen.vue';
import Erlebniskurse from '../views/Erlebniskurse.vue';
import Wanderungen from '../views/Wanderungen.vue';
import Geburtstage from '../views/Waldgeburtstage.vue';
import NewEvent from '../views/NewEvent.vue';
import Edit from '../views/Edit.vue';
import Gaestebuch from '../views/Gaestebuch.vue';
import About from '../views/About.vue';
import Impressum from '../views/Impressum.vue';

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
    path: '/edit',
    name: 'Edit',
    component: Edit,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
  },
  {
    path: '/gaestebuch',
    name: 'Gaestebuch',
    component: Gaestebuch,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
