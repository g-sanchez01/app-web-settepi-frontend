import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/general',
      component: () => import('../views/UsersGeneral/layouts/GeneralLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/general/home'
        },
        {
          path: 'home',
          component: () => import('../views/UsersGeneral/HomeView.vue')

        },
        {
          path: 'perfil',
          component: () => import('../views/UsersGeneral/MiPerfilView.vue')
        }
      ]
    }
  ],
})

export default router