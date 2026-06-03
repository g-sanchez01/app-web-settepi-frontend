import { ref } from 'vue'
import axios from 'axios'

export function useFeedbacks() {

    // Server QA
    const API_URL = 'http://127.0.0.1:8000'

    const loading = ref(false)
    const error = ref(null)

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem('token')}`
    })

    const registrarFeedback = async (feedbackData) => {

        try {

            loading.value = true
            error.value = null
            
            // inicio del tiempo
            const startTime = Date.now()

            const token = localStorage.getItem('token')

            const response = await axios.post(
                `${API_URL}/feedbacks/registrar`,
                feedbackData,
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

            console.log(err.response?.data)

            error.value =
                err.response?.data?.detail ||
                'Error al registrar feedback'

            throw err

        } finally {

            loading.value = false
        }
    }

    return {
        registrarFeedback,
        loading,
        error
    }

}