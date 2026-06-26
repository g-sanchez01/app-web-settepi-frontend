<script setup>
    import { onMounted, ref } from 'vue';
    import { BellRing, CircleCheck } from 'lucide-vue-next'
    import { useColaboradorMesAdminDev } from '@/composables/useColaboradorMesAdminDev';
    import EmpleadoMesHeader from '@/components/admindev/empleado-mes/EmpleadoMesHeader.vue';
    import StatsCard from '@/components/admindev/empleado-mes/StatsCard.vue';
    import EmpleadoMesTable from '@/components/admindev/empleado-mes/EmpleadoMesTable.vue';
    import EmpleadoMesFilter from '@/components/admindev/empleado-mes/EmpleadoMesFilter.vue';
    import EmpleadoMesTableMobile from '@/components/admindev/empleado-mes/mobile/EmpleadoMesTableMobile.vue';

    const { solicitudes, fetchSolicitudes, fetchTotalAsignados, fetchTotalPendientes, totalAsignados, totalPendientes } = useColaboradorMesAdminDev()

    const filters = ref({})

    const currentPage = ref(1);
    const limit = 6

    const cargarSolicitudes = async () => {
        await fetchSolicitudes({
            ...filters.value,
            offset: (currentPage.value - 1) * limit,
            limit
        });
    };


    onMounted(() => {
        fetchSolicitudes()
        fetchTotalAsignados()
        fetchTotalPendientes()
    })

    const aplicarFiltros = (f) => {
        filters.value = f
        fetchSolicitudes(f)
    }

    const siguientePagina = async () => {

        // si la página trae menos de 10 registros
        // probablemente ya no hay más resultados
        if (solicitudes.value.length < limit)
            return

        currentPage.value++

        await cargarSolicitudes()
    }

    const paginaAnterior = async () => {

        if (currentPage.value === 1)
            return

        currentPage.value--

        await cargarSolicitudes()
    }


</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EmpleadoMesHeader/>

        <div class="mb-8 flex flex-col md:flex-row gap-4">
            <StatsCard
                titulo="Solicitudes Pendientes"
                :cantidad="totalPendientes"
                :icono="BellRing"
                color-icono="text-blue-600"
            />

            <StatsCard
                titulo="Empleados Asignados"
                :cantidad="totalAsignados"
                :icono="CircleCheck"
                color-icono="text-green-600"
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

        <!-- Mobile -->
        <div class="mb-8 md:hidden">
            <EmpleadoMesTableMobile :solicitudes="solicitudes"/>
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
                :disabled="solicitudes.length < limit"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Siguiente
            </button>
        </div>
    </div>
</template>

