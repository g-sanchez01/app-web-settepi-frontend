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
        },
        {
          path: 'encuestas',
          component: () => import('../views/UsersGeneral/EncuestasView.vue')
        },
        {
          path: 'encuestas/mis-ideas',
          component: () => import('../views/UsersGeneral/Encuestas/TusIdeasNosMueven/HomeIdeasView.vue')
        },
        {
          path: 'encuestas/mis-ideas/idea-nueva',
          component: () => import('../views/UsersGeneral/Encuestas/TusIdeasNosMueven/IdeaNuevaView.vue')
        },
        {
          path: 'encuestas/mis-ideas/edit-idea/:id',
          component: () => import('../views/UsersGeneral/Encuestas/TusIdeasNosMueven/IdeaEditView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha',
          component: () => import('../views/UsersGeneral/Encuestas/Feedback/HomeFeedbackView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha/nueva-situacion',
          component: () => import('../views/UsersGeneral/Encuestas/Feedback/FeedbackNuevoView.vue')
        }
      ]
    }
  ],
})

export default router