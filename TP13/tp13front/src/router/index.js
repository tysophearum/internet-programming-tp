import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AdminCategory',
      name: 'AdminCategory',
      component: () => import ('../components/AdminCategory.vue')
    },
    {
      path: '/',
      name: 'Admin',
      component: () => import ('../views/Admin.vue')
    }
  ]
})

export default router
