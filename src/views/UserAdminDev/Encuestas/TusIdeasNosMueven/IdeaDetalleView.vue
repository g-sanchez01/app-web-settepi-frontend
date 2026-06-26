<script setup>
    import IdeaDetalleHeader from '@/components/admindev/encuesta-ideas/IdeaDetalleHeader.vue';
    import IdeaDetalle from '@/components/admindev/encuesta-ideas/IdeaDetalle.vue';
    import IdeaDetalleCardMobile from '@/components/admindev/encuesta-ideas/mobile/IdeaDetalleCardMobile.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <IdeaDetalleHeader/>

        <!-- Desktop -->
        <div class="hidden md:block">
            <IdeaDetalle />
        </div>

        <!-- Mobile -->
        <div class="block md:hidden">
            <IdeaDetalleCardMobile />
        </div>

    </div>
</template>

