import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Produkte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Products.vue')
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/2020/inai4a/gruppe9/'
});

export default router;
