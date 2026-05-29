<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AppToast from './components/ui/AppToast.vue';
</script>

<template>
  <AppToast/>

  <RouterView />
</template>

