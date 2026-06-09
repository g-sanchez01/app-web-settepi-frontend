<script setup>
    import AppHeader from '@/components/gestor/AppHeader.vue';
    import OptionsCards from '@/components/gestor/OptionsCards.vue';
    import WeekEmployee from '@/components/gestor/WeekEmployee.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <AppHeader/>

        <!--Contenido-->
        <div class="flex flex-col lg:flex-row gap-6 items-start">

            <div class="flex-1 w-full">
                <OptionsCards/>
            </div>

            <div class="w-full lg:w-[390px]">
                <WeekEmployee/>
            </div>

        </div>
    </div>
</template>
