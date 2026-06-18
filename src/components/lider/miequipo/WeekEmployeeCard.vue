<script setup>
    import { onMounted } from 'vue';
    import { useWeekEmployee } from '@/composables/useWeekEmployee';

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
    <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
        <div class="flex flex-col md:flex-row items-center gap-6">
            
            <!-- Foto -->
            <div class="shrink-0">
                <img
                    v-if="colaborador?.foto"
                    :src="colaborador.foto"
                    :alt="colaborador.nombre"
                    class="w-28 h-28 rounded-full object-cover border-4 border-yellow-400"
                >

                <div
                    v-else
                    class="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-yellow-400 flex items-center justify-center text-white font-bold text-4xl border-4 border-white shadow-lg"
                >
                    {{ getIniciales(colaborador?.nombre) }}
                </div>
            </div>

            <!-- Información -->
            <div class="flex-1 text-center md:text-left">
                <div class="flex items-center gap-3 justify-center md:justify-start">
                    <div
                        class="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center"
                    >
                        <i class="pi pi-trophy text-yellow-500 text-xl"></i>
                    </div>

                    <div>
                        <h2 class="text-3xl font-bold text-[#0B1F44]">
                            Empleado del Mes
                        </h2>

                        <p class="text-slate-500">
                            {{ colaborador?.fecha }}
                        </p>
                    </div>
                </div>

                <div class="mt-5">
                    <h3 class="text-2xl font-bold text-slate-900">
                        {{ colaborador?.nombre }}
                    </h3>

                    <p class="text-lg text-slate-600 mt-1">
                        {{ colaborador?.puesto }}
                    </p>
                </div>
            </div>

            <!-- Reconocimiento -->
            <div class="text-center">
                <div class="text-yellow-500 text-2xl">
                    ★★★★★
                </div>

                <p class="text-sm text-slate-500 mt-1">
                    Reconocimiento
                </p>
            </div>

        </div>
    </div>
</template>

