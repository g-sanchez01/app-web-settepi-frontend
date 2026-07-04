import { ref } from 'vue'
import api from '@/services/api'

export function useFeedbacks() {

    const loading = ref(false)
    const error = ref(null)

    const registrarFeedback = async (feedbackData) => {

        try {

            loading.value = true
            error.value = null

            // inicio del tiempo
            const startTime = Date.now()

            const response = await api.post(
                '/feedbacks/registrar',
                feedbackData
            )

            // duración mínima del spinner
            const elapsed = Date.now() - startTime
            const minDuration = 1000

            if (elapsed < minDuration) {

                await new Promise(resolve =>
                    setTimeout(resolve, minDuration - elapsed)
                )

            }

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al registrar feedback'

            throw err

        } finally {

            loading.value = false
        }
    }

    const obtenerMisFeedbacks = async (filters = {}) => {

        try {

            loading.value = true
            error.value = null

            const params = {}

            if (filters.idfeedback)
                params.idfeedback = filters.idfeedback

            if (filters.nomina)
                params.nomina = filters.nomina

            if (filters.area)
                params.area = filters.area

            if (filters.tipo)
                params.tipo = filters.tipo

            if (filters.estado)
                params.estado = filters.estado

            if (filters.fecha)
                params.fecha = filters.fecha

            if (filters.nombre)
                params.nombre = filters.nombre

            if (filters.offset !== undefined)
                params.offset = filters.offset

            if (filters.limit !== undefined)
                params.limit = filters.limit

            const response = await api.get(
                '/feedbacks/settepi-te-escucha',
                {
                    params
                }
            )

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener feedbacks'

            throw err

        } finally {

            loading.value = false

        }
    }

    const obtenerFeedbackPorId = async (id) => {

        try {

            loading.value = true
            error.value = null

            const response = await api.get(
                `/feedbacks/${id}`
            )

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener feedback'

            throw err

        } finally {

            loading.value = false

        }
    }

    // ACTUALIZAR ESTADO "GESTOR"
    const actualizarEstadoFeedback = async (id, estado) => {

        try {

            loading.value = true
            error.value = null

            const response = await api.put(
                `/feedbacks/${id}/estado`,
                { estado }
            )

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al actualizar estado'

            throw err

        } finally {

            loading.value = false

        }
    }

    const obtenerEstadisticasFeedbacks = async () => {

        try {

            loading.value = true
            error.value = null

            const response = await api.get(
                '/feedbacks/estadisticas'
            )

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener estadísticas'

            throw err

        } finally {

            loading.value = false

        }
    }

    return {
        registrarFeedback,
        obtenerMisFeedbacks,
        actualizarEstadoFeedback,
        obtenerFeedbackPorId,
        obtenerEstadisticasFeedbacks,
        loading,
        error
    }

}