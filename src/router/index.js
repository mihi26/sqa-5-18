import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main	Page',
      children: [
        {
          path: '/login',
          name: 'LoginView',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/menu',
          name: 'MenuPage',
          component: () => import('../views/MenuPage.vue'),
          redirect: () => {
            return {
              name: 'ScheduleRegister'
            }
          },
          children: [
            {
              path: 'schedule-register',
              name: 'ScheduleRegister',
              component: () => import('../views/ScheduleRegister.vue')
            },
            // {
            //   path: 'schedule-edit',
            //   name: 'ScheduleEdit',
            //   component: () => import('../views/ScheduleEdit.vue')
            // },
            {
              path: 'schedule-view',
              name: 'ScheduleView',
              component: () => import('../views/ScheduleView.vue')
            }
          ]
        },
        {
          path: '*',
          name: 'NotFound',
          component: () => import('../views/NotFoundView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  if (!localStorage.getItem('token') && to.name != 'LoginView') {
    return {
      name: 'LoginView'
    }
  }
})
export default router
