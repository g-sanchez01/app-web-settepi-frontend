<script setup>
    import { useToast } from '@/composables/ui/useToast';

    const { toasts, removeToast } = useToast()
</script>

<template>
  <div class="fixed top-[90px] md:top-4 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 right-auto md:right-4 z-50 w-[calc(100vw-1rem)] max-w-sm">
    
    <TransitionGroup name="toast" tag="div" class="space-y-2">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="px-4 py-8 rounded shadow text-white font-bold flex items-center justify-between"
        :class="{
          'bg-emerald-400': t.type === 'success',
          'bg-red-500': t.type === 'error',
          'bg-blue-500': t.type === 'info'
        }"
      >
        <span class="flex-1 break-words">{{ t.message }}</span>

        <button class="ml-3" @click="removeToast(t.id)">✕</button>
      </div>
    </TransitionGroup>

  </div>
</template>

<style scoped>
    
    /* ENTRADA */
    .toast-enter-from {
        opacity: 0;
        transform: translateY(-20px);
    }
    .toast-enter-to {
        opacity: 1;
        transform: translateY(0);
    }
    .toast-enter-active {
        transition: all 0.3s ease;
    }

    /* SALIDA */
    .toast-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
    .toast-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
    .toast-leave-active {
        transition: all 0.3s ease;
    }

    /* REORDENAMIENTO (cuando hay varios) */
    .toast-move {
        transition: transform 0.3s ease;
    }

</style>