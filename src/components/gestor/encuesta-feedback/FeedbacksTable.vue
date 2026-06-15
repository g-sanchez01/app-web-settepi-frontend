<script setup>
    import { useRouter } from 'vue-router'
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    defineProps({
        feedbacks: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    })

    const verFeedback = (feedbacks) => {
        // redireccion
        router.push(ROUTES.GESTOR.ENCUESTAS.FEEDBACKS.DETALLE(feedbacks.idfeedback))
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
                    <th class="px-4 py-3 font-semibold">Tipo</th>
                    <th class="px-4 py-3 font-semibold">Area</th>
                    <th class="px-4 py-3 font-semibold">Comentario</th>
                    <th class="px-4 py-3 font-semibold">Fecha</th>
                    <th class="px-4 py-3 font-semibold">Estado</th>
                    <th class="px-4 py-3 font-semibold">Ver</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">

                <tr
                    v-for="feedback in feedbacks"
                    :key="feedback.idfeedback"
                    class="hover:bg-gray-50 transition-all duration-200"
                >
                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ feedback.idfeedback }}
                    </td>

                    <!--Tipo-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ feedback.tipo }}
                        </div>
                    </td>

                    <!--Area-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ feedback.area }}
                        </div>
                    </td>

                    <!--Comentario-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ feedback.comentario }}
                        </div>
                    </td>


                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                        {{ formatDateTime(feedback.fecha) }}
                    </td>

                    <!--ESTADO-->
                    <td class="px-6 py-4">
                        <span
                            class="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold"
                            :class="ESTADO_STYLES[feedback.estado]"
                        >
                            {{ feedback.estado }}
                        </span>
                    </td>

                    <!-- VER -->
                    <td class="px-6 py-4">
                        <button
                            class="inline-flex items-center justify-center w-9 h-9 rounded-lg transition text-blue-500 hover:text-blue-300 cursor-pointer"
                            @click="verFeedback(feedback)"
                        >
                            <i class="pi pi-eye text-2xl"></i>
                        </button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>