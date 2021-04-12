import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const routes: Array<RouteConfig & { meta: { title: string, menu?: boolean } & object }> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Página Principal',
    }
  },
  {
    path: '/favorite_dogs',
    name: 'home',
    component: () => import('@/views/FavoritesDogs.vue'),
    meta: {
      title: 'Cachorros favoritos',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
