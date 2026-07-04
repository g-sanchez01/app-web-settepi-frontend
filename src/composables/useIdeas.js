import { ref } from 'vue'
import api from '@/services/api'

export function useIdeas() {

    const loading = ref(false)
    const error = ref(null)

    const registrarIdea = async (ideaData) => {

        try {

            loading.value = true
            error.value = null

            // inicio del tiempo
            const startTime = Date.now()

            const response = await api.post(
                '/ideas/registrar',
                ideaData
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

            const response = await api.get(
                '/ideas/mis-ideas',
                {
                    params
                }
            )

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener ideas'

            throw err

        } finally {

            loading.value = false

        }
    }

    const obtenerIdeaPorId = async (id) => {

        try {

            loading.value = true
            error.value = null

            const response = await api.get(
                `/ideas/${id}`
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

            const response = await api.put(
                `/ideas/${id}`,
                ideaData
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

            const response = await api.put(
                `/ideas/enviar/${id}`,
                {}
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

    const actualizarEstadoIdea = async (id, estado) => {

        try {

            loading.value = true
            error.value = null

            const response = await api.put(
                `/ideas/${id}/estado`,
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

    const obtenerEstadisticasIdeas = async () => {

        try {

            loading.value = true
            error.value = null

            const response = await api.get(
                '/ideas/estadisticas'
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
        obtenerIdeaPorId,
        editarIdea,
        registrarIdea,
        enviarIdea,
        obtenerMisIdeas,
        actualizarEstadoIdea,
        obtenerEstadisticasIdeas,
        loading,
        error
    }

}