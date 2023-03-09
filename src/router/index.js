import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainPage from '../views/MainPage.vue'
import MenuPage from '../views/MenuPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/',
          name: 'LoginView',
          component: LoginView
        },
        {
          path: '/menu',
          name: 'MenuPage',
          component: MenuPage
        }
      ]
    }
  ]
})

export default router
