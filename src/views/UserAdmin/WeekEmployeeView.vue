<script setup>
    import { onMounted, ref } from 'vue';
    import { useColaboradorMesAdmin } from '@/composables/useColaboradorMesAdmin';
    import EmpleadoMesHeader from '@/components/admin/empleado-mes/EmpleadoMesHeader.vue';
    import StatsCard from '@/components/admin/empleado-mes/StatsCard.vue';
    import EmpleadoMesTable from '@/components/admin/empleado-mes/EmpleadoMesTable.vue';
    import EmpleadoMesFilter from '@/components/admin/empleado-mes/EmpleadoMesFilter.vue';

    const { solicitudes, fetchSolicitudes, fetchTotalAsignados, totalAsignados, total } = useColaboradorMesAdmin()

    const filters = ref({})

    onMounted(() => {
        fetchSolicitudes()
        fetchTotalAsignados()
    })

    const aplicarFiltros = (f) => {
        filters.value = f
        fetchSolicitudes(f)
    }

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EmpleadoMesHeader/>

        <div class="mb-8 flex flex-col md:flex-row gap-4">
            <StatsCard
                titulo="Solicitudes"
                :cantidad="total"
            />

            <StatsCard
                titulo="Empleados Asignados"
                :cantidad="totalAsignados"
            />
        </div>

        <!--Filtros-->
        <EmpleadoMesFilter class="mb-8"
            @filter="aplicarFiltros"
        />

        <!--Desktop-->
        <div class="mb-8 hidden md:block">
            <EmpleadoMesTable :solicitudes="solicitudes"/>
        </div>

    </div>
</template>

