import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Home } from '../views/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomeView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        // {
        //   path: '/movie',
        //   name: 'movie',
        //   component: () => import('../views/MovieView.vue')
        // },
        // {
        //   path: '/upcoming',
        //   name: 'upcoming', 
        //   component: () => import('../views/UpcomingView.vue')
        // },
        // {
        //   path: '/genre',
        //   name: 'genre',
        //   component: () => import('../views/GenreView.vue')
        // }
      ]
    }
  ]
})

export default router
