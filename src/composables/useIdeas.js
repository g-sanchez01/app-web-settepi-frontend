import { ref } from 'vue'
import axios from 'axios'


export function useIdeas() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const registrarIdea = async (ideaData) => {

        try {

            loading.value = true
            error.value = null

            // inicio del tiempo
            const startTime = Date.now()

            const token = localStorage.getItem('token')

            const response = await axios.post(
                `${API_URL}/ideas/registrar`,
                ideaData,
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

            error.value =
                err.response?.data?.detail ||
                'Error al registrar idea'

            throw err

        } finally {

            loading.value = false

        }

    }

    const obtenerMisIdeas = async (
        filters = {},
        page = 1,
        limit = 10
    ) => {
    
        try {
            
            loading.value = true
            error.value = null

            const params = {
                offset: (page - 1) * limit,
                limit
            }

            if (filters.idRegistroIdea)
                params.idRegistroIdea = filters.idRegistroIdea

            if (filters.nomina)
                params.nomina = filters.nomina

            if (filters.tituloIdea)
                params.tituloIdea = filters.tituloIdea

            if (filters.zona)
                params.zona = filters.zona

            if (filters.departamento)
                params.departamento = filters.departamento

            if (filters.estado)
                params.estado = filters.estado

            if (filters.fecha)
                params.fecha = filters.fecha

            if (filters.offset !== undefined)
                params.offset = filters.offset

            if (filters.limit !== undefined)
                params.limit = filters.limit

            const response = await axios.get(
                `${API_URL}/ideas/mis-ideas`,
                {
                    headers: getAuthHeaders(),
                    params
                }
            )

            return response.data

        } catch (err) {
            console.error(err)

            error.value = err.response?.data?.detail || 'Error al obtener ideas'

            throw err
        } finally {

            loading.value = false
        }
    }

    const obtenerIdeaPorId = async (id) => {

        try {
            loading.value = true
            error.value = null

            const response = await axios.get(
                `${API_URL}/ideas/${id}`,
                {
                    headers: getAuthHeaders()
                }
            )

            return response.data

        } catch (err) {
            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener la idea'

            throw err

        } finally {
            loading.value = false
        }
    }

    const editarIdea = async (id, ideaData) => {

        try {
            loading.value = true
            error.value = null

            const response = await axios.put(
                `${API_URL}/ideas/${id}`,
                ideaData,
                {
                    headers: getAuthHeaders()
                }
            )

            return response.data

        } catch (err) {
            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al actualizar la idea'

            throw err

        } finally {
            loading.value = false
        }
    }

    const enviarIdea = async (id) => {

        try {
            loading.value = true
            error.value = null

            const startTime = Date.now()

            const response = await axios.put(
                `${API_URL}/ideas/enviar/${id}`,
                {},
                {
                    headers: getAuthHeaders()
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

            error.value =
                err.response?.data?.detail ||
                'Error al enviar la idea'

            throw err

        } finally {
            loading.value = false
        }
    }

    // ACTUALIZAR ESTADO "GESTOR"
    const actualizarEstadoIdea = async (id, estado) => {

        try {

            loading.value = true
            error.value = null

            const response = await axios.put(
                `${API_URL}/ideas/${id}/estado`,
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
        obtenerIdeaPorId,
        editarIdea,
        registrarIdea,
        enviarIdea,
        obtenerMisIdeas,
        actualizarEstadoIdea,
        loading,
        error
    }

}