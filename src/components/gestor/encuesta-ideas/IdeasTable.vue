<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

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

    const verIdea = (idea) => {
        // redireccion
        router.push(ROUTES.GESTOR.ENCUESTAS.IDEAS.DETALLE(idea.idRegistroIdea))
    }


</script>

<template>
    <div class="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mt-5">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />

        <table class="min-w-full text-sm text-left">

            <!--HEADER-->
            <thead class="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                    <th class="px-4 py-3 font-semibold">ID</th>
                    <th class="px-4 py-3 font-semibold">Nomina</th>
                    <th class="px-4 py-3 font-semibold">Zona</th>
                    <th class="px-4 py-3 font-semibold">Departamento</th>
                    <th class="px-4 py-3 font-semibold">Título</th>
                    <th class="px-4 py-3 font-semibold">Fecha y Hora</th>
                    <th class="px-4 py-3 font-semibold">Estado</th>
                    <th class="px-4 py-3 font-semibold">Ver</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">

                <!-- SI NO HAY IDEAS -->
                <tr v-if="!loading && ideas.length === 0"">
                    <td colspan="6" class="px-6 py-10 text-center text-gray-500">
                        No hay ideas
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

                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ idea.nomina }}
                    </td>

                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ idea.zona }}
                    </td>

                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ idea.departamento }}
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

                    <!-- VER -->
                    <td class="px-6 py-4">
                        <button
                            class="inline-flex items-center justify-center w-9 h-9 rounded-lg transition text-blue-500 hover:text-blue-300 cursor-pointer"
                            @click="verIdea(idea)"
                        >
                            <i class="pi pi-eye text-2xl"></i>
                        </button>
                    </td>

                    
                </tr>
            </tbody>
        </table>
    </div>
</template>