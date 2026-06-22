import { ref } from 'vue'
import axios from 'axios'

export function useWeekEmployee() {
    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const colaborador = ref(null)
    const solicitudActiva = ref(false)
    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    // =================================
    // OBTENER COLABORADOR DEL MES
    // =================================
    const fetchWeekEmploye = async () => {
        loading.value = true
        error.value = null

        try {
            const { data } = await axios.get(
                `${API_URL}/lider/colaborador-mes/actual`,
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

    // =================================
    // SOLICITAR COLABORADOR DEL MES
    // =================================

    const solicitarColaboradorMes = async (payload) => {
        loading.value = true
        error.value = null

        try {
            const { data } = await axios.post(
                    `${API_URL}/lider/colaborador-mes`,
                    payload,
                {
                    headers: getAuthHeaders()
                },
            )

            return data

        } catch (err) {
            console.log(err.response?.data)
            error.value = err.response?.data?.message || 'Error al crear solicitud'
            throw err
        } finally {
            loading.value = false
        }
    }

    // =================================
    // SOLICITUD VALIDACION COLABORADOR DEL MES
    // =================================
    const fetchSolicitudActiva = async () => {
    try {
        const { data } = await axios.get(
            `${API_URL}/lider/colaborador-mes/solicitud-activa`,
            {
                headers: getAuthHeaders()
            }
        )

        solicitudActiva.value = data.activa

    } catch (err) {
        console.error(err)
    }
}

    return {
        colaborador,
        solicitudActiva,
        loading,
        error,
        fetchWeekEmploye,
        fetchSolicitudActiva,
        solicitarColaboradorMes
    }

    


}