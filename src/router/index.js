import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import SinglePoster from '../views/singlePoster.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Home/:id',
    name: 'Single Poster',
    component: SinglePoster,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router