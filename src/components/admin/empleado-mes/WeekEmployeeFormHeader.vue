<script setup>
    import BackButton from '@/components/admin/BackButton.vue';

</script>

<template>
    <header class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <!--Izquierda-->
        <div class="w-full">

            <h1 class="text-2xl md:text-5xl font-bold text-[#0B1F44]">Empleado del Mes</h1>
        </div>

        <BackButton fallback-route="{ name: 'empleado-mes' }" label="Regresar"/>
       

    </header>


</template>

