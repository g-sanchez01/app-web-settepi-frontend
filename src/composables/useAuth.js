import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { HOME_BY_ROLE } from '@/constants/homeByRole'

import api from '@/services/api'

export function useAuth() {

    const router = useRouter()

    const loading = ref(false)
    const error = ref('')

    // =========================
    // 🔐 LOGIN
    // =========================
    const login = async (formData) => {

        try {

            loading.value = true
            error.value = ''

            // Tiempo mínimo visible del spinner
            const minimumDelay = new Promise(resolve =>
                setTimeout(resolve, 1800)
            )

            // Peticion login
            const loginRequest  = await api.post(
                '/auth/login',
                formData
            )

            // Espera ambos al mismo tiempo
            const [response] = await Promise.all([
                loginRequest,
                minimumDelay
            ])

            // guardar token
            localStorage.setItem(
                'token',
                response.data.access_token
            )

            // obtener usuario
            const userResponse = await api.get('/auth/me')

            const user = userResponse.data
            const role = user.rol

            localStorage.setItem(
                'user',
                JSON.stringify(user)
            )

            localStorage.setItem(
                'role',
                role
            )

            const homeRoute = HOME_BY_ROLE[role]

            if (homeRoute) {
                router.push(homeRoute)
            } else {
                console.error('Rol no reconocido:', role)
                router.push('/login')
            }

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al iniciar sesión'

        } finally {

            loading.value = false
        }
    }

    // =========================
    // 🚪 LOGOUT
    // =========================
    const logout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('role')

        router.push('/login')
    }

    return {
        login,
        logout,
        loading,
        error
    }
}