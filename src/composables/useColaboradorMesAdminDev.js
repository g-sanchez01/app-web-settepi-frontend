import { ref } from 'vue'
import api from '@/services/api'

export function useColaboradorMesAdminDev() {

    const solicitudes = ref([])
    const totalAsignados = ref(0)
    const totalPendientes = ref(0)
    const loading = ref(false)
    const error = ref(null)

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

            const { data } = await api.get(
                '/admindev/colaborador-mes/historial-admin',
                {
                    params: {
                        offset: 0,
                        limit: 10,
                        ...cleanParams(filters)
                    }
                }
            )

            solicitudes.value = data.data

        } catch (err) {
            error.value = err.response?.data?.detail || 'Error al obtener solicitudes'
        } finally {
            loading.value = false
        }
    }

    const fetchTotalAsignados = async () => {
        const { data } = await api.get(
            '/admindev/colaborador-mes/asignados/total'
        )

        totalAsignados.value = data.total
    }

    const fetchTotalPendientes = async () => {
        const { data } = await api.get(
            '/admindev/colaborador-mes/pendientes/total'
        )

        totalPendientes.value = data.total
    }

    const obtenerSolicitudPorId = async (id) => {

        try {
            loading.value = true
            error.value = null

            const response = await api.get(
                `/admindev/colaborador-mes/${id}`
            )

            return response.data

        } catch (err) {
            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener solicitud'

            throw err

        } finally {
            loading.value = false
        }
    }

    const aprobarSolicitud = async (id) => {
        loading.value = true
        error.value = null

        try {
            const { data } = await api.put(
                `/admindev/colaborador-mes/aprobar/${id}`,
                {}
            )

            solicitudes.value = solicitudes.value.map(s =>
                s.id === id ? data : s
            )

            return data

        } catch (err) {
            error.value = err?.response?.data?.detail || 'Error al aprobar la solicitud'
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    const rechazarSolicitud = async (id) => {
        loading.value = true
        error.value = null

        try {
            const { data } = await api.put(
                `/admindev/colaborador-mes/rechazar/${id}`,
                {}
            )

            solicitudes.value = solicitudes.value.map(s =>
                s.id === id ? data : s
            )

            return data

        } catch (err) {
            error.value = err?.response?.data?.detail || 'Error al rechazar la solicitud'
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    return {
        solicitudes,
        loading,
        error,
        totalAsignados,
        totalPendientes,
        fetchSolicitudes,
        fetchTotalAsignados,
        fetchTotalPendientes,
        obtenerSolicitudPorId,
        aprobarSolicitud,
        rechazarSolicitud
    }
}