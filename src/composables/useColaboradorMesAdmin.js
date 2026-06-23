import { ref } from 'vue'
import axios from 'axios'

export function useColaboradorMesAdmin() {

    // SERVER QA
    const API_URL = 'http://127.0.0.1:8000'

    const solicitudes = ref([])
    const loading = ref(false)
    const error = ref(null)
    const total = ref(0)

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

    const fetchSolicitudes = async (filters = {}) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await axios.get(
                `${API_URL}/admin/colaborador-mes/historial-admin`,
                {
                    headers: getAuthHeaders(),
                    params: {
                        offset: 0,
                        limit: 10,
                        ...cleanParams(filters)
                    }
                }
            )

            solicitudes.value = data.data
            total.value = data.total

        } catch (err) {
            error.value = err.response?.data?.detail || 'Error al obtener solicitudes'
        } finally {
            loading.value = false
        }
    }

    return {
        solicitudes,
        loading,
        error,
        total,
        fetchSolicitudes
    }
}