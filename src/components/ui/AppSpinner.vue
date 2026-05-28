<script setup>
    defineProps({
        show: Boolean,

        text: {
            type: String,
            default: 'Iniciando sesión...'
        },

        logo: {
            type: String,
            default: '/images/logo.png' // por defecto el del login
        }
    })
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/10 backdrop-blur-md"
    >

        <img :src="logo" alt="loading" class="w-40 h-40 object-contain animate-[heartbeat_2.5s_ease-in-out_infinite]">
        <p class="text-slate-100 mt-4 text-lg font-bold tracking-wide">
            {{ text }}
        </p>

    </div>
</template>

<style>
@keyframes heartbeat {
    0% {
        transform: scale(1);
    }

    15% {
        transform: scale(1.3);
    }

    30% {
        transform: scale(0.9);
    }

    45% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    75% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1);
    }
}
</style>
