<script setup>
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { useIdeas } from '@/composables/useIdeas';
    import { onMounted, ref } from 'vue';
    import { ESTADO_STYLES } from '@/constants/status.constants'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const { obtenerMisIdeas } = useIdeas()

    const ideas = ref([])

    const editIdea = (idea) => {
        // redireccion
        router.push(ROUTES.GENERAL.ENCUESTAS.MIS_IDEAS.EDITAR(idea.idRegistroIdea))
        
    }

    onMounted(async () => {
        ideas.value = await obtenerMisIdeas()
    })

</script>

<template>
    <div class="w-full mt-5">

        <div class="md:hidden space-y-3">
            <div
                v-for="idea in ideas"
                :key="idea.id"
                class="bg-white border border-gray-100 rounded-xl shadow-sm p-4"
            >
                <div class="flex justify-between items-start gap-3">
                    
                    <div>
                        <p class="text-xs text-gray-400">ID</p>
                        <p class="font-semibold text-gray-700">{{ idea.idRegistroIdea }}</p>
                    </div>

                    <!-- BOTONES AGRUPADOS -->
                    <div class="flex items-center gap-2 bg-gray-50 p-1 rounded-lg">
                        
                        <button
                            class="text-blue-500 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-100 transition"
                            @click="editIdea(idea)"
                        >
                            <i class="pi pi-pencil text-3xl"></i>
                        </button>

                        <button
                            class="text-indigo-500 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-indigo-100 transition"
                            @click="enviarIdea(idea)"
                        >
                            <i class="pi pi-send text-3xl"></i>
                        </button>

                    </div>

                </div>

                <div class="mt-2">
                    <p class="text-xs text-gray-400">Título</p>
                    <p class="text-gray-900 font-medium leading-snug">
                        {{ idea.tituloIdea }}
                    </p>
                </div>

                <div class="mt-2 flex justify-between items-center">
                    
                    <div>
                        <p class="text-xs text-gray-400">Fecha</p>
                        <p class="text-sm text-gray-600">
                            {{ formatDateTime(idea.fecha) }}
                        </p>
                    </div>

                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[idea.estado]"
                    >
                        {{ idea.estado }}
                    </span>

                </div>
            </div>
        </div>

    </div>
</template>