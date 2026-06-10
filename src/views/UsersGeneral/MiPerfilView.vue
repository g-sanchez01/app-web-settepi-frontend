<script setup>
    import PerfilHeader from '@/components/general/PerfilHeader.vue';
    import UserCard from '@/components/general/UserCard.vue';
</script>

<template>
    <div class="flex-1 p-4 md:ml-72 overflow-x-hidden">
        <PerfilHeader/>

        <div class="md:mt-0">
            <UserCard />
        </div>
    </div>
</template>

