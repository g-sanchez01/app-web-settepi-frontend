<script setup>
    import { empleadosMes } from '@/data/lider/weekemployees';

    const getIniciales = (nombre) => {
        if (!nombre) return 'NA'

        return nombre
            .split(' ')
            .slice(0, 2)
            .map(n => n[0])
            .join('')
            .toUpperCase()
    }

</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <!-- Header -->
        <div class="px-6 py-5 border-b border-slate-200">
            <h2 class="text-xl font-semibold text-slate-900">
                Historial Empleado del Mes
            </h2>
        </div>

        <!-- Lista -->
        <div>
            <div
                v-for="empleado in empleadosMes"
                :key="empleado.id"
                class="flex items-center justify-between px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition"
            >
                <div class="flex items-center gap-4">

                    <!-- Avatar -->
                    <div
                        class="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F8FCF] to-yellow-400 flex items-center justify-center text-white font-bold"
                    >
                        {{ getIniciales(empleado.nombre) }}
                    </div>

                    <!-- Información -->
                    <div>
                        <p class="font-semibold text-slate-900">
                            {{ empleado.nombre }}
                        </p>

                        <p class="text-sm text-slate-500">
                            {{ empleado.puesto }}
                        </p>
                    </div>

                </div>

                <!-- Fecha -->
                <div class="text-right">
                    <p class="text-sm font-medium text-slate-900">
                        {{ empleado.fecha }}
                    </p>

                    <span
                        class="inline-flex items-center gap-1 mt-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold"
                    >
                        🏆 Empleado del Mes
                    </span>
                </div>

            </div>
        </div>

    </div>
</template>

