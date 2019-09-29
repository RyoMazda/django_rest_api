import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/book',
      name: 'book',
      component: () => import(/* webpackChunkName: "about" */ './views/Book.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];
  const token = localStorage.getItem('api_token');
  console.log('to.path=', to.path);

  if (!to.matched.some(record => record.meta.requiresAuth)) {
    next();
  } else {
    if (isLoggedIn) {
      next();
    } else {
      // When Login is necessary but User isn't
      if (token != null) {
        // store.dispatch('auth/reload');
        next();
      } else {
        forceToLoginPage(to, from, next);
      }
    }
  }
});

function forceToLoginPage(to, from, next): void {
  next({
    path: '/book',
    query: { next: to.fullPath },
  });
}


export default router;
