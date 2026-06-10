<script setup>
    import EncuestasHeader from '@/components/gestor/EncuestasHeader.vue';
    import GestionIdeasCards from '@/components/gestor/GestionIdeasCards.vue';
    import GestionFeedbacksCards from '@/components/gestor/GestionFeedbacksCards.vue';
    import OptionsEncuestasCards from '@/components/gestor/OptionsEncuestasCards.vue';
    import RecentActivities from '@/components/gestor/RecentActivities.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-10">

        <div class="mt-5">
            <EncuestasHeader/>
        </div>
        

        <!--Dashboard Encuestas-->
        <div class="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-12">
                  
            <div class="xl:pr-6 xl:border-r border-slate-200">
                <GestionIdeasCards />
            </div>

            <div class="xl:pl-5">
                <GestionFeedbacksCards />
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

