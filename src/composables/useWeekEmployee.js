import { ref } from 'vue'
import api from '@/services/api'
import { ROLE_ROUTES } from '@/constants/roleRoutes'

export function useWeekEmployee() {

    const colaborador = ref(null)
    const historial = ref([])
    const solicitudActiva = ref(false)
    const loading = ref(false)
    const error = ref(null)

    // =================================
    // OBTENER COLABORADOR DEL MES
    // =================================
    const fetchWeekEmploye = async (role) => {

        loading.value = true
        error.value = null

        try {

            const route = ROLE_ROUTES[role] || 'general'

            const { data } = await api.get(
                `/${route}/colaborador-mes/actual`
            )

            colaborador.value = data

        } catch (err) {

            error.value =
                err.response?.data?.message ||
                'Error al obtener empleado del mes'

        } finally {

            loading.value = false

        }

    }

    // =================================
    // OBTENER HISTORIAL (SOLO LIDER)
    // =================================
    const fetchHistorial = async () => {

        loading.value = true
        error.value = null

        try {

            const { data } = await api.get(
                '/lider/colaborador-mes/historial'
            )

            historial.value = data

        } catch (err) {

            error.value =
                err.response?.data?.message ||
                'Error al obtener historial'

            console.error(err)

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

            const { data } = await api.post(
                '/lider/colaborador-mes',
                payload
            )

            return data

        } catch (err) {

            console.log(err.response?.data)

            error.value =
                err.response?.data?.message ||
                'Error al crear solicitud'

            throw err

        } finally {

            loading.value = false

        }
    }

    // =================================
    // SOLICITUD VALIDACIÓN COLABORADOR DEL MES
    // =================================
    const fetchSolicitudActiva = async () => {

        try {

            const { data } = await api.get(
                '/lider/colaborador-mes/solicitud-activa'
            )

            solicitudActiva.value = data.activa

        } catch (err) {

            console.error(err)

        }

    }

    return {
        colaborador,
        historial,
        solicitudActiva,
        loading,
        error,
        fetchWeekEmploye,
        fetchHistorial,
        fetchSolicitudActiva,
        solicitarColaboradorMes
    }

}