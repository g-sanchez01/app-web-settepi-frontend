<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { useColaboradorMesAdmin } from '@/composables/useColaboradorMesAdmin';
    import { useToast } from '@/composables/ui/useToast'
    import { ROUTES } from '@/router/routesGeneral';
    import AppSpinner from '@/components/ui/AppSpinner.vue'

    const route = useRoute()
    const router = useRouter()
    const toast = useToast()

    const { obtenerSolicitudPorId, aprobarSolicitud, rechazarSolicitud, loading } = useColaboradorMesAdmin()

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
    <div class="max-w-6xl mx-auto p-4 lg:p-8">

        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=""
        />
        
        <div v-if="solicitud" class="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

            <!--Header-->
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-6">
                <h1 class="text-2xl font-bold text-white">Detalle de Solicitud</h1>
                <p class="text-blue-100 mt-1">Información completa de la solicitud.</p>
            </div>

             <!--Contenido-->
            <div class="p-8">

                <!--Datos Generales-->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            ID
                        </label>

                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.id }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Nómina
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.numero_nomina }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Nombre
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.nombre }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Departamento
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.departamento }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Area
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.area }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Puesto
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ solicitud.puesto }}
                        </p>
                    </div>
                    

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Fecha
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ formatDateTime(solicitud.fecha_solicitud) }}
                        </p>
                    </div>

                    <!--KPIs-->
                    <div class="md:col-span-2 xl:col-span-3">
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            KPIs
                        </label>

                        <div class="mt-2 p-5 rounded-2xl bg-gray-50 border border-gray-200 w-full max-w-3xl min-h-[250px]">
                            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                                {{ solicitud.motivo_solicitud }}
                            </p>
                        </div>
                    </div>

                </div>

                <!--Footer Estado-->
                <div class="border-t border-gray-200 bg-gray-50 px-8 py-6 mt-8">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                            <p class="text-sm text-gray-500 font-medium">
                                Estado actual
                            </p>
                        </div>

                        <span
                            class="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold"
                            :class="ESTADO_STYLES[solicitud.estado]"
                        >
                            {{ solicitud.estado }}
                        </span>

                    </div>

                    <!--Acciones-->
                    <div class="flex flex-wrap gap-3">

                        <button
                            v-if="solicitud.estado === 'PENDIENTE'"
                            @click="aprobar"
                            class="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
                        >
                            Aprobar
                        </button>

                        <button
                            v-if="solicitud.estado === 'PENDIENTE'"
                            @click="rechazar"
                            class="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer"
                        >
                            Rechazar
                        </button>

                    </div>
                </div>

            </div>

        </div>

       
    </div>
</template>

