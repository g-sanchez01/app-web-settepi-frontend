<script setup>
    import { ref } from 'vue';
    import Sidebar from '@/components/gestor/Sidebar.vue';
    import MobileSidebar from '@/components/gestor/mobile/MobileSidebar.vue';
    import MobileHeader from '@/components/gestor/mobile/MobileHeader.vue';

    const sidebarOpen = ref(false)
</script>

<template>
    <div class="min-h-screen bg-gray-100">

        <!--HEADER MOBILE-->
        <MobileHeader
            :open="sidebarOpen"
            @toggle="sidebarOpen = !sidebarOpen"  
        />


        <!--SIDEBAR MOBILE-->
        <MobileSidebar
            :open="sidebarOpen"
            @close="sidebarOpen = false"
        />

        <!--Overlay Mobile-->
        <div
            v-if="sidebarOpen"
            @click="sidebarOpen = false"
            class="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>

        <!--SIDEBAR DESKTOP-->
        <Sidebar :open="sidebarOpen"/>
    </div>
</template>
