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
    <AppSpinner
        :show="loading"
        logo="/images/logoAzul.png"
        text=" "
    />

    <div class="space-y-4">
        <!-- Sin registros -->
        <div
            v-if="!loading && solicitudes.length === 0"
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center"
        >
            <p class="text-slate-500">
                No hay solicitudes
            </p>
        </div>
        
        <div
            v-for="empleado in solicitudes"
            :key="empleado.id"
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5
                   hover:shadow-md transition-all duration-300"
        >
            <!-- HEADER -->
            <div class="flex items-start justify-between mb-4">
                <div>
                    <p class="text-xs text-slate-400 uppercase tracking-wide">
                        Solicitud
                    </p>
                    <p class="text-sm font-semibold text-slate-900">
                        #{{ empleado.id }}
                    </p>
                </div>

                <div>
                    <span
                        v-if="empleado.estado"
                        class="px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[empleado.estado]"
                    >
                        {{ empleado.estado }}
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

            <!-- INFO -->
            <div class="space-y-3 mb-5">
                <div>
                    <p class="text-xs text-slate-400">Nómina</p>
                    <p class="text-sm font-semibold text-slate-900">
                        {{ empleado.numero_nomina }}
                    </p>
                </div>

                <div>
                    <p class="text-xs text-slate-400">Departamento</p>
                    <p class="text-sm text-slate-700">
                        {{ empleado.departamento }}
                    </p>
                </div>

                <div>
                    <p class="text-xs text-slate-400">Fecha de solicitud</p>
                    <p class="text-sm text-slate-700">
                        {{ formatDateTime(empleado.fecha_solicitud) }}
                    </p>
                </div>
            </div>

            <!-- ACTION -->
            <button
                @click="asignarColaboradorMes(empleado)"
                class="w-full py-3 rounded-xl font-semibold transition-all duration-200
                       flex items-center justify-center gap-2
                       bg-gradient-to-r from-[#005B96] to-[#1E73B8]
                       text-white hover:opacity-90"
            >
                Ver
            </button>
        </div>
    </div>
</template>