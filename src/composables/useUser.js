import axios from 'axios'
import { ref, computed } from 'vue'
import { formatCurrentDate } from '@/utils/formatDate'

export function useUser() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    // Desactivar usuario
    const desactivarUsuario = async (numero_nomina) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await axios.patch(
                `${API_URL}/admindev/usuarios/${numero_nomina}/desactivar`,
                {},
                {
                    headers: getAuthHeaders()
                }
            )

            return data

        } catch (err) {

            error.value = err.response?.data?.detail || 'Error al desactivar usuario'
            throw err

        } finally {

            loading.value = false
        }
    }

    // Reactivar usuario
    const reactivarUsuario = async (numero_nomina) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await axios.patch(
                `${API_URL}/admindev/usuarios/${numero_nomina}/reactivar`,
                {},
                {
                    headers: getAuthHeaders()
                }
            )

            return data

        } catch (err) {

            error.value = err.response?.data?.detail || 'Error al reactivar usuario'
            throw err

        } finally {

            loading.value = false
        }
    }


    // Obtener usuario
    const storedUser = JSON.parse(
        localStorage.getItem('user')
    )

    // Iniciales
    const getInitials = (name) => {

        if (!name) return ''

        return name
            .split(' ')
            .slice(0, 2)
            .map(word => word[0])
            .join('')
            .toUpperCase()
    }

    // Fecha actual
    const currentDate = computed(() =>
        formatCurrentDate()
    )

    // Usuario formateado
    const user = computed(() => ({

        initials: getInitials(storedUser?.nombre),

        name: storedUser?.nombre || 'Sin nombre',

        role: storedUser?.puesto || 'Sin puesto',

        employeeId: storedUser?.numero_nomina || '---',

        email: storedUser?.correo_electronico || 'No disponible',

        phone: storedUser?.telefono || 'Sin teléfono',

        location: storedUser?.departamento || 'Sin departamento',

        department: storedUser?.departamento || '',

        area: storedUser?.area || 'Sin Area',

        entryDate: 'No disponible',

        years: 0,

        courses: 0
    }))

    return {
        user,
        currentDate,
        loading,
        error
    }
}