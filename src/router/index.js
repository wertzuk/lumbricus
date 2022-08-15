import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Vortragsveranstaltungen from '../views/Vortragsveranstaltungen.vue';
import Erlebniskurse from '../views/Erlebniskurse.vue';
import Wanderungen from '../views/Wanderungen.vue';
import Geburtstage from '../views/Waldgeburtstage.vue';
import NewEvent from '../views/NewEvent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vortragsveranstaltungen',
    name: 'Vortragsveranstaltungen',
    component: Vortragsveranstaltungen,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
