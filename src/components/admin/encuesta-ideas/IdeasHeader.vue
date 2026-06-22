<script setup>
    import BackButton from '@/components/admin/BackButton.vue';

</script>

<template>
    <header class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <!--Izquierda-->
        <div class="w-full">

            <h1 class="text-2xl md:text-5xl font-bold text-[#0B1F44]">Tus Ideas Nos Mueven</h1>

            <div class="flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                <span>Aquí gestiona las ideas.</span>
            </div>
        </div>

        <!--Boton regresar-->
        <BackButton fallback-route="{ name: 'encuestas' }" label="Regresar"/>
       

    </header>

    

</template>

