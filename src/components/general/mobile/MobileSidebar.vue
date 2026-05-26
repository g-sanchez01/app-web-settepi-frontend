<script setup>
    import { useRouter } from 'vue-router'
    import { watch } from 'vue'

    const props = defineProps({
        open: Boolean
    })

    defineEmits(['close'])

    const router = useRouter()

    // Bloquea scroll del body cuando el menú está abierto
    watch(
        () => props.open,
        (value) => {
            document.body.style.overflow = value ? 'hidden' : 'auto'
        }
    )

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        router.push('/login')
    }
</script>

<template>

    <!-- Overlay -->
    <div
        v-if="open"
        @click="$emit('close')"
        class="fixed inset-0 bg-black/40 z-40 md:hidden"
    ></div>

    <!-- Sidebar mobile -->
    <aside
    class="
        fixed top-18 left-0 z-50
        w-72
        max-h-[calc(100vh-4.5rem)]
        overflow-y-auto
        bg-[#005B96]
        text-white
        rounded-br-3xl
        shadow-2xl
        transform transition-transform duration-300
        md:hidden
    "
    :class="open ? 'translate-x-0' : '-translate-x-full'"
>

    <!-- Logo -->
    <div class="p-6 border-b border-white/10">
        <img
            src="/images/logo.png"
            class="w-30 md:w-40"
        />
    </div>

    <!-- Menu -->
    <nav class="mt-4 px-4 space-y-2">

        <!-- links -->

    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-white/10 mt-4">

        <button
            @click="cerrarSesion"
            class="
                w-full
                flex items-center justify-center gap-3
                px-4 py-3
                rounded-2xl
                bg-white/10
                hover:bg-red-500
                transition
            "
        >
            <i class="pi pi-sign-out"></i>
            Cerrar sesión
        </button>

    </div>

</aside>

</template>