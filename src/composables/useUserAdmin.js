import { ref } from 'vue'
import axios from 'axios'

export function useUserAdmin() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    // ================================
    // CREAR USUARIO
    // ================================
    const createUser = async (userData) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await axios.post(
                `${API_URL}/admindev/usuarios/create`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        ...getAuthHeaders()
                    }
                }
            )

            return data

        } catch (err) {

            error.value = err.response?.data?.detail || 'Error al crear usuario'
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

            const { data } = await axios.patch(
                `${API_URL}/admindev/usuarios/${numero_nomina}/desactivar`,
                null,
                {
                    headers: getAuthHeaders()
                }
            )

            return data

        } catch (err) {

            error.value = err.response?.data?.detail || 'Error al desactivar usuario'
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

            const { data } = await axios.patch(
                `${API_URL}/admindev/usuarios/${numero_nomina}/reactivar`,
                null,
                {
                    headers: getAuthHeaders()
                }
            )

            return data

        } catch (err) {

            error.value = err.response?.data?.detail || 'Error al reactivar usuario'
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