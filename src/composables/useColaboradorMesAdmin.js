import { ref } from 'vue'
import axios from 'axios'

export function useColaboradorMesAdmin() {

    // SERVER QA
    const API_URL = 'http://127.0.0.1:8000'

    const solicitudes = ref([])
    const totalAsignados = ref(0)
    const totalPendientes = ref(0)
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

        } catch (err) {
            error.value = err.response?.data?.detail || 'Error al obtener solicitudes'
        } finally {
            loading.value = false
        }
    }

    const fetchTotalAsignados = async () => {
        const { data } = await axios.get(
            `${API_URL}/admin/colaborador-mes/asignados/total`,
            {
                headers: getAuthHeaders()
            }
        )

        totalAsignados.value = data.total
    }

    const fetchTotalPendientes = async () => {
        const { data } = await axios.get(
            `${API_URL}/admin/colaborador-mes/pendientes/total`,
            {
                headers: getAuthHeaders()
            }
        )

        totalPendientes.value = data.total
    }

    const obtenerSolicitudPorId = async (id) => {

        try {
            loading.value = true
            error.value = null

            const response = await axios.get(
                `${API_URL}/admin/colaborador-mes/${id}`,
                {
                    headers: getAuthHeaders()
                }
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
            const { data } = await axios.put(
                `${API_URL}/admin/colaborador-mes/aprobar/${id}`,
                {},
                {
                    headers: getAuthHeaders()
                }
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
            const { data } = await axios.put(
                `${API_URL}/admin/colaborador-mes/rechazar/${id}`,
                {},
                {
                    headers: getAuthHeaders()
                }
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