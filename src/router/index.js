import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main	Page',
      component: MainPage,
      children: [
        {
          path: '/',
          name: 'LoginView',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/menu',
          name: 'MenuPage',
          component: () => import('../views/MenuPage.vue')
        },
        {
          path: '/menu/register',
          name: 'RegisterTimetable',
          component: () => import('../views/RegisterTimetable.vue')
        }
      ]
    }
  ]
})

export default router
