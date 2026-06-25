<script setup>
    defineProps({
        open: Boolean
    })

    defineEmits(['toggle'])
</script>

<template>

    <header
        class="
            md:hidden
            fixed top-0 left-0 right-0
            h-18
            bg-[#005B96]
            z-50
            flex items-center justify-between
            px-6
            shadow-lg
        "
    >

        <!-- Logo -->
        <img
            src="/images/logo.png"
            alt="Settepi"
            class="w-32"
        >

        <!-- Botón hamburguesa -->
        <button
            @click="$emit('toggle')"
            class="
                w-11 h-11
                rounded-2xl
                bg-white/10
                flex items-center justify-center
                text-white
            "
        >
            <i
                :class="open ? 'pi pi-times' : 'pi pi-bars'"
                class="text-2xl"
            ></i>
        </button>

    </header>

</template>