import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Corpora from '../views/Corpora.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/corpora',
    name: 'Corpora',
    component: Corpora
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/trends',
  name: 'Trends',
  component: () => import(/* webpackChunkName: "trends" */ '../views/Trends.vue')
  },
  {
  path: '/profile',
  name: 'Profile',
  component: () => import(/* webpackChunkName: "trends" */ '../views/Profile.vue')
  },
  {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
  path: '/register',
  name: 'Register',
  component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
