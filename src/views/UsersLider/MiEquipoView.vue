<script setup>
    import EquipoHeader from '@/components/lider/EquipoHeader.vue';
    import TeamCard from '@/components/lider/TeamCard.vue';
    import TeamTable from '@/components/lider/TeamTable.vue';
    import WeekEmployeeCard from '@/components/lider/WeekEmployeeCard.vue';
    import HistorialWeekEmployeeTable from '@/components/lider/HistorialWeekEmployeeTable.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EquipoHeader/>

        <div class="mb-8">
            <TeamCard/>
        </div>
        
        <div class="mb-8">
            <WeekEmployeeCard/>
        </div>

        <div class="mb-8">
            <TeamTable/>
        </div>

        <div class="mb-8">
            <HistorialWeekEmployeeTable/>
        </div>
        
    </div>
</template>

