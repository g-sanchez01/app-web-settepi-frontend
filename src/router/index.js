import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { ROLES } from '@/constants/roles.js'
import { getMaintenanceStatus } from '@/services/system.js'
import { HOME_BY_ROLE } from '@/constants/homeByRole.js'

import { getRole, isAuthenticated, logout } from '@/utils/auth.js'

/* =========================
   CACHE MANTENIMIENTO
========================= */
let maintenanceCache = null
let lastCheck = 0

const checkMaintenance = async () => {
  const now = Date.now()

  // cache 10 segundos
  if (maintenanceCache !== null && now - lastCheck < 10000) {
    return maintenanceCache
  }

  const { maintenance } = await getMaintenanceStatus()

  maintenanceCache = maintenance
  lastCheck = now

  return maintenance
}

console.log(import.meta.env.VITE_MAINTENANCE)

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

        },
        {
          path: 'encuestas',
          component: () => import('../views/UsersGestor/EncuestasView.vue')

        },
        {
          path: 'perfil',
          component: () => import('../views/UsersGestor/MiPerfilView.vue')
        },
        {
          path: 'encuestas/ideas',
          component: () => import('../views/UsersGestor/Encuestas/TusIdeasNosMueven/HomeIdeasView.vue')
        },
        {
          path: 'encuestas/ideas/detalle/:id',
          component: () => import('../views/UsersGestor/Encuestas/TusIdeasNosMueven/IdeaDetalleView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha',
          component: () => import('../views/UsersGestor/Encuestas/Feedback/HomeFeedbackView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha/detalle/:id',
          component: () => import('../views/UsersGestor/Encuestas/Feedback/FeedbackDetalleView.vue')
        },
      ]
    },

    // LIDER
    {
      path: '/lider',
      component: () => import('../views/UsersLider/layouts/LiderLayout.vue'),
      meta: {
        requiresAuth: true,
        roles: [ROLES.LIDER]
      },

      children: [
        {
          path: '',
          redirect: '/lider/home'
        },
        {
          path: 'home',
          component: () => import('../views/UsersLider/HomeView.vue')

        },
        {
          path: 'encuestas',
          component: () => import('../views/UsersLider/EncuestasView.vue')

        },
        {
          path: 'encuestas/mis-ideas',
          component: () => import('../views/UsersLider/Encuestas/TusIdeasNosMueven/HomeIdeasView.vue')
        },
        {
          path: 'encuestas/mis-ideas/idea-nueva',
          component: () => import('../views/UsersLider/Encuestas/TusIdeasNosMueven/IdeaNuevaView.vue')
        },
         {
          path: 'encuestas/mis-ideas/edit-idea/:id',
          component: () => import('../views/UsersLider/Encuestas/TusIdeasNosMueven/IdeaEditView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha',
          component: () => import('../views/UsersLider/Encuestas/Feedback/HomeFeedbackView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha/nueva-situacion',
          component: () => import('../views/UsersLider/Encuestas/Feedback/FeedbackNuevoView.vue')
        },
        {
          path: 'mi-equipo',
          component: () => import('../views/UsersLider/MiEquipoView.vue')
        },
        {
          path: 'mi-equipo/asignacion/:numero_nomina',
          component: () => import('../views/UsersLider/MiEquipo/AsignacionFormularioView.vue')
        },
        {
          path: 'perfil',
          component: () => import('../views/UsersLider/MiPerfilView.vue')
        },
      ]
    },

    // ADMIN
    {
      path: '/admin',
      component: () => import('../views/UserAdmin/layouts/AdminLayout.vue'),
      meta: {
        requiresAuth: true,
        roles: [ROLES.ADMIN]
      },

      children: [
        {
          path: '',
          redirect: '/admin/home'
        },
        {
          path: 'home',
          component: () => import('../views/UserAdmin/HomeView.vue')

        },
        {
          path: 'encuestas',
          component: () => import('../views/UserAdmin/EncuestasView.vue')

        },
        {
          path: 'encuestas/ideas',
          component: () => import('../views/UserAdmin/Encuestas/TusIdeasNosMueven/HomeIdeasView.vue')
        },
        {
          path: 'encuestas/ideas/detalle/:id',
          component: () => import('../views/UserAdmin/Encuestas/TusIdeasNosMueven/IdeaDetalleView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha',
          component: () => import('../views/UserAdmin/Encuestas/Feedback/HomeFeedbackView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha/detalle/:id',
          component: () => import('../views/UserAdmin/Encuestas/Feedback/FeedbackDetalleView.vue')
        },
        {
          path: 'mi-equipo',
          component: () => import('../views/UserAdmin/MiEquipoView.vue')
        },
        {
          path: 'mi-equipo/asignacion/:numero_nomina',
          component: () => import('../views/UserAdmin/MiEquipo/AsignacionFormularioView.vue')
        },
        {
          path: 'empleado-mes',
          component: () => import('../views/UserAdmin/WeekEmployeeView.vue')
        },
        {
          path: 'empleado-mes/asignacion/:id',
          component: () => import('../views/UserAdmin/WeekEmployeeFormView.vue')
        },
        {
          path: 'perfil',
          component: () => import('../views/UserAdmin/MiPerfilView.vue')
        },
      ]
    },

    // ADMIN_DEV
    {
      path: '/admin-dev',
      component: () => import('../views/UserAdminDev/layouts/AdminDevLayout.vue'),
      meta: {
        requiresAuth: true,
        roles: [ROLES.ADMIN_DEV]
      },

      children: [
        {
          path: '',
          redirect: '/admin-dev/home'
        },
        {
          path: 'home',
          component: () => import('../views/UserAdminDev/HomeView.vue')

        },
        {
          path: 'encuestas',
          component: () => import('../views/UserAdminDev/EncuestasView.vue')

        },
        {
          path: 'encuestas/ideas',
          component: () => import('../views/UserAdminDev/Encuestas/TusIdeasNosMueven/HomeIdeasView.vue')
        },
        {
          path: 'encuestas/ideas/detalle/:id',
          component: () => import('../views/UserAdminDev/Encuestas/TusIdeasNosMueven/IdeaDetalleView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha',
          component: () => import('../views/UserAdminDev/Encuestas/Feedback/HomeFeedbackView.vue')
        },
        {
          path: 'encuestas/settepi-te-escucha/detalle/:id',
          component: () => import('../views/UserAdminDev/Encuestas/Feedback/FeedbackDetalleView.vue')
        },
        {
          path: 'mi-equipo',
          component: () => import('../views/UserAdminDev/MiEquipoView.vue')
        },
        {
          path: 'mi-equipo/asignacion/:numero_nomina',
          component: () => import('../views/UserAdminDev/MiEquipo/AsignacionFormularioView.vue')
        },
        {
          path: 'empleado-mes',
          component: () => import('../views/UserAdminDev/WeekEmployeeView.vue')
        },
        {
          path: 'empleado-mes/asignacion/:id',
          component: () => import('../views/UserAdminDev/WeekEmployeeFormView.vue')
        },
        {
          path: 'usuarios',
          component: () => import('../views/UserAdminDev/UsuariosView.vue')
        },
        {
          path: 'usuarios/agregar-usuario',
          component: () => import('../views/UserAdminDev/Usuarios/UsuarioNuevoFormView.vue')
        },
        {
          path: 'usuarios/detalle/:numero_nomina',
          component: () => import('../views/UserAdminDev/Usuarios/UsuarioDetalleView.vue')
        },
        {
          path: 'perfil',
          component: () => import('../views/UserAdminDev/MiPerfilView.vue')
        },
      ]
    },

    // Mantenimiento 403
    {
      path: '/maintenance', 
      name: 'Maintenance',
      component: () => import('../views/errors/MaintenanceView.vue')
    },

    // Pagina no encontrada 404
    {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/errors/NotFoundView.vue')
  }

    
  ],
})

/* =========================
   GUARD GLOBAL
========================= */
router.beforeEach(async (to, from) => {

  /* 🛠️ Mantenimiento primero */
  try {
    const maintenance = await checkMaintenance()

    if (maintenance && to.path !== '/maintenance') {
      return '/maintenance'
    }
  } catch (error) {
    console.error('Error checking maintenance:', error)
  }

  if (to.path === '/maintenance') {
    return true
  }

  const authenticated = isAuthenticated()
  const role = getRole()

  /* 🔐 auth */
  if (to.meta.requiresAuth && !authenticated) {
    return '/login'
  }

  if (
    authenticated &&
    !Object.values(ROLES).includes(role)
  ) {
    logout()
    return '/login'
  }

  if (to.meta.guestOnly && authenticated) {
    const homeRoute = HOME_BY_ROLE[role]
    return homeRoute || true
  }

  /* 🧾 roles */
  if (
    to.meta.roles &&
    !to.meta.roles.includes(role)
  ) {
    const homeRoute = HOME_BY_ROLE[role]
    return homeRoute || '/login'
  }

  return true
})

export default router