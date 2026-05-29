import { ref } from 'vue'
import axios from 'axios'

export function useIdeas() {

    const loading = ref(false)
    const error = ref(null)

    const registrarIdea = async (ideaData) => {

        try {

            loading.value = true
            error.value = null

            // inicio del tiempo
            const startTime = Date.now()

            const token = localStorage.getItem('token')

            const response = await axios.post(
                'http://127.0.0.1:8000/ideas/registrar',
                ideaData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            // duración mínima del spinner
            const elapsed = Date.now() - startTime
            const minDuration = 1000

            if (elapsed < minDuration) {

                await new Promise(resolve =>
                    setTimeout(resolve, minDuration - elapsed)
                )

            }

            return response.data

        } catch (err) {

            console.error(err)

            error.value =
                err.response?.data?.detail ||
                'Error al registrar idea'

            throw err

        } finally {

            loading.value = false

        }

    }

    return {
        registrarIdea,
        loading,
        error
    }

}