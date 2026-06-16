<script setup>
    import { ref, onMounted } from 'vue'

    import EncuestasHeader from '@/components/gestor/EncuestasHeader.vue'
    import GestionIdeasCards from '@/components/gestor/GestionIdeasCards.vue'
    import GestionFeedbacksCards from '@/components/gestor/GestionFeedbacksCards.vue'
    import OptionsEncuestasCards from '@/components/gestor/OptionsEncuestasCards.vue'
    import RecentActivities from '@/components/gestor/RecentActivities.vue'

    import { useFeedbacks } from '@/composables/useFeedbacks'
    import { useIdeas } from '@/composables/useIdeas'

    const { obtenerEstadisticasFeedbacks } = useFeedbacks()
    const { obtenerEstadisticasIdeas } = useIdeas()

    const statsFeedbacks = ref(null)
    const statsIdeas = ref(null)

    const cargarEstadisticas = async () => {
        try {
            const [feedbacks, ideas] = await Promise.all([
                obtenerEstadisticasFeedbacks(),
                obtenerEstadisticasIdeas()
            ])

            console.log('FEEDBACKS:', feedbacks)
            console.log('IDEAS:', ideas)

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
            
            <!--Ideas-->
            <div class="xl:pr-6 xl:border-r border-slate-200">
                <GestionIdeasCards :stats-data="statsIdeas"/>
            </div>

            <!--Feedbacks-->
            <div class="xl:pl-5">
                <GestionFeedbacksCards :stats-data="statsFeedbacks" />
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

