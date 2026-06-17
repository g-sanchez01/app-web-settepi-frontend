<script setup>
    import BackButton from '../BackButton.vue';
</script>

<template>
    <header class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <!--Izquierda-->
        <div class="w-full">

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900">Nueva Idea</h1>

            <div class="flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                <span>Queremos conocer tu nueva idea. Completa el formulario.</span>
            </div>
        </div>

        <BackButton fallback-route="{ name: 'mis-ideas' }" label="Regresar"/>

       

    </header>

</template>

