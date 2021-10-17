import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Horizonte6 from '../views/Horizonte6.vue';
import Zimmer from '@/components/Zimmer.vue';
import Essen from '@/components/Essen.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/horizonte-6',
    name: 'horizonte-6',
    component: Horizonte6,
    сhildren: [
      // {
      //   path: 'zimmer',
      //   name: 'zimmer',
      //   component: Zimmer,
      // },
    ],
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
    path: '/about',
    name: 'About',
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
