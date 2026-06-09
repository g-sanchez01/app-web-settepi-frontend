import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
            const userResponse = await api.get('/general/home')
            console.log(userResponse.data)

            localStorage.setItem(
                'user',
                JSON.stringify(userResponse.data)
            )

            localStorage.setItem(
                'role',
                userResponse.data.rol
            )

            // redirect
            router.push('/general/home')

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

        router.push('/login')
    }

    return {
        login,
        logout,
        loading,
        error
    }
}