<script setup>
    import { feedbacksTable } from '@/data/general/feedbacks';
    import { ESTADO_STYLES } from '@/constants/status.constants';
</script>

<template>
    <div class="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mt-5">
        <table class="min-w-full text-sm text-left">

            <!--HEADER-->
            <thead class="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                    <th class="px-4 py-3 font-semibold">ID</th>
                    <th class="px-4 py-3 font-semibold">Tipo</th>
                    <th class="px-4 py-3 font-semibold">Area</th>
                    <th class="px-4 py-3 font-semibold">Comentario</th>
                    <th class="px-4 py-3 font-semibold">Planta</th>
                    <th class="px-4 py-3 font-semibold">Fecha y Hora</th>
                    <th class="px-4 py-3 font-semibold">Estado</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">

                <tr
                    v-for="feedback in feedbacksTable"
                    :key="feedback.id"
                    class="hover:bg-gray-50 transition-all duration-200"
                >
                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ feedback.id }}
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

                    <!--Planta-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ feedback.planta }}
                        </div>
                    </td>

                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                        {{ feedback.fechaCreacion }}
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

                </tr>
            </tbody>
        </table>
    </div>
</template>