<script setup>
    import { actividades } from '@/data/gestor/actividades';
    import { ESTADO_STYLES } from '@/constants/status.constants'

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
                :key="actividad.nombre"
                class="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0"
            >

                <div class="flex items-center gap-4">

                    <!-- Avatar -->
                    <div
                        class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold"
                    >
                        {{ actividad.inicial }}
                    </div>

                    <!-- Información -->
                    <div>
                        <p class="font-medium text-gray-900">
                            {{ actividad.nombre }}
                        </p>

                        <p class="text-sm text-gray-500">
                            {{ actividad.descripcion }} · {{ actividad.tiempo }}
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

