<script setup>
    import PerfilHeader from '@/components/gestor/PerfilHeader.vue';
    import UserCard from '@/components/gestor/UserCard.vue';
</script>

<template>
    <div class="flex-1 p-4 md:p-4 sm:p-6 lg:p-10 lg:ml-72">
        <PerfilHeader/>
        
        <div class="md:mt-0">
            <UserCard />
        </div>
    </div>
</template>

