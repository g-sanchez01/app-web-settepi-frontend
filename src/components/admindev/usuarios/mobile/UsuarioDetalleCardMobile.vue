<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { useToast } from '@/composables/ui/useToast'
    import { useColaborador } from '@/composables/useColaborador';
    import { useUserAdmin } from '@/composables/useUserAdmin';
    import { ROUTES } from '@/router/routesGeneral';
    import AppSpinner from '@/components/ui/AppSpinner.vue'

    const route = useRoute()
    const router = useRouter()
    const toast = useToast()

    const { obtenerUsuarioNomina, usuario } = useColaborador()
    const { desactivarUsuario, reactivarUsuario, loading, error } = useUserAdmin()

    const cargarUsuario = async () => {
        
        try {

            await obtenerUsuarioNomina(route.params.numero_nomina)
            
        } catch (error) {
            console.error(error)
        }
    }

    const toggleUsuarioEstado = async () => {

        const esActivo = usuario.value.estado === 'ACTIVO'

        const confirmar = window.confirm(
            esActivo
                ? '¿Deseas desactivar este usuario?'
                : '¿Deseas reactivar este usuario?'
        )

        if (!confirmar) return

        try {

            if (esActivo) {
                await desactivarUsuario(usuario.value.numero_nomina)
            } else {
                await reactivarUsuario(usuario.value.numero_nomina)
            }

            toast.showToast(
                esActivo
                    ? 'Usuario desactivado correctamente'
                    : 'Usuario reactivado correctamente',
                'success'
            )

            // recargar usuario
            await obtenerUsuarioNomina(route.params.numero_nomina)

        } catch (error) {

            console.error(error)

            toast.showToast(
                'No se pudo actualizar el usuario',
                'error'
            )
        }
    }

    onMounted(() => {
        cargarUsuario()
    })
</script>

<template>
    <div class="max-w-4xl mx-auto p-4 lg:p-8">

        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=""
        />

        <div v-if="usuario" class="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

            <!-- HEADER -->
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 px-5 py-5 lg:px-8 lg:py-6">
                <h1 class="text-xl lg:text-2xl font-bold text-white text-center">
                    Información del usuario
                </h1>
            </div>

            <div class="p-5 lg:p-8">

                <!-- MOBILE: 2 COLUMN GRID (REAL ADAPTADO) -->
                <div class="grid grid-cols-2 gap-3 md:hidden">

                    <div
                        v-for="item in [
                            ['Nómina', usuario.numero_nomina],
                            ['Nombre', usuario.nombre],
                            ['Teléfono', usuario.telefono || 'No disponible'],
                            ['Departamento', usuario.departamento],
                            ['Area', usuario.area],
                            ['Puesto', usuario.puesto],
                            ['Rol', usuario.rol],
                            ['Creación', formatDateTime(usuario.fecha_creacion)],
                            ['Actualización', formatDateTime(usuario.fecha_actualizacion)]
                        ]"
                        :key="item[0]"
                        class="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col justify-between min-h-[72px]"
                    >
                        <span class="text-[10px] uppercase text-gray-500 font-semibold tracking-wide">
                            {{ item[0] }}
                        </span>

                        <span class="text-sm text-gray-900 font-semibold break-words leading-tight mt-1">
                            {{ item[1] }}
                        </span>
                    </div>

                </div>

                <!-- DESKTOP GRID -->
                <div class="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Nomina</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.numero_nomina }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Nombre</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.nombre }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Telefono</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.telefono }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Departamento</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.departamento }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Area</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.area }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Puesto</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.puesto }}</p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Fecha Creacion</label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ formatDateTime(usuario.fecha_creacion) }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Fecha Actualizacion</label>
                        <p class="mt-1 text-gray-900 font-medium">
                            {{ formatDateTime(usuario.fecha_actualizacion) }}
                        </p>
                    </div>

                    <div>
                        <label class="text-xs font-semibold text-gray-500 uppercase">Rol</label>
                        <p class="mt-1 text-gray-900 font-medium">{{ usuario.rol }}</p>
                    </div>

                </div>

                <!-- FOOTER -->
                <div class="border-t border-gray-200 bg-gray-50 px-5 py-5 lg:px-8 lg:py-6 mt-6 lg:mt-8">

                    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                        <div>
                            <p class="text-sm text-gray-500 font-medium">
                                Estado actual
                            </p>
                        </div>

                        <span
                            class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold w-fit"
                            :class="ESTADO_STYLES[usuario.estado]"
                        >
                            {{ usuario.estado }}
                        </span>
                    </div>

                    <div class="mt-5 lg:mt-6">
                        <button
                            @click="toggleUsuarioEstado"
                            class="w-full md:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg
                                font-semibold hover:scale-[1.02] active:scale-95
                                transition-all duration-200 cursor-pointer"
                            :class="usuario.estado === 'ACTIVO'
                                ? 'bg-red-600 text-white hover:bg-red-700'
                                : 'bg-green-600 text-white hover:bg-green-700'"
                        >
                            {{ usuario.estado === 'ACTIVO'
                                ? 'Desactivar usuario'
                                : 'Reactivar usuario'
                            }}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

