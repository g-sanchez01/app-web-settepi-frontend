<script setup>
    import { useUser } from '@/composables/useUser';

    const { user } = useUser()
</script>

<template>
    <div
        class="w-full bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden"
    >

        <!-- Header -->
        <div
            class="h-32 sm:h-36 bg-gradient-to-r from-blue-800 to-blue-500 relative"
        >

            <!-- Avatar -->
            <div
                class="absolute left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 top-16 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center"
            >

                <span
                    class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900"
                >
                    {{ user.initials }}
                </span>

            </div>

        </div>

        <!-- Contenido -->
        <div
            class="pt-20 sm:pt-10 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10"
        >

            <!-- Info principal -->
            <div
                class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 text-center sm:text-left lg:pl-32"
            >

                <div class="w-full">

                    <h2
                        class="text-2xl sm:text-3xl font-bold text-slate-900 break-words"
                    >
                        {{ user.name }}
                    </h2>

                    <p
                        class="text-gray-500 text-base sm:text-lg md:text-xl mt-2"
                    >
                        {{ user.role }}
                    </p>

                    <div
                        class="flex items-center justify-center sm:justify-start gap-2 mt-3 text-gray-400 text-sm sm:text-base"
                    >

                        <i class="pi pi-id-card"></i>

                        <span>
                            {{ user.employeeId }}
                        </span>

                    </div>

                </div>

            </div>

            <!-- Cards info -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 w-full"
            >

                <!-- Email -->
                <div
                    class="bg-gray-100 rounded-2xl px-4 sm:px-6 py-4 min-h-[95px] flex gap-4 items-center"
                >

                    <div class="text-blue-700 text-xl shrink-0">
                        <i class="pi pi-envelope"></i>
                    </div>

                    <div class="min-w-0">

                        <p class="text-sm text-gray-400">
                            Email
                        </p>

                        <p
                            class="text-sm font-medium text-slate-800 break-words"
                        >
                            {{ user.email }}
                        </p>

                    </div>

                </div>

                <!-- Teléfono -->
                <div
                    class="bg-gray-100 rounded-2xl px-4 sm:px-6 py-4 min-h-[95px] flex gap-4 items-center"
                >

                    <div class="text-blue-700 text-xl shrink-0">
                        <i class="pi pi-phone"></i>
                    </div>

                    <div class="min-w-0">

                        <p class="text-sm text-gray-400">
                            Teléfono
                        </p>

                        <p
                            class="text-sm font-medium text-slate-800 break-words"
                        >
                            {{ user.phone }}
                        </p>

                    </div>

                </div>

                <!-- Ubicación -->
                <div
                    class="bg-gray-100 rounded-2xl px-4 sm:px-6 py-4 min-h-[95px] flex gap-4 items-center"
                >

                    <div class="text-blue-700 text-xl shrink-0">
                        <i class="pi pi-map-marker"></i>
                    </div>

                    <div class="min-w-0">

                        <p class="text-sm text-gray-400">
                            Ubicación
                        </p>

                        <p
                            class="text-sm font-medium text-slate-800 break-words"
                        >
                            {{ user.location }}
                        </p>

                    </div>

                </div>

                <!-- Ingreso -->
                <div
                    class="bg-gray-100 rounded-2xl px-4 sm:px-6 py-4 min-h-[95px] flex gap-4 items-center"
                >

                    <div class="text-blue-700 text-xl shrink-0">
                        <i class="pi pi-calendar"></i>
                    </div>

                    <div class="min-w-0">

                        <p class="text-sm text-gray-400">
                            Ingreso
                        </p>

                        <p
                            class="text-sm font-medium text-slate-800 break-words"
                        >
                            {{ user.entryDate }}
                        </p>

                    </div>

                </div>

            </div>

            <!-- Stats -->
            <div class="w-full mt-6 sm:mt-8">

                <div
                    class="bg-gray-50 rounded-3xl py-6 flex flex-col items-center justify-center w-full"
                >

                    <div
                        class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-xl"
                    >
                        <i class="pi pi-calendar"></i>
                    </div>

                    <h3
                        class="text-2xl sm:text-3xl font-bold text-slate-900 mt-3"
                    >
                        {{ user.years }}
                    </h3>

                    <p
                        class="text-gray-500 mt-1 text-sm text-center px-2"
                    >
                        Años en la empresa
                    </p>

                </div>

            </div>

        </div>

    </div>
</template>