import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'

// SERVER
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Agregar token a cada petición
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

// Detectar token expirado o no válido
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !sessionExpired) {
            sessionExpired = true

            // Eliminar datos de la sesión
            localStorage.removeItem('token')
            localStorage.removeItem('usuario')

            // Mostrar mensaje
            await Swal.fire({
                icon: 'warning',
                title: 'Sesión expirada',
                text: 'Tu sesión ha expirado. Inicia sesión nuevamente.',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false,
                allowEscapeKey: false
            })

            // Redirigir al login
            if (router.currentRoute.value.path !== '/login') {
                router.push('/login')
            }

            // Reiniciar la bandera
            sessionExpired = false
        }

        return Promise.reject(error)
    }
)

export default api