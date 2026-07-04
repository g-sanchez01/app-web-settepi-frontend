import { ref } from 'vue'
import api from '@/services/api'

export function useColaborador() {

    const colaborador = ref(null)
    const usuario = ref(null)
    const usuarios = ref([])
    const totalUsuarios = ref(0)
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

    const getByNomina = async (numero_nomina) => {
        loading.value = true

        try {
            const { data } = await api.get(
                `/lider/colaborador/${numero_nomina}`
            )

            colaborador.value = data

        } finally {
            loading.value = false
        }
    }

    const getUsers = async (filters = {}) => {
        loading.value = true
        error.value = null

        try {

            const { data } = await api.get(
                '/admindev/usuarios',
                {
                    params: {
                        offset: 0,
                        limit: 10,
                        ...cleanParams(filters)
                    }
                }
            )

            usuarios.value = data

        } catch (err) {
            error.value = err.response?.data?.detail || 'Error al obtener solicitudes'
        } finally {
            loading.value = false
        }
    }

    const fetchTotalUsuarios = async () => {
        const { data } = await api.get(
            '/admindev/usuarios/total'
        )

        totalUsuarios.value = data.total
    }

    const obtenerUsuarioNomina = async (numero_nomina) => {
        loading.value = true
        error.value = null

        try {

            const { data } = await api.get(
                `/admindev/usuarios/${numero_nomina}`
            )

            usuario.value = data
            return data

        } catch (err) {
            error.value = err
            console.error('Error al obtener usuario:', err)
            return null

        } finally {
            loading.value = false
        }
    }

    return {
        colaborador,
        usuario,
        usuarios,
        totalUsuarios,
        loading,
        getByNomina,
        getUsers,
        fetchTotalUsuarios,
        obtenerUsuarioNomina
    }
}