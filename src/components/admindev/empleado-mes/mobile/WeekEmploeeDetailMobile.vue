<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { useColaboradorMesAdminDev } from '@/composables/useColaboradorMesAdminDev';
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import AppSpinner from '@/components/ui/AppSpinner.vue'

    const route = useRoute()
    const router = useRouter()

    const { obtenerSolicitudPorId, aprobarSolicitud, rechazarSolicitud } = useColaboradorMesAdminDev()

    const solicitud = ref(null)

    const cargarSolicitud = async () => {
        
        try {
            solicitud.value = await obtenerSolicitudPorId(route.params.id)
            
        } catch (error) {
            console.error(error)
        }
    }

    onMounted(() => {
        cargarSolicitud()
    })

    const aprobar = async () => {
        try {
            await aprobarSolicitud(route.params.id)

            toast.showToast('Solicitud aprobada con éxito', 'success')

            router.push(ROUTES.ADMIN.EMPLEADO_MES.LISTA)

        } catch (error) {
            console.error(error)
            toast.showToast('Error al aprobar solicitud', 'error')
        }
    }

    const rechazar = async () => {
        try {
            await rechazarSolicitud(route.params.id)

            toast.showToast('Solicitud rechazada con éxito', 'success')

            router.push(ROUTES.ADMIN.EMPLEADO_MES.LISTA)

        } catch (error) {
            console.error(error)
            toast.showToast('Error al rechazar solicitud', 'error')
        }
    }

</script>

<template>
    <div class="max-w-5xl mx-auto p-2 md:p-4">

        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=""
        />

        <div
            v-if="solicitud"
            class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >

            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-4">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <div>
                        <h1 class="text-lg md:text-xl font-bold text-white">
                            Solicitud 
                        </h1>

                        <p class="text-blue-100 text-xs mt-1">
                            ID: {{ solicitud.id }}
                        </p>
                    </div>

                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit"
                        :class="ESTADO_STYLES[solicitud.estado]"
                    >
                        {{ solicitud.estado }}
                    </span>

                </div>
            </div>

            <!-- Contenido -->
            <div class="p-4">

                <!-- Datos -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">

                    <div>
                        <p class="text-gray-400 text-xs uppercase">
                            Nómina
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ solicitud.numero_nomina }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-400 text-xs uppercase">
                            Nombre
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ solicitud.nombre }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-400 text-xs uppercase">
                            Departamento
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ solicitud.departamento }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-400 text-xs uppercase">
                            Area
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ solicitud.area }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-400 text-xs uppercase">
                            Puesto
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ solicitud.puesto }}
                        </p>
                    </div>

                    <div class="col-span-1 md:col-span-2 lg:col-span-3">
                        <p class="text-gray-400 text-xs uppercase">
                            Fecha 
                        </p>

                        <p class="font-medium text-gray-800">
                            {{ formatDateTime(solicitud.fecha_solicitud) }}
                        </p>
                    </div>

                </div>

                <!-- Descripción -->
                <div class="mt-5">

                    <p class="text-gray-400 text-xs uppercase mb-2">
                        KPIs
                    </p>

                    <div
                        class="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 whitespace-pre-line max-h-40 overflow-y-auto"
                    >
                        {{ solicitud.motivo_solicitud }}
                    </div>

                </div>

                <!-- Acciones -->
                <div class="mt-5 pt-4 border-t border-gray-200">

                    <p class="text-xs text-gray-500 uppercase mb-3 text-center">
                        Acciones disponibles
                    </p>

                    <div class="flex flex-wrap justify-center gap-2">

                        <button
                            v-if="solicitud.estado === 'PENDIENTE'"
                            @click="aprobar"
                            class="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition text-sm cursor-pointer"
                        >
                            Aprobar
                        </button>

                        <button
                            v-if="solicitud.estado === 'PENDIENTE'"
                            @click="rechazar"
                            class="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition text-sm cursor-pointer"
                        >
                            Rechazar
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

