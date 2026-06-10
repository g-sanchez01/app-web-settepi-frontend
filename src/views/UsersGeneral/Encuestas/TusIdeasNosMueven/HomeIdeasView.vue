<script setup>
    import { ref, onMounted } from 'vue'
    import IdeaFilter from '@/components/general/encuesta-ideas/IdeaFilter.vue';
    import IdeasHeader from '@/components/general/encuesta-ideas/IdeasHeader.vue';
    import IdeasTable from '@/components/general/encuesta-ideas/IdeasTable.vue';
    import IdeaTableMobile from '@/components/general/encuesta-ideas/mobile/IdeaTableMobile.vue';
    import { useIdeas } from '@/composables/useIdeas';

    const { obtenerMisIdeas, loading } = useIdeas()

    const ideas = ref([])

    const cargarIdeas  = async (filters = {}) => {
        try {
            ideas.value = await obtenerMisIdeas(filters)
        } catch (err) {
            console.error(err)
        }
    }

    onMounted(async () => {
        await cargarIdeas()
    })

    const aplicarFiltros = async (filters) => {
        await cargarIdeas(filters)
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
        
    </div>
</template>
