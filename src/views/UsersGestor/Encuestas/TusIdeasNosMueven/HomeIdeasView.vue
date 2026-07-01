<script setup>
    import { ref, onMounted } from 'vue'
    import IdeaFilter from '@/components/gestor/encuesta-ideas/IdeaFilter.vue';
    import IdeasHeader from '@/components/gestor/encuesta-ideas/IdeasHeader.vue';
    import IdeasTable from '@/components/gestor/encuesta-ideas/IdeasTable.vue';
    import IdeaTableMobile from '@/components/gestor/encuesta-ideas/mobile/IdeaTableMobile.vue';
    import { useIdeas } from '@/composables/useIdeas';

    const { obtenerMisIdeas, loading } = useIdeas()

    const ideas = ref([])

    const currentPage = ref(1)
    const limit = 10

    const filtrosActuales = ref({})

    const cargarIdeas  = async (filters = {}) => {
        try {
            const offset = (currentPage.value - 1) * limit

            ideas.value = await obtenerMisIdeas({
                ...filters,
                offset,
                limit
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    onMounted(cargarIdeas)

    const aplicarFiltros = async (filters) => {
        filtrosActuales.value = filters

        // volver a la primera página al filtrar
        currentPage.value = 1

        await cargarIdeas(filters)
    }

    const siguientePagina = async () => {

        // si la página trae menos de 10 registros
        // probablemente ya no hay más resultados
        if (ideas.value.length < limit)
            return

        currentPage.value++

        await cargarIdeas()
    }

    const paginaAnterior = async () => {

        if (currentPage.value === 1)
            return

        currentPage.value--

        await cargarIdeas()
    }

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <IdeasHeader/>

        <!--Filtros-->
        <IdeaFilter
            @filter="aplicarFiltros"
        />

        <!--Desktop-->
        <div class="hidden md:block">
            <IdeasTable
                :ideas="ideas"
                :loading="loading"
            />
        </div>

        <!--Mobile-->
        <div class="block md:hidden">
            <IdeaTableMobile
                :ideas="ideas"
                :loading="loading"
            />
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
                :disabled="ideas.length < limit"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Siguiente
            </button>
        </div>

    </div>
</template>

