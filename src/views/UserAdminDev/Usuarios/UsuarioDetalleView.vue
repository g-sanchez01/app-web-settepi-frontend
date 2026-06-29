<script setup>
    import UsuarioDetalleHeader from '@/components/admindev/usuarios/UsuarioDetalleHeader.vue';
    import UsuarioDetalleCard from '@/components/admindev/usuarios/UsuarioDetalleCard.vue';
    import UsuarioDetalleCardMobile from '@/components/admindev/usuarios/mobile/UsuarioDetalleCardMobile.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <UsuarioDetalleHeader/>

        <!-- DESKTOP -->
        <div class="mb-8 hidden md:block">
            <UsuarioDetalleCard/>
        </div>

        <!-- MOBILE -->
        <div class="mb-8 block md:hidden">
            <UsuarioDetalleCardMobile/>
        </div>
        
    </div>
</template>

