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
    <div class="w-full max-w-sm md:max-w-md bg-white rounded-3xl border border-gray-200 p-4 md:p-5">

        <!--Header-->
        <div class="flex items-center gap-3 mb-5">

            <div class="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <i class="pi pi-trophy text-yellow-500 text-xl"></i>
            </div>

            <div>
                <h2 class="text-xl font-bold text-[#0F172A]">Empleado del Mes</h2>
                <p class="text-sm text-gray-500">{{ formatMonthYear(colaborador?.fecha_asignacion) }}</p>
            </div>

        </div>

        <!--Card Principal-->
        <div
           class="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]
                border border-yellow-200
                rounded-3xl
                p-8
                flex flex-col items-center text-center" 
        >
            <!--Avatar-->
            <div
                class="w-28 h-28 rounded-full
                    bg-gradient-to-br from-blue-500 to-yellow-400
                    flex items-center justify-center
                    text-white text-5xl font-bold
                    border-4 border-white shadow-lg"
            >
                MG
            </div>

            <!--Puesto-->
            <h3 class="mt-5 text-xl md:text-2xl font-bold text-slate-800">{{ colaborador?.nombre }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ colaborador?.puesto_real }}</p>

            <!--Estrellas-->
            <div class="flex items-center gap-1 mt-3 text-yellow-400">
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
            </div>

        </div>

        <!--Mensajes
        <div class="mt-6">

            <h4 class="font-semibold text-slate-700 mb-3">
                Dejar un mensaje de felicitación
            </h4>

            --Input
            <div class="flex gap-2">
                <input 
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    class="flex-1 h-11 px-4 rounded-2xl border border-gray-200
                        outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                   class="w-11 h-11 rounded-2xl bg-blue-600
                    hover:bg-blue-700 transition
                    flex items-center justify-center text-white" 
                >
                    <i class="pi pi-send"></i>
                </button>

            </div>

        </div>-->

        <!--Lista de Mensajes
        <div class="mt-5 space-y-3">

            <div
                v-for="item in mensajes"
                :key="item.id"
                class="bg-gray-50 rounded-2xl p-4"
            >
                <div class="flex justify-between items-center">
                    <h5 class="font-semibold text-sm">{{ item.nombre }}</h5>
                    <span class="text-xs text-gray-400">{{  item.tiempo }}</span>
                </div>

                <p class="text-sm text-gray-600 mt-2">{{  item.mensaje }}</p>
                
            </div>

        </div>-->

    </div>
</template>

