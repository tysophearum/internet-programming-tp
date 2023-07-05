import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: () => import('../views/Admin.vue'),
      children: [
        {
          path: "/Category",
          name: "Category",
          component: () => import('../components/AdminCategory.vue')
        },
        {
          path: "/Items",
          name: "Items",
          component: () => import('../components/AdminItem.vue')
        },
        {
          path: "/Products",
          name: "Products",
          component: () => import('../components/AdminProduct.vue')
        },
        {
          path: "/Product/detail",
          name: "Product Detail",
          component: () => import('../components/AdminProductDetail.vue')
        }
      ]
    },
    {
      path: "/",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/home",
      name: "Home",
      component: () => import('../views/Home.vue')
    },
    
  ]
})

export default router
