<script setup>
    import { ref } from 'vue';
    import Sidebar from '@/components/general/Sidebar.vue';
    import MobileSidebar from '@/components/general/mobile/MobileSidebar.vue';
    import MobileHeader from '@/components/general/mobile/MobileHeader.vue';

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

        <!--Contenido-->
        <main class="flex-1 bg-gray-100 min-h-screen p-6 md:p-8 pt-24 md:pt-8">
            <router-view/>
        </main>
    </div>
</template>

