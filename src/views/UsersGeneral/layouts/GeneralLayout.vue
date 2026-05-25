<script setup>
    import Sidebar from '@/components/general/Sidebar.vue';
</script>

<template>
    <div class="flex">

        <!--Sidebar-->
        <Sidebar/>

        <!--Contenido-->
        <main class="flex-1 bg-gray-100 min-h-screen p-8">
            <router-view/>
        </main>
    </div>
</template>

