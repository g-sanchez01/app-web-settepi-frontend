import { ref } from 'vue'
import axios from 'axios'

export function useWeekEmployee() {
    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const colaborador = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const fetchWeekEmploye = async () => {
        loading.value = true
        error.value = null

        try {
            const { data } = await axios.get(
                `${API_URL}/lider/colaborador-mes`,
                {
                    headers: getAuthHeaders()
                }
            )

            colaborador.value = data

        } catch (err) {
            error.value = err.response?.data?.message || 'Error al obtener empleado del mes'
        } finally {
            loading.value = false
        }
    }

    return {
        colaborador,
        loading,
        error,
        fetchWeekEmploye
    }

    


}