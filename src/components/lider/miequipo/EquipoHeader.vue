<script setup>
    import { useUser } from '@/composables/useUser';

    const { user, currentDate } = useUser()

</script>

<template>
    <header class="hidden md:block w-full mb-5">
        <div class="flex items-start justify-between">
            
            <!-- Izquierda -->
            <div>
                <h1 class="text-5xl font-bold text-[#0B1F44]">
                    Mi Equipo
                </h1>

                <p class="mt-3 text-base text-slate-600">
                    Información de tu equipo.
                </p>
            </div>

            <!-- Derecha -->
            <div class="flex items-center gap-4">
                <div class="text-right">
                    <p class="text-slate-500 text-sm">
                        Departamento
                    </p>

                    <p class="text-xl font-bold text-slate-900">
                        {{ user.department }}
                    </p>
                </div>

                <div
                    class="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-xl text-slate-900"
                >
                    {{ user.initials }}
                </div>
            </div>

        </div>
    </header>
</template>

