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
                <span> {{ currentDate }}</span>
            </div>
        </div>

        <!--Derecha (solo tamaño md en adelante)-->
        <div class="hidden md:flex items-center gap-5 text-right">

            <!-- Info principal -->
            <div class="flex flex-col">

                <!-- Departamento (principal) -->
                <p class="text-slate-500 text-sm">Departamento</p>
                <p class="text-lg md:text-2xl font-bold text-slate-900">
                    {{ user.department }}
                </p>

                <!-- Área (secundaria, debajo) -->
                <p
                    v-if="user.department !== user.area"
                    class="mt-1 items-center text-xs md:text-sm font-medium text-slate-600 bg-slate-100  rounded-md "
                >
                    {{ user.area }}
                </p>

            </div>

            <!-- Avatar -->
            <div
                class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-lg md:text-2xl text-slate-900"
            >
                {{ user.initials }}
            </div>

        </div>

    </header>


</template>

