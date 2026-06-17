import { ref } from 'vue'
import api from '@/services/api'

const actividades = ref([])

const obtenerActividades = async () => {
    try {
        const { data } = await api.get('/actividades')

        actividades.value = data
    } catch (error) {
        console.error('Error al obtener actividades:', error)
    }
}

export function useActividades() {
    return {
        actividades,
        obtenerActividades
    }
}