import { ref } from 'vue'
import axios from 'axios'

export function useLider() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const equipo = ref([])
    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const obtenerEquipo = async ( filters = {} ) => {
        

        try {

            const params = {
                offset: filters.offset || 0,
                limit: filters.limit || 5
            }

            loading.value = true
            error.value = null

            if (filters.numero_nomina)
                params.numero_nomina = filters.numero_nomina

            if (filters.puesto)
                params.puesto = filters.puesto

            const response = await axios.get(
                `${API_URL}/lider/equipo`,
                {
                    headers: getAuthHeaders(),
                    params
                }
            )

            equipo.value = response.data

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al obtener integrantes del equipo'

            throw err

        } finally {

            loading.value = false

        }
    }

    return {
        equipo,
        obtenerEquipo,
        loading,
        error
    }

}