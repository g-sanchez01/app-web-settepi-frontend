<script setup>
    import { useRouter } from 'vue-router'

    const props = defineProps({
        label: {
            type: String,
            default: 'Volver'
        },
        fallbackRoute: {
            type: [String, Object],
            default: '/'
        }
    })

    const router = useRouter()

    const goBack = () => {
        // Si hay historial, regresa
        if (window.history.length > 1) {
            router.back()
        } else {
            // Si no, manda a ruta específica
            router.push(props.fallbackRoute)
        }
    }
</script>

<template>
    <button
        @click="goBack"
        class="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg
                text-white bg-blue-500 border border-gray-200
                hover:bg-blue-400 active:scale-95 transition-all duration-200 cursor-pointer"
    >
        <i class="pi pi-arrow-left"></i>
        <span>{{ label }}</span>
    </button>
</template>