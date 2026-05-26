<script setup>
    const user = {
        initials: 'CS',
        name: 'Carolina Sánchez',
        role: 'Desarrollador Jr',
        employeeId: '19201051',
        email: 'g.sanchez@settepi.com',
        phone: '+52 55 1234 5678',
        location: 'Monterrey, Nuevo León',
        entryDate: '15 de marzo, 2020',
        years: 6,
        courses: 8
    }
</script>

<template>
    <div class="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200">

        <!-- Header azul -->
        <div class="h-30 bg-gradient-to-r from-blue-800 to-blue-500 relative">

            <!-- Avatar -->
            <div
                class="absolute left-10 top-24 w-36 h-36 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center"
            >
                <span class="text-5xl font-bold text-slate-900">
                    {{ user.initials }}
                </span>
            </div>

        </div>

        <!-- Contenido -->
        <div class="pt-5 px-10 pb-10">

            <!-- Top -->
            <div class="flex items-start justify-between flex-wrap gap-6 pl-44">

                <div>

                    <h2 class="text-3xl font-bold text-slate-900">
                        {{ user.name }}
                    </h2>

                    <p class="text-gray-500 text-xl mt-2">
                        {{ user.role }}
                    </p>

                    <div class="flex items-center gap-2 mt-3 text-gray-400">
                        <i class="pi pi-id-card"></i>
                        <span>{{ user.employeeId }}</span>
                    </div>

                </div>

            </div>

            <!-- Información -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">

                <!-- Email -->
                <div class="bg-gray-100 rounded-2xl p-5 flex gap-4 items-start">

                    <div class="text-blue-700 text-xl">
                        <i class="pi pi-envelope"></i>
                    </div>

                    <div>
                        <p class="text-sm text-gray-400">Email</p>

                        <p class="font-medium text-slate-800">
                            {{ user.email }}
                        </p>
                    </div>

                </div>

                <!-- Teléfono -->
                <div class="bg-gray-50 rounded-2xl p-5 flex gap-4 items-start">

                    <div class="text-blue-700 text-xl">
                        <i class="pi pi-phone"></i>
                    </div>

                    <div>
                        <p class="text-sm text-gray-400">Teléfono</p>

                        <p class="font-medium text-slate-800">
                            {{ user.phone }}
                        </p>
                    </div>

                </div>

                <!-- Ubicación -->
                <div class="bg-gray-50 rounded-2xl p-5 flex gap-4 items-start">

                    <div class="text-blue-700 text-xl">
                        <i class="pi pi-map-marker"></i>
                    </div>

                    <div>
                        <p class="text-sm text-gray-400">Ubicación</p>

                        <p class="font-medium text-slate-800">
                            {{ user.location }}
                        </p>
                    </div>

                </div>

                <!-- Ingreso -->
                <div class="bg-gray-50 rounded-2xl p-5 flex gap-4 items-start">

                    <div class="text-blue-700 text-xl">
                        <i class="pi pi-calendar"></i>
                    </div>

                    <div>
                        <p class="text-sm text-gray-400">Ingreso</p>

                        <p class="font-medium text-slate-800">
                            {{ user.entryDate }}
                        </p>
                    </div>

                </div>

            </div>

            <!-- Stats -->
            <div class="w-full mt-8">

                <!-- Años -->
                <div class="bg-gray-50 rounded-3xl py-6 flex flex-col items-center justify-center w-full">

                    <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-xl">
                        <i class="pi pi-calendar"></i>
                    </div>

                    <h3 class="text-3xl font-bold text-slate-900 mt-3">
                        {{ user.years }}
                    </h3>

                    <p class="text-gray-500 mt-1 text-sm">
                        Años en la empresa
                    </p>

                </div>


            </div>

        </div>

    </div>
</template>