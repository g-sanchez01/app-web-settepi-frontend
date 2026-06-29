<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { useIdeas } from '@/composables/useIdeas';
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { useToast } from '@/composables/ui/useToast';
    import AppSpinner from '@/components/ui/AppSpinner.vue'

    const route = useRoute()

    const toast = useToast()

    const { obtenerIdeaPorId, actualizarEstadoIdea, loading } = useIdeas()

    const idea = ref(null)

    const cargarIdea = async () => {
        try {
            idea.value = await obtenerIdeaPorId(route.params.id)
        } catch (error) {
            console.error(error)
        }
    }

    onMounted(() => {
        cargarIdea()
    })

    const cambiarEstado = async (estado) => {

        try {

            await actualizarEstadoIdea(
                idea.value.idRegistroIdea,
                estado
            )

            toast.showToast('Estado de la idea actualizado', 'success')

            idea.value.estado = estado

        } catch (error) {

            console.error(error)

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
        
        <div v-if="idea" class="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

            <!--Header-->
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-6">
                <h1 class="text-2xl font-bold text-white">Detalle de Idea</h1>
                <p class="text-blue-100 mt-1">Información completa de la idea registrada.</p>
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
                            {{ idea.idRegistroIdea }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Nómina
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ idea.nomina }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Nombre
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ idea.nombre }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Teléfono
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ idea.telefono ? idea.telefono : 'No disponible' }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Zona
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ idea.zona }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Departamento
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ idea.departamento }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Fecha
                        </label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ formatDateTime(idea.fecha) }}
                        </p>
                    </div>

                    <!--Titulo-->
                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Título de la Idea
                        </label>

                        <div class="mt-2 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                            <p class="text-gray-900 font-semibold text-lg">
                                {{ idea.tituloIdea }}
                            </p>
                        </div>
                    </div>

                    <!--Descripcion-->
                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">
                            Descripción
                        </label>

                        <div class="mt-2 p-5 rounded-2xl bg-gray-50 border border-gray-200 min-h-[180px]">
                            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                                {{ idea.descripcionIdea }}
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
                            :class="ESTADO_STYLES[idea.estado]"
                        >
                            {{ idea.estado }}
                        </span>

                    </div>

                    <!--Acciones-->
                    <div class="flex flex-wrap gap-3">

                        <button
                            v-if="idea.estado === 'ENVIADA'"
                            @click="cambiarEstado('EN PROCESO')"
                            class="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 cursor-pointer"
                        >
                            Iniciar Proceso
                        </button>

                        <button
                            v-if="idea.estado === 'EN PROCESO'"
                            @click="cambiarEstado('APROBADA')"
                            class="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
                        >
                            Aprobar
                        </button>

                        <button
                            v-if="idea.estado === 'EN PROCESO'"
                            @click="cambiarEstado('RECHAZADA')"
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

