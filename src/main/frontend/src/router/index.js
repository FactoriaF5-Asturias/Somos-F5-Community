import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: ()=> import('../views/SignInView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ()=> import('../views/ProfileUserView.vue')
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      path: '/mispublicaciones',
      name: 'mispublicaciones',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MisPublicacionesView.vue')
    },
    {
      path: '/elmuro',
      name: 'elmuro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ElMuroView.vue')
    }
  ]
})

export default router
