<script setup>
    import EncuestasHeader from '@/components/lider/EncuestasHeader.vue';
    import EncuestaCard from '@/components/lider/EncuestaCard.vue';
    import { encuestas } from '@/data/lider/encuestas';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <EncuestasHeader/>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <EncuestaCard
                v-for="encuesta in encuestas"
                    :key="encuesta.id"
                    :encuesta="encuesta"
            />
        </div>

    </div>
</template>

