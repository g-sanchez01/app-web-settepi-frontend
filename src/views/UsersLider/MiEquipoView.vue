<script setup>
    import { ref, onMounted } from 'vue';
    import { useLider } from '@/composables/useLider';
    import { useWeekEmployee } from '@/composables/useWeekEmployee';
    import EquipoHeader from '@/components/lider/miequipo/EquipoHeader.vue';
    import TeamFilter from '@/components/lider/miequipo/TeamFilter.vue';
    import TeamCard from '@/components/lider/miequipo/TeamCard.vue';
    import TeamTable from '@/components/lider/miequipo/TeamTable.vue';
    import TeamTableMobile from '@/components/lider/miequipo/mobile/TeamTableMobile.vue';
    import WeekEmployeeCard from '@/components/lider/miequipo/WeekEmployeeCard.vue';
    import HistorialWeekEmployeeTable from '@/components/lider/miequipo/HistorialWeekEmployeeTable.vue';

    const { obtenerEquipo, obtenerTotalIntegrantes, totalIntegrantes, loading } = useLider()
    const { fetchSolicitudActiva, solicitudActiva} = useWeekEmployee()

    const equipo = ref([])
    const emit = defineEmits(['asignar'])

    const currentPage = ref(1)
    const limit = 5

    const cargarColaboradores = async (filters = {}) => {
        try {
            const offset = (currentPage.value - 1) * limit

            equipo.value = await obtenerEquipo({
                ...filters,
                offset,
                limit
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    onMounted(async () => {
        await fetchSolicitudActiva()
        await cargarColaboradores()
        await obtenerTotalIntegrantes()
    })

    const aplicarFiltros = async (filters) => {
        await cargarColaboradores(filters)
    }

    const siguientePagina = async () => {

        // si la página trae menos de 10 registros
        // probablemente ya no hay más resultados
        if (equipo.value.length < limit)
            return

        currentPage.value++

        await cargarColaboradores()
    }

    const paginaAnterior = async () => {

        if (currentPage.value === 1)
            return

        currentPage.value--

        await cargarColaboradores()
    }

    const asignarEmpleadoMes = (empleado) => {
        emit('asignar', empleado)
    }

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EquipoHeader/>

        <div class="mb-8">
            <TeamCard
                titulo="Integrantes"
                :cantidad="totalIntegrantes"
            />
        </div>
        
        <div class="mb-8">
            <WeekEmployeeCard/>
        </div>

        <!--Filtros-->
        <TeamFilter class="mb-8"
            @filter="aplicarFiltros"
        />

        <!--Desktop-->
        <div class="mb-8 hidden md:block">
            <TeamTable
                :equipo="equipo"
                :loading="loading"
                :solicitud-activa="solicitudActiva"
                @asignar="asignarEmpleadoMes"
            />
        </div>

        <!-- MOBILE -->
        <div class="mb-8 block md:hidden">
            <TeamTableMobile
                :equipo="equipo"
                :solicitud-activa="solicitudActiva"
                @asignar="asignarEmpleadoMes"
            />
        </div>

        <!-- PAGINACIÓN -->
        <div
            class="flex items-center justify-end gap-3 mt-4 mb-8"
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
                :disabled="equipo.length < limit"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Siguiente
            </button>
        </div>

        <div class="mb-8">
            <HistorialWeekEmployeeTable/>
        </div>

        
        
    </div>
</template>

