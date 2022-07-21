import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import EmptyRouterView from '../views/EmptyRouterView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: () => import('../views/Youtube.vue')
  },
  {
    path: '/fb-Like',
    name: 'FbLike',
    component: () => import('../views/FbLike.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
