<script setup>
    import { ref, onMounted } from 'vue'
    import FeedbackFilter from '@/components/admin/encuesta-feedback/FeedbackFilter.vue';
    import FeedbackHeader from '@/components/admin/encuesta-feedback/FeedbackHeader.vue';
    import FeedbacksTable from '@/components/admin/encuesta-feedback/FeedbacksTable.vue';
    import { useFeedbacks } from '@/composables/useFeedbacks';

    const { obtenerMisFeedbacks, loading } = useFeedbacks()

    const feedbacks = ref([])

    const currentPage = ref(1)
    const limit = 10

    const cargarFeedbacks = async (filters = {}) => {

        try {
            const offset = (currentPage.value - 1) * limit

            feedbacks.value = await obtenerMisFeedbacks({
                ...filters,
                offset,
                limit
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    onMounted(async () => {
        await cargarFeedbacks()
    })

    const aplicarFiltros = async (filters) => {
        await cargarFeedbacks(filters)
    }

    const siguientePagina = async () => {

        // si la página trae menos de 10 registros
        // probablemente ya no hay más resultados
        if (feedbacks.value.length < limit)
            return

        currentPage.value++

        await cargarFeedbacks()
    }

    const paginaAnterior = async () => {

        if (currentPage.value === 1)
            return

        currentPage.value--

        await cargarFeedbacks()
    }

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <FeedbackHeader/>

        <!--Filtros-->
        <FeedbackFilter
            @filter="aplicarFiltros"
        />

        <!--Desktop-->
        <div class="hidden md:block">
            <FeedbacksTable
                :feedbacks="feedbacks"
                :loading="loading"
            />
        </div>

        <!-- PAGINACIÓN -->
        <div
            class="flex items-center justify-end gap-3 mt-4"
        >
            <button
                @click="paginaAnterior"
                :disabled="currentPage === 1"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Anterior
            </button>

            <span class="text-sm text-gray-600">
                Página {{ currentPage }}
            </span>

            <button
                @click="siguientePagina"
                :disabled="feedbacks.length < limit"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Siguiente
            </button>
        </div>

    </div>


    

</template>

