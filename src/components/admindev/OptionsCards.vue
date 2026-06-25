<script setup>
    import { accesos } from '@/data/admindev/accesos';
</script>

<template>
    <section class="w-full">

        <!--Titulo-->
        <div class="mb-5">
            <h2 class="text-2xl md:text-3xl font-bold text-[#0B1F44]">
                Accesos Rápidos
            </h2>
        </div>

        <!--Cards-->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5
                    max-w-[420px] md:max-w-full
                    mx-auto md:mx-0"">

            <router-link
                v-for="item in accesos"
                :key="item.titulo"
                :to="item.ruta"
                class="bg-white border border-gray-200 rounded-3xl
                    px-4 py-4
                    md:px-5 md:py-4 gap-5
                    hover:shadow-xl hover:-translate-y-1
                    transition-all duration-300"
            >

                <!--Icono-->
                <div
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4"
                    :class="item.color"
                >
                    <component :is="item.icono" class="w-6 h-6"/>
                </div>

                 <!-- Texto -->
                <h3 class="md:text-lg text-md font-semibold text-[#0B1F44]">
                    {{ item.titulo }}
                </h3>

                <p class="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                    {{ item.descripcion }}
                </p>
            </router-link>

        </div>

    </section>
</template>