import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
      props: {test: true}
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
      props: {test: true}
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
