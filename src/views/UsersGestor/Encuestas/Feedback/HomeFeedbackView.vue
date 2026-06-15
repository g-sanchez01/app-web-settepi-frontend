<script setup>
    import { ref, onMounted } from 'vue'
    import FeedbackFilter from '@/components/gestor/encuesta-feedback/FeedbackFilter.vue';
    import FeedbackHeader from '@/components/gestor/encuesta-feedback/FeedbackHeader.vue';
    import FeedbacksTable from '@/components/gestor/encuesta-feedback/FeedbacksTable.vue';
    import { useFeedbacks } from '@/composables/useFeedbacks';

    const { obtenerMisFeedbacks, loading } = useFeedbacks()

    const feedbacks = ref([])

    const cargarFeedbacks = async (filters = {}) => {
        try {
            feedbacks.value = await obtenerMisFeedbacks(filters)
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

    </div>
</template>

