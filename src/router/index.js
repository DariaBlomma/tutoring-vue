import { createRouter, createWebHistory } from 'vue-router';
import Contents from '../views/Contents.vue';
import Horizonte6 from '../views/Horizonte6.vue';
import EGE from '../views/EGE.vue';

import Zimmer from '../views/Zimmer.vue';
import Essen from '../views/Essen.vue';
import Dictionaries from '@/views/Dictionaries.vue';
import EGELessonMaterials from '@/views/EGELessonMaterials.vue';
import HWTasks from '../views/HWTasks.vue';

const routes = [
  {
    path: '',
    name: 'home',
    component: Contents,
  },
  {
    path: '/horizonte-6',
    name: 'horizonte-6',
    component: Horizonte6,
  },
  {
    path: '/ЕГЭ',
    name: 'ege',
    component: EGE,
  },
  {
    path: '/zimmer',
    name: 'zimmer',
    component: Zimmer,
  },
  {
    path: '/essen',
    name: 'essen',
    component: Essen,
  },
  {
    path: '/dictionaries',
    name: 'ege-dictionaries',
    component: Dictionaries,
  },
  {
    path: '/lesson-materials',
    name: 'ege-lesson-materials',
    component: EGELessonMaterials,
  },
  {
    path: '/homework',
    name: 'hw-tasks',
    component: HWTasks,
  },
  {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
