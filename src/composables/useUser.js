import { computed } from 'vue'

import { formatCurrentDate } from '@/utils/formatDate'

export function useUser() {

    // obtener usuario
    const storedUser = JSON.parse(
        localStorage.getItem('user')
    )

    // iniciales
    const getInitials = (name) => {

        if (!name) return ''

        return name
            .split(' ')
            .slice(0, 2)
            .map(word => word[0])
            .join('')
            .toUpperCase()
    }

    // fecha actual
    const currentDate = computed(() =>
        formatCurrentDate()
    )

    // user formateado
    const user = computed(() => ({

        initials:
            getInitials(storedUser?.nombre),

        name:
            storedUser?.nombre || 'Sin nombre',

        role:
            storedUser?.puesto || 'Sin puesto',

        employeeId:
            storedUser?.numero_nomina || '---',

        email:
            storedUser?.correo_electronico || 'No disponible',

        phone:
            storedUser?.telefono || 'Sin teléfono',

        location:
            storedUser?.departamento || 'Sin departamento',

        department:
            storedUser?.departamento || '',

        entryDate:
            'No disponible',

        years:
            0,

        courses:
            0
    }))

    return {
        user,
        currentDate
    }
}