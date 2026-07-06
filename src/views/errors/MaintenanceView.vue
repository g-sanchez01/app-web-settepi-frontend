<script setup>
    import { WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

    const reload = () => {
        window.location.reload()
    }
</script>

<template>
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">

        <WrenchScrewdriverIcon class="mb-6 h-16 w-16 text-yellow-500" />

        <h1 class="text-4xl font-bold text-gray-800 md:text-5xl">
            Sitio en mantenimiento
        </h1>

        <p class="mt-4 max-w-md text-gray-600">
            Estamos realizando mejoras para brindarte un mejor servicio.
            Inténtalo nuevamente en unos minutos.
        </p>

        <button
            @click="reload"
            class="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95 cursor-pointer"
        >
            Reintentar
        </button>

    </div>
</template>
