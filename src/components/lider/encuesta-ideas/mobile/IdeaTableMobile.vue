<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { useIdeas } from '@/composables/useIdeas';
    import { ESTADO_STYLES, ESTADOS_BLOQUEADOS } from '@/constants/status.constants'
    import { useToast } from '@/composables/ui/useToast'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()
    const toast = useToast()

    const { enviarIdea } = useIdeas()

    const props = defineProps({
        ideas: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    })

    const editIdea = (idea) => {
        // redireccion
        router.push(ROUTES.LIDER.ENCUESTAS.MIS_IDEAS.EDITAR(idea.idRegistroIdea))
        
    }

    const handleEnviarIdea = async (idea) => {
        try {

            await enviarIdea(
                idea.idRegistroIdea
            )

            toast.showToast('Tu idea fue enviada con éxito', 'success')
            
            idea.estado = 'ENVIADA'

        } catch (err) {
            console.error(err)
            toast.showToast('Error al envíar idea', 'error')
        }
    }

</script>

<template>
    <div class="w-full mt-5">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />

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
                            :disabled="ESTADOS_BLOQUEADOS.includes(idea.estado)"
                            class="text-blue-500 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-100 transition"
                            :class="ESTADOS_BLOQUEADOS.includes(idea.estado)
                                ? 'text-blue-200 cursor-not-allowed'
                                : 'text-blue-500 hover:text-blue-300 cursor-pointer'"
                            @click="editIdea(idea)"
                        >
                            <i class="pi pi-pencil text-3xl"></i>
                        </button>

                        <button
                            :disabled="ESTADOS_BLOQUEADOS.includes(idea.estado)"
                            class="text-indigo-500 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-indigo-100 transition"
                            :class="ESTADOS_BLOQUEADOS.includes(idea.estado)
                                ? 'text-indigo-200 cursor-not-allowed'
                                : 'text-indigo-400 hover:text-indigo-300 cursor-pointer'"
                            @click="handleEnviarIdea(idea)"
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