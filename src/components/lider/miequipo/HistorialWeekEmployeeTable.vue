<script setup>
    import { onMounted } from 'vue'
    import { useWeekEmployee } from '@/composables/useWeekEmployee';
    import { formatMonthYearFromNumbers } from '@/utils/formatDate';

    const { historial, fetchHistorial } = useWeekEmployee()

    const getIniciales = (nombre) => {
        if (!nombre) return 'NA'

        return nombre
            .split(' ')
            .slice(0, 2)
            .map(n => n[0])
            .join('')
            .toUpperCase()
    }

    onMounted(async () => {
        await fetchHistorial()
    })

</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <!-- Header -->
        <div class="px-5 py-4 border-b border-slate-200">
            <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
                Historial Empleado del Mes
            </h2>
        </div>

        <!-- Lista -->
        <div class="divide-y divide-slate-100">

            <!-- Estado vacío -->
            <div
                v-if="historial.length === 0"
                class="flex flex-col items-center justify-center py-14 px-6 text-center"
            >
                <div
                    class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl mb-4"
                >
                    🏆
                </div>

                <h3 class="text-lg font-semibold text-slate-700">
                    Aún no hay historial
                </h3>

                <p class="mt-2 text-sm text-slate-500 max-w-md">
                    Todavía no se ha registrado ningún
                    <strong>Empleado del Mes</strong>.
                    Cuando se realice la primera asignación,
                    aparecerá aquí el historial.
                </p>
            </div>

            <div
                v-else
                v-for="empleado in historial"
                :key="`${empleado.numero_nomina}-${empleado.mes}-${empleado.anio}`"
                class="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
                       hover:bg-slate-50 transition"
            >

                <!-- LEFT -->
                <div class="flex items-center gap-4">

                    <!-- Avatar -->
                    <div
                        class="w-11 h-11 sm:w-12 sm:h-12 rounded-full 
                               bg-gradient-to-br from-[#4F8FCF] to-yellow-400 
                               flex items-center justify-center text-white font-bold text-sm"
                    >
                        {{ getIniciales(empleado.nombre) }}
                    </div>

                    <!-- INFO -->
                    <div>
                        <p class="font-semibold text-slate-900 text-sm sm:text-base">
                            {{ empleado.nombre }}
                        </p>

                        <p class="text-xs sm:text-sm text-slate-500">
                            {{ empleado.puesto }}
                        </p>
                    </div>
                </div>

                <!-- RIGHT -->
                <div class="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">

                    <p class="text-sm font-medium text-slate-900">
                        {{ formatMonthYearFromNumbers(empleado.mes, empleado.anio) }}
                    </p>

                    <span
                        class="inline-flex items-center gap-1 px-3 py-1 rounded-full 
                               bg-yellow-100 text-yellow-700 text-xs font-semibold"
                    >
                        🏆 <span class="hidden sm:inline">Empleado del Mes</span>
                        <span class="sm:hidden">Top</span>
                    </span>

                </div>

            </div>

        </div>

    </div>
</template>

