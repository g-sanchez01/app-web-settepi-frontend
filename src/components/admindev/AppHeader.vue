<script setup>
    import { useUser } from '@/composables/useUser';

    const { user, currentDate } = useUser()
</script>

<template>
    <header class="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">

        <!--Izquierda-->
        <div class="text-left">
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900">Buen día, {{ user.name }}</h1>

            <div class="flex items-center md:justify-start gap-2 mt-3 text-slate-500 text-sm md:text-base">
                <i class="pi pi-clock"></i>
                <span>Panel del Desarrollador | {{ currentDate }}</span>
            </div>
        </div>

        <!--Derecha (solo tamaño md en adelante)-->
        <div class="hidden md:flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-right">

            <div>
                <p class="text-slate-500 text-sm">Departamento</p>
                <p class="text-lg md:text-2xl font-bold text-slate-900">{{ user.department }}</p>
            </div>

            <div
                class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-lg md:text-2xl text-slate-900"
            >
                {{ user.initials }}
            </div>

        </div>

    </header>


</template>

