import { ref } from 'vue'
import axios from 'axios'

export function useColaborador() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const colaborador = ref(null)
    const loading = ref(false)

    const getByNomina = async (numero_nomina) => {
        loading.value = true

        try {
            const { data } = await axios.get(
                `${API_URL}/lider/colaborador/${numero_nomina}`
            )

            colaborador.value = data

        } finally {
            loading.value = false
        }
    }

    return {
        colaborador,
        loading,
        getByNomina
    }
}