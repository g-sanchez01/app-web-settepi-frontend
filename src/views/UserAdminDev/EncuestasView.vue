<script setup>
    import { ref, onMounted } from 'vue'
    import EncuestasHeader from '@/components/admindev/EncuestasHeader.vue';
    import GestionIdeasCards from '@/components/admindev/GestionIdeasCards.vue';
    import GestionFeedbacksCards from '@/components/admindev/GestionFeedbacksCards.vue';
    import OptionsEncuestasCards from '@/components/admindev/OptionsEncuestasCards.vue';
    import RecentActivities from '@/components/admindev/RecentActivities.vue';
    import GestionIdeasCardsMobile from '@/components/admindev/mobile/GestionIdeasCardsMobile.vue';
    import GestionFeedbacksCardsMobile from '@/components/admindev/mobile/GestionFeedbacksCardsMobile.vue';

    import { useIdeas } from '@/composables/useIdeas'
    import { useFeedbacks } from '@/composables/useFeedbacks'

    const { obtenerEstadisticasFeedbacks } = useFeedbacks()
    const { obtenerEstadisticasIdeas } = useIdeas()

    const statsIdeas = ref(null)
    const statsFeedbacks = ref(null)

    const cargarEstadisticas = async () => {
        try {
            const [feedbacks, ideas] = await Promise.all([
                obtenerEstadisticasFeedbacks(),
                obtenerEstadisticasIdeas()
            ])

            statsFeedbacks.value = feedbacks
            statsIdeas.value = ideas

        } catch (error) {
            console.error('Error al cargar estadísticas:', error)
        }
    }

    onMounted(() => {
        cargarEstadisticas()
    })

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EncuestasHeader/>

        <!--Dashboard Encuestas-->
        <div class="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-12">

            <!--Ideas DESKTOP -->
            <div class="hidden lg:block xl:pr-6 xl:border-r border-slate-200">
                <GestionIdeasCards :stats-data="statsIdeas"/>
            </div>

            <!--Ideas MOBILE -->
            <div class="block lg:hidden">
                <GestionIdeasCardsMobile :stats-data="statsIdeas" />
            </div>

            <!--Feedbacks DESKTOP-->
            <div class="hidden lg:block xl:pr-6 xl:border-r border-slate-200">
                <GestionFeedbacksCards :stats-data="statsFeedbacks" />
            </div>

            <!--Feedbacks MOBILE -->
            <div class="block lg:hidden">
                <GestionFeedbacksCardsMobile :stats-data="statsFeedbacks" />
            </div>

        </div>

        <div class="mt-8">
            <OptionsEncuestasCards/>
        </div>

        <div class="mt-8">
            <RecentActivities/>
        </div>
    </div>
</template>

