<script setup>
    import BackButton from '../BackButton.vue';
    import { useRouter } from 'vue-router';
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const goToNuevaIdea = () => {
        router.push(ROUTES.GENERAL.ENCUESTAS.MIS_IDEAS.NUEVA)
    }
</script>

<template>
    <header class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <!--Izquierda-->
        <div class="w-full">

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900">Mis Ideas</h1>

            <div class="flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                <span>Aquí consulta tus ideas.</span>
            </div>
        </div>

        <!--Boton regresar-->
        <BackButton fallback-route="{ name: 'encuestas' }" label="Regresar"/>
       

    </header>

    <!-- Derecha (Botón) -->
    <div class="w-full sm:w-auto flex sm:justify-end">
        <button
            @click="goToNuevaIdea"
            class="w-full sm:w-auto flex items-center justify-center gap-5 bg-green-600 hover:bg-green-700 
            text-white px-5 py-2 rounded-xl shadow-sm transition cursor-pointer"
        >
            <i class="pi pi-plus"></i>
            <span>Nueva idea</span>
        </button>
    </div>

</template>

