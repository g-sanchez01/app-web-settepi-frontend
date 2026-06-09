import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { ROLES } from '@/constants/roles.js'
import { HOME_BY_ROLE } from '@/constants/homeByRole.js'

import { getRole, isAuthenticated, logout } from '@/utils/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        guestOnly: true
      }
    },

    // GENERAL
    {
      path: '/general',
      component: () => import('../views/UsersGeneral/layouts/GeneralLayout.vue'),
      meta: {
        requiresAuth: true,
        roles: [ROLES.GENERAL]
      },

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
    },

    // GESTOR
    {
      path: '/gestor',
      component: () => import('../views/UsersGestor/layouts/GestorLayout.vue'),
      meta: {
        requiresAuth: true,
        roles: [ROLES.GESTOR]
      },

      children: [
        {
          path: '',
          redirect: '/gestor/home'
        },
        {
          path: 'home',
          component: () => import('../views/UsersGestor/HomeView.vue')

        }
      ]
    }

    
  ],
})

router.beforeEach((to, from) => {
  const authenticated = isAuthenticated()
  const role = getRole()

  // Ruta protegida
  if (to.meta.requiresAuth && !authenticated) {
    return '/login'
  }

  // Rol inválido
  if (
    authenticated &&
    !Object.values(ROLES).includes(role)
  ) {
    logout()
    return '/login'
  }

  // Usuario autenticado intentando entrar a login
  if (to.meta.guestOnly && authenticated) {
    const homeRoute = HOME_BY_ROLE[role]

    if (homeRoute && to.path !== homeRoute) {
      return homeRoute
    }

    return true
  }

  // Validar permisos
  if (
    to.meta.roles &&
    !to.meta.roles.includes(role)
  ) {
    const homeRoute = HOME_BY_ROLE[role]

    if (homeRoute && to.path !== homeRoute) {
      return homeRoute
    }

    return '/login'
  }

  return true
})

export default router