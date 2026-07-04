import api from '@/services/api'
import { ref, computed } from 'vue'
import { formatCurrentDate } from '@/utils/formatDate'

export function useUser() {

    const loading = ref(false)
    const error = ref(null)

    // Desactivar usuario
    const desactivarUsuario = async (numero_nomina) => {

        loading.value = true
        error.value = null

        try {

            const { data } = await api.patch(
                `/admindev/usuarios/${numero_nomina}/desactivar`,
                {}
            )

            return data

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al desactivar usuario'

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

            const { data } = await api.patch(
                `/admindev/usuarios/${numero_nomina}/reactivar`,
                {}
            )

            return data

        } catch (err) {

            error.value =
                err.response?.data?.detail ||
                'Error al reactivar usuario'

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

        area: storedUser?.area || 'Sin Área',

        entryDate: 'No disponible',

        years: 0,

        courses: 0

    }))

    return {
        user,
        currentDate,
        desactivarUsuario,
        reactivarUsuario,
        loading,
        error
    }
}