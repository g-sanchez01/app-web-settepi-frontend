import { ref } from 'vue'
import { ROLE_ROUTES } from '@/constants/roleRoutes'
import api from '@/services/api'

export function useEquipo() {

    const role = localStorage.getItem('role')

    const equipo = ref([])
    const loading = ref(false)
    const error = ref(null)

    const totalIntegrantes = ref(0)

    const obtenerEquipo = async (filters = {}) => {

        try {

            const route = ROLE_ROUTES[role]

            const params = {
                offset: filters.offset || 0,
                limit: filters.limit || 5
            }

            loading.value = true
            error.value = null

            if (filters.numero_nomina)
                params.numero_nomina = filters.numero_nomina

            if (filters.area)
                params.area = filters.area

            const response = await api.get(
                `/${route}/equipo`,
                {
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

    const obtenerTotalIntegrantes = async () => {
        try {

            const route = ROLE_ROUTES[role]

            const response = await api.get(
                `/${route}/equipo/total`
            )

            totalIntegrantes.value = response.data.total

        } catch (err) {
            console.error(err)
        }
    }

    return {
        equipo,
        obtenerEquipo,
        obtenerTotalIntegrantes,
        totalIntegrantes,
        loading,
        error
    }

}