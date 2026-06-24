<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { ROUTES } from '@/router/routesGeneral';
    import { formatDateTime } from '@/utils/formatDate';

    const props = defineProps({
        solicitudes: {
            type: Array,
            default: () => []
        },
        loading: Boolean
    })

    const router = useRouter()

    const asignarColaboradorMes = (colaborador) => {
        router.push(
            ROUTES.ADMIN.EMPLEADO_MES.ASIGNAR(colaborador.id)
        )
    }

</script>

<template>
    <div class="bg-white rounded-3xl shadow-sm p-8">
        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />
        
        <h2 class="text-3xl font-bold text-slate-900 mb-8">
            Solicitudes
        </h2>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="bg-slate-100 text-left">
                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Solicitud
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Nomina
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Departamento
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Fecha
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Estado
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Acción
                        </th>


                        
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="empleado in solicitudes"
                        :key="empleado.id"
                        class="border-b border-slate-200"
                    >
                        <td class="px-6 py-5 text-slate-700">
                            {{ empleado.id }}
                        </td>

                        <td class="px-6 py-5 text-slate-700">
                            {{ empleado.numero_nomina }}
                        </td>

                        <td class="px-6 py-5 text-slate-700">
                            {{ empleado.departamento }}
                        </td>

                        <td class="px-6 py-5 text-slate-700">
                            {{ formatDateTime(empleado.fecha_solicitud) }}
                        </td>

                        <td class="px-6 py-5">
                            <span
                                v-if="empleado.estado"
                                class="px-3 py-1 rounded-full text-sm font-semibold"
                                :class="ESTADO_STYLES[empleado.estado]"
                            >
                                {{ empleado.estado }}
                            </span>

                            <span
                                v-else
                                class="px-3 py-1 rounded-full text-sm font-semibold bg-slate-100 text-slate-600"
                            >
                                SIN SOLICITUD
                            </span>
                        </td>

                        <td class="px-6 py-5">
                            <button
                                @click="asignarColaboradorMes(empleado)"
                                class="px-4 py-2 rounded-lg bg-[#005B96] hover:bg-[#1E73B8] text-white font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Ver
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

