import { ref } from 'vue'
import axios from 'axios'

export function useFeedbacks() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const registrarFeedback = async (feedbackData) => {

        try {

            loading.value = true
            error.value = null
            
            // inicio del tiempo
            const startTime = Date.now()

            const token = localStorage.getItem('token')

            const response = await axios.post(
                `${API_URL}/feedbacks/registrar`,
                feedbackData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
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

            console.log(err.response?.data)

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
                params.estado = filters.tipo

            if (filters.fecha)
                params.fecha = filters.fecha

            if (filters.nombre)
                params.nombre = filters.nombre

            const response = await axios.get(
                `${API_URL}/feedbacks/settepi-te-escucha`,
                {
                    headers: getAuthHeaders(),
                    params
                }
            )

            return response.data

        } catch (error) {

            console.error(err)

            error.value = err.response?.data?.detail || 'Error al obtener feedbacks'

            throw err
        } finally {

            loading.value = false

        }
    }

     const obtenerFeedbackPorId = async (id) => {

        try {
            loading.value = true
            error.value = null

            const response = await axios.get(
                `${API_URL}/feedbacks/${id}`,
                {
                    headers: getAuthHeaders()
                }
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

            const response = await axios.put(
                `${API_URL}/feedbacks/${id}/estado`,
                { estado },
                {
                    headers: getAuthHeaders()
                }
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

    return {
        registrarFeedback,
        obtenerMisFeedbacks,
        actualizarEstadoFeedback,
        obtenerFeedbackPorId,
        loading,
        error
    }

}