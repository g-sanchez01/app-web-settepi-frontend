<script setup>
    import FeedbackDetalleHeader from '@/components/gestor/encuesta-feedback/FeedbackDetalleHeader.vue';
    import FeedbackDetalle from '@/components/gestor/encuesta-feedback/FeedbackDetalle.vue';

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <FeedbackDetalleHeader/>

        <!-- Desktop -->
        <div class="hidden md:block">
            <FeedbackDetalle />
        </div>
    </div>
</template>
