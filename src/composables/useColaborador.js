import { ref } from 'vue'
import axios from 'axios'

export function useColaborador() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const colaborador = ref(null)
    const usuarios = ref([])
    const totalUsuarios = ref(0)
    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const cleanParams = (filters) => {
        const params = {}

        Object.keys(filters).forEach(key => {
            const value = filters[key]

            if (value !== '' && value !== null && value !== undefined) {
                params[key] = value
            }
        })

        return params
    }

    const getByNomina = async (numero_nomina) => {
        loading.value = true

        try {
            const { data } = await axios.get(
                `${API_URL}/lider/colaborador/${numero_nomina}`
            )

            colaborador.value = data

        } finally {
            loading.value = false
        }
    }

    const getUsers = async (filters = {}) => {
        loading.value = true
        error.value = null

        try {

            const { data } = await axios.get(
                `${API_URL}/admindev/usuarios`,
                {
                    headers: getAuthHeaders(),
                    params: {
                        offset: 0,
                        limit: 10,
                        ...cleanParams(filters)
                    }
                }
            )

            usuarios.value = data

        } catch (err) {
            error.value = err.response?.data?.detail || 'Error al obtener solicitudes'
        } finally {
            loading.value = false
        }
    }

    const fetchTotalUsuarios = async () => {
            const { data } = await axios.get(
                `${API_URL}/admindev/usuarios/total`,
                {
                    headers: getAuthHeaders()
                }
            )

            totalUsuarios.value = data.total
        }

    return {
        colaborador,
        usuarios,
        totalUsuarios,
        loading,
        getByNomina,
        getUsers,
        fetchTotalUsuarios
    }
}