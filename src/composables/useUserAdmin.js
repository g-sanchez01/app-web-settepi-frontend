import { ref } from 'vue'
import api from '@/services/api'

export function useUserAdmin() {

    const loading = ref(false)
    const error = ref(null)

    // ================================
    // CREAR USUARIO
    // ================================
    const createUser = async (userData) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await api.post(
                '/admindev/usuarios/create',
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return data

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al crear usuario'

            throw err

        } finally {

            loading.value = false

        }
    }

    // ================================
    // DESACTIVAR USUARIO
    // ================================
    const desactivarUsuario = async (numero_nomina) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await api.patch(
                `/admindev/usuarios/${numero_nomina}/desactivar`,
                null
            )

            return data

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al desactivar usuario'

            throw err

        } finally {

            loading.value = false

        }
    }

    // ================================
    // REACTIVAR USUARIO
    // ================================
    const reactivarUsuario = async (numero_nomina) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await api.patch(
                `/admindev/usuarios/${numero_nomina}/reactivar`,
                null
            )

            return data

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al reactivar usuario'

            throw err

        } finally {

            loading.value = false

        }
    }

    return {
        createUser,
        desactivarUsuario,
        reactivarUsuario,
        loading,
        error
    }
}