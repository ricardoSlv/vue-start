import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

import Main from '@/views/Main/Index.vue';
import Default from '@/views/Main/Default.vue';

import TestGen from '@/views/Main/TestGen.vue';
import Tests from '@/views/Main/Tests.vue';

import Quizz from '@/views/Main/Quizz.vue';
import Results from '@/views/Main/Results.vue';

import Shooter from '@/views/Main/Shooter.vue';
import Paint from '@/views/Main/Paint.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default,
      },
      {
        path: 'testgen',
        name: 'TestGen',
        component: TestGen,
      },
      {
        path: 'tests',
        name: 'Tests',
        component: Tests,
      },
      {
        path: 'quizz',
        name: 'Quizz',
        component: Quizz,
      },
      {
        path: 'results',
        name: 'Results',
        component: Results,
      },
      {
        path: 'paint',
        name: 'Paint',
        component: Paint,
      },
      {
        path: 'shooter',
        name: 'Shooter',
        component: Shooter,
      },
    ],
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
