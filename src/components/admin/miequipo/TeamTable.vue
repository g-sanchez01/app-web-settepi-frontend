<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { ROUTES } from '@/router/routesGeneral';
    import { ESTADO_STYLES } from '@/constants/status.constants';

    const router = useRouter()

    const props = defineProps({
        equipo: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        },
        solicitudActiva: {
            type: Boolean,
            default: false
        }
    })

    const asignarColaboradorMes = (colaborador) => {
        // redireccion
        router.push(ROUTES.ADMIN.MI_EQUIPO.ASIGNAR(colaborador.numero_nomina))
    }

</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm p-5">
        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=" "
        />

        <h2 class="text-2xl font-bold text-slate-900 mb-5">
            Integrantes del Equipo
        </h2>

        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 text-left">
                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Nómina
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Nombre
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Área
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Puesto
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Estado
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900 text-center">
                            Acción
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="empleado in equipo"
                        :key="empleado.numero_nomina"
                        class="border-b border-slate-200 hover:bg-slate-50 transition"
                    >
                        <td class="px-4 py-3 text-slate-700">
                            {{ empleado.numero_nomina }}
                        </td>

                        <td class="px-4 py-3 font-medium text-slate-900">
                            {{ empleado.nombre }}
                        </td>

                        <td class="px-4 py-3 text-slate-700">
                            {{ empleado.area }}
                        </td>

                        <td class="px-4 py-3 text-slate-700">
                            {{ empleado.puesto }}
                        </td>

                        <td class="px-4 py-3">
                            <span
                                v-if="empleado.estado_solicitud"
                                class="px-2.5 py-1 rounded-full text-xs font-semibold"
                                :class="ESTADO_STYLES[empleado.estado_solicitud]"
                            >
                                {{ empleado.estado_solicitud }}
                            </span>

                            <span
                                v-else
                                class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600"
                            >
                                SIN SOLICITUD
                            </span>
                        </td>

                        <td class="px-4 py-3 text-center">
                            <button
                                @click="asignarColaboradorMes(empleado)"
                                :disabled="props.solicitudActiva"
                                class="px-3 py-2 text-sm rounded-lg transition"
                                :class="[
                                    props.solicitudActiva
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-[#005B96] hover:bg-[#1E73B8] text-white'
                                ]"
                            >
                                Asignar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

