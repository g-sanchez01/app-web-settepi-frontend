<script setup>
    import { onMounted } from 'vue';
    import { useWeekEmployee } from '@/composables/useWeekEmployee';
    import { formatMonthYear } from '@/utils/formatDate';

    const { colaborador, fetchWeekEmploye } = useWeekEmployee()

    onMounted(() => {
        fetchWeekEmploye()
    })

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
    <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-6">

        <!-- ESTADO VACÍO -->
        <div v-if="!colaborador?.nombre" class="flex flex-col items-center justify-center py-10 text-center">

            <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <i class="pi pi-trophy text-slate-300 text-3xl"></i>
            </div>

            <h2 class="text-lg sm:text-xl font-bold text-slate-700">
                Empleado del mes no asignado
            </h2>

            <p class="text-slate-500 mt-1 max-w-sm text-sm sm:text-base">
                Aún no se ha reconocido a ningún colaborador este mes.
            </p>

            <div class="mt-5 text-xs text-slate-400">
                En cuanto se asigne, aparecerá aquí automáticamente ✨
            </div>

        </div>

        <!-- ESTADO CON DATOS -->
        <div v-else class="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

            <!-- Foto -->
            <div class="shrink-0 flex justify-center w-full md:w-auto">
                <img
                    v-if="colaborador?.foto"
                    :src="colaborador.foto"
                    :alt="colaborador.nombre"
                    class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-yellow-400"
                >

                <div
                    v-else
                    class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-400 to-yellow-400 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl border-4 border-white shadow-lg"
                >
                    {{ getIniciales(colaborador?.nombre) }}
                </div>
            </div>

            <!-- Información -->
            <div class="flex-1">
                <div class="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                    <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                        <i class="pi pi-trophy text-yellow-500 text-lg sm:text-xl"></i>
                    </div>

                    <div>
                        <h2 class="text-2xl sm:text-3xl font-bold text-[#0B1F44]">
                            Empleado del Mes
                        </h2>

                        <p class="text-slate-500 text-sm sm:text-base">
                            {{ formatMonthYear(colaborador?.fecha_asignacion) }}
                        </p>
                    </div>
                </div>

                <div class="mt-4 sm:mt-5">
                    <h3 class="text-xl sm:text-2xl font-bold text-slate-900">
                        {{ colaborador?.nombre }}
                    </h3>

                    <p class="text-base sm:text-lg text-slate-600 mt-1">
                        {{ colaborador?.puesto_real }}
                    </p>
                </div>
            </div>

            <!-- Reconocimiento -->
            <div class="text-center mt-3 md:mt-0">
                <div class="text-yellow-500 text-xl sm:text-2xl">
                    ★★★★★
                </div>

                <p class="text-xs sm:text-sm text-slate-500 mt-1">
                    Reconocimiento
                </p>
            </div>

        </div>
    </div>
</template>

