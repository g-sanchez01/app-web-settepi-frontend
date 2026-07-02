<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { useIdeas } from '@/composables/useIdeas';
    import { ESTADO_STYLES, ESTADOS_BLOQUEADOS } from '@/constants/status.constants';
    import { ROUTES } from '@/router/routesGeneral';
    import { useToast } from '@/composables/ui/useToast'

    const router = useRouter()
    const toast = useToast()

    const loadingEnviar = ref(false)

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
        router.push(ROUTES.GENERAL.ENCUESTAS.MIS_IDEAS.EDITAR(idea.idRegistroIdea))
    }

    const handleEnviarIdea = async (idea) => {
        loadingEnviar.value = true
        
        try {

            await enviarIdea(idea.idRegistroIdea)

            toast.showToast('Tu idea fue enviada con éxito', 'success')
            
            idea.estado = 'ENVIADA'

        } catch (err) {
            console.error(err)
            toast.showToast('Error al envíar idea', 'error')
        } finally {
            loadingEnviar.value = false
        }
    }

</script>

<template>
    <div class="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mt-5">

        <AppSpinner
           :show="loading || loadingEnviar" logo="/images/logoAzul.png" text=" "
        />

        <table class="min-w-full text-sm text-left">

            <!--HEADER-->
            <thead class="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                    <th class="px-4 py-3 font-semibold">ID</th>
                    <th class="px-4 py-3 font-semibold">Título</th>
                    <th class="px-4 py-3 font-semibold">Fecha y Hora Creación</th>
                    <th class="px-4 py-3 font-semibold">Estado</th>
                    <th class="px-4 py-3 font-semibold">Editar</th>
                    <th class="px-4 py-3 font-semibold">Envíar</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">

                <!-- SI NO HAY IDEAS -->
                <tr v-if="!loading && ideas.length === 0"">
                    <td colspan="6" class="px-6 py-10 text-center text-gray-500">
                        No tienes ideas registradas 
                    </td>
                </tr>

                <tr
                    v-for="idea in ideas"
                    :key="idea.id"
                    class="hover:bg-gray-50 transition-all duration-200"
                >
                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ idea.idRegistroIdea }}
                    </td>

                    <!--Titulo-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ idea.tituloIdea }}
                        </div>
                    </td>

                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                        {{ formatDateTime(idea.fecha) }}
                    </td>

                    <!--ESTADO-->
                    <td class="px-6 py-4">
                        <span
                            class="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold"
                            :class="ESTADO_STYLES[idea.estado]"
                        >
                            {{ idea.estado }}
                        </span>
                    </td>

                    <!-- EDITAR -->
                    <td class="px-6 py-4">
                        <button
                            :disabled="ESTADOS_BLOQUEADOS.includes(idea.estado) || loadingEnviar"
                            class="inline-flex items-center justify-center w-9 h-9 rounded-lg transition"
                            :class="ESTADOS_BLOQUEADOS.includes(idea.estado)
                                ? 'text-blue-200 cursor-not-allowed'
                                : 'text-blue-500 hover:text-blue-300 cursor-pointer'"
                            @click="editIdea(idea)"
                        >
                            <i class="pi pi-pencil text-2xl"></i>
                        </button>
                    </td>

                    <!-- ENVIAR -->
                    <td class="px-6 py-4">
                        <button
                            :disabled="ESTADOS_BLOQUEADOS.includes(idea.estado) || loadingEnviar"
                            class="inline-flex items-center justify-center w-9 h-9 rounded-lg transition"
                            :class="ESTADOS_BLOQUEADOS.includes(idea.estado)
                                ? 'text-indigo-200 cursor-not-allowed'
                                : 'text-indigo-400 hover:text-indigo-300 cursor-pointer'"
                            @click="handleEnviarIdea(idea)"
                        >
                            <i class="pi pi-send text-2xl"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>