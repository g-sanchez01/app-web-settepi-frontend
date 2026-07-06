<script setup>
    import { TriangleAlert } from 'lucide-vue-next'
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div class="max-w-lg text-center">
            <TriangleAlert class="mx-auto h-16 w-16 text-amber-500" />

            <h1 class="mt-4 text-8xl font-extrabold text-blue-600">404</h1>

            <h2 class="mt-2 text-3xl font-bold text-slate-800">
                Página no encontrada
            </h2>

            <p class="mt-4 text-lg text-slate-500">
            Lo sentimos, la página que buscas no existe o fue movida.
            </p>

            <router-link
                to="/"
                class="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
                Volver al inicio
            </router-link>
        </div>
    </div>
</template>

