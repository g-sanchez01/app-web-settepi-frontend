<script setup>
    import { onMounted } from 'vue'
    import { useActividades } from '@/composables/useActividades'
    import { formatCurrentDate } from '@/utils/formatDate'
    import { ESTADO_STYLES } from '@/constants/status.constants'

    const {
        actividades,
        obtenerActividades
    } = useActividades()

    onMounted(() => {
        obtenerActividades()
    })

    // iniciales: primer nombre + primer apellido
    const getIniciales = (nombre) => {
        if (!nombre) return 'NA'

        const partes = nombre
            .trim()
            .split(/\s+/)

        return (
            (partes[0]?.[0] || '') +
            (partes[1]?.[0] || '')
        ).toUpperCase()
    }

</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

        <!-- Header -->
        <div class="px-6 py-5 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-900">
                Actividad Reciente
            </h2>
        </div>

        <!-- Lista -->
        <div>
            <div
                v-for="actividad in actividades"
                :key="actividad.idActividad"
                class="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0"
            >

                <div class="flex items-center gap-4">

                    <!-- Avatar -->
                    <div
                        class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold"
                    >
                        {{ getIniciales(actividad.usuario) }}
                    </div>

                    <!-- Información -->
                    <div>
                        <p class="font-medium text-gray-900">
                            {{ actividad.usuario }}
                        </p>

                        <p class="text-sm text-gray-500">
                            {{ actividad.descripcion }} · {{ formatCurrentDate(actividad.fecha) }}
                        </p>
                    </div>

                </div>

                <!-- Estado -->
                <span
                    :class="[
                        ESTADO_STYLES[actividad.estado],
                        'px-3 py-1 rounded-full text-xs font-semibold'
                    ]"
                >
                    {{ actividad.estado }}
                </span>

            </div>

        </div>

    </div>
</template>

