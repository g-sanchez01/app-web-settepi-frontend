<script setup>
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
    <div class="space-y-4">
        <div
            v-for="empleado in equipo"
            :key="empleado.numero_nomina"
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 
                   hover:shadow-md transition-all duration-300"
        >
            <!-- HEADER -->
            <div class="flex items-start justify-between mb-4">
                <div>
                    <p class="text-xs text-slate-400 uppercase tracking-wide">
                        Nómina
                    </p>
                    <p class="text-sm font-semibold text-slate-900">
                        {{ empleado.numero_nomina }}
                    </p>
                </div>

                <!-- BADGE ESTADO -->
                <div>
                    <span
                        v-if="empleado.estado_solicitud"
                        class="px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[empleado.estado_solicitud]"
                    >
                        {{ empleado.estado_solicitud }}
                    </span>

                    <span
                        v-else
                        class="px-3 py-1 rounded-full text-xs font-semibold 
                               bg-slate-100 text-slate-600"
                    >
                        SIN SOLICITUD
                    </span>
                </div>
            </div>

            <!-- INFO PRINCIPAL -->
            <div class="space-y-3 mb-5">
                <div>
                    <p class="text-xs text-slate-400">Nombre</p>
                    <p class="text-base font-semibold text-slate-900">
                        {{ empleado.nombre }}
                    </p>
                </div>

                <div>
                    <p class="text-xs text-slate-400">Puesto</p>
                    <p class="text-sm text-slate-700">
                        {{ empleado.puesto }}
                    </p>
                </div>
            </div>

            <!-- ACTION -->
            <button
                @click="asignarColaboradorMes(empleado)"
                :disabled="solicitudActiva"
                class="w-full py-3 rounded-xl font-semibold transition-all duration-200
                       flex items-center justify-center gap-2"
                :class="[
                    solicitudActiva
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#005B96] to-[#1E73B8] text-white hover:opacity-90'
                ]"
            >
                <span>Asignar</span>
            </button>
        </div>
    </div>
</template>

