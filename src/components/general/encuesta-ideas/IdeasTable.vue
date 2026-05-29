<script setup>
    import { formatDateTime } from '@/utils/formatDate';
    import { useIdeas } from '@/composables/useIdeas';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { onMounted, ref } from 'vue';

    const { obtenerMisIdeas } = useIdeas()

    const ideas = ref([])

    onMounted(async () => {
        ideas.value = await obtenerMisIdeas()
    })

</script>

<template>
    <div class="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mt-5">
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
                <tr v-if="ideas.length === 0">
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
                            class="inline-flex items-center justify-center text-blue-500 w-9 h-9 rounded-lg hover:text-blue-300 hover:text-blue-300 transition cursor-pointer"
                            @click="editIdea(idea)"
                        >
                            <i class="pi pi-pencil text-2xl"></i>
                        </button>
                    </td>

                    <!-- ENVIAR -->
                    <td class="px-6 py-4">
                        <button
                            class="inline-flex items-center justify-center text-indigo-400 w-9 h-9 rounded-lg hover:text-indigo-300 hover:text-blue-300 transition cursor-pointer"
                            @click="enviarIdea(idea)"
                        >
                            <i class="pi pi-send text-2xl"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>