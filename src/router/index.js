import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
// main views of application
import Horizonte6 from '../views/Horizonte6.vue';
import English from '@/views/English.vue';
// subviews of english
import LevelTests from '@/views/LevelTests.vue';
import SpeakoutElementary from '@/components/english/SpeakoutElementary.vue';
import Spotlight from '../views/Spotlight.vue';
import EnGrammar from '../views/english/Grammar.vue';
// en grammar subviews
import EnTenses from '../views/english/Tenses.vue';
import AllEnTenses from '../components/english/AllTenses.vue';
import PresentSimple from '@/components/english/PresentSimple.vue';
import ToBeInPresentSimple from '../components/english/ToBeInPresentSimple.vue';
// personal accounts
import Vlad from '@/views/accounts/Vlad.vue';
import Masha from '@/views/accounts/Masha.vue';
// vlad subviews
import Lesson1 from '@/components/lessons/pre-intermediate/Lesson1.vue';
import Lesson2 from '@/components/lessons/pre-intermediate/Lesson2.vue';
import Lesson3 from '../components/lessons/pre-intermediate/Lesson3.vue';

// horizonte 6 subviews
import Zimmer from '../views/Zimmer.vue';
import Essen from '../views/Essen.vue';
// ege subviews
import Dictionaries from '@/views/Dictionaries.vue';
import LessonMaterials from '@/views/LessonMaterials.vue';
import HWTasks from '../views/HWTasks.vue';
import LessonReports from '@/views/LessonReports.vue';
import LessonPlans from '../views/LessonPlans.vue';

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/horizonte-6',
    name: 'horizonte-6',
    component: Horizonte6,
  },
  {
    path: '/english',
    name: 'english',
    component: English,
  },
  // subviews of english
  {
    path: '/level-tests',
    name: 'level-tests',
    component: LevelTests,
  },
  {
    path: '/grammar',
    name: 'en-grammar',
    component: EnGrammar,
  },
  {
    path: '/speakout-elementary',
    name: 'speakout-elementary',
    component: SpeakoutElementary,
  },
  {
    path: '/spotlight',
    name: 'spotlight',
    component: Spotlight,
  },
  {
    path: '/vlad',
    name: 'vlad',
    component: Vlad,
    children: [
      {
        path: 'lesson-1',
        name: 'lesson-1',
        component: Lesson1,
      },
      {
        path: 'lesson-2',
        name: 'lesson-2',
        component: Lesson2,
      },
      {
        path: 'lesson-3',
        name: 'lesson-3',
        component: Lesson3,
      },
    ],
  },
  {
    path: '/masha',
    name: 'masha',
    component: Masha,
  },
  // masha subviews
  {
    path: '/dictionaries',
    name: 'masha-dictionaries',
    component: Dictionaries,
  },
  {
    path: '/lesson-materials',
    name: 'lesson-materials',
    component: LessonMaterials,
  },
  {
    path: '/homework',
    name: 'hw-tasks',
    component: HWTasks,
  },
  {
    path: '/lesson-reports',
    name: 'lesson-reports',
    component: LessonReports,
  },
  {
    path: '/lesson-plans/:name',
    name: 'lesson-plans',
    component: LessonPlans,
  },
  // en grammar subviews
  {
    path: '/tenses',
    name: 'en-tenses',
    component: EnTenses,
    children: [
      {
        path: 'all-tenses',
        name: 'all-en-tenses',
        component: AllEnTenses,
      },
      {
        path: 'present-simple',
        name: 'present-simple',
        component: PresentSimple,
        children: [
          {
            path: 'to-be-in-present-simple',
            name: 'to-be-in-present-simple',
            component: ToBeInPresentSimple,
          },
        ],
      },
    ],
  },
  // {
  //   path: 'en-exercises',
  //   name: 'en-exercises',
  //   component: EnExercises,
  // },
  // horizonte subviews
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
