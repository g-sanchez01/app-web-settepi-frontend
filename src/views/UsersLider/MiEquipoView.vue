<script setup>
    import EquipoHeader from '@/components/lider/miequipo/EquipoHeader.vue';
    import TeamFilter from '@/components/lider/miequipo/TeamFilter.vue';
    import TeamCard from '@/components/lider/miequipo/TeamCard.vue';
    import TeamTable from '@/components/lider/miequipo/TeamTable.vue';
    import WeekEmployeeCard from '@/components/lider/miequipo/WeekEmployeeCard.vue';
    import HistorialWeekEmployeeTable from '@/components/lider/miequipo/HistorialWeekEmployeeTable.vue';


    
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

        <!--Filtros-->
        <TeamFilter class="mb-8"
            @filter="aplicarFiltros"
        />

        <div class="mb-8">
            <TeamTable/>
        </div>

        <!-- PAGINACIÓN -->
        <!--<div
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
        </div>-->

        <div class="mb-8">
            <HistorialWeekEmployeeTable/>
        </div>

        
        
    </div>
</template>

