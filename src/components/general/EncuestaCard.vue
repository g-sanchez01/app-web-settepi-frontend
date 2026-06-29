<script setup>
    import { useRouter } from 'vue-router';

    const props = defineProps({
        encuesta: Object
    })

    const router = useRouter()

    const irEncuesta = () => {
        router.push(props.encuesta.ruta)
    }

</script>

<template>
    <section class="w-full">

        <div class="bg-white border border-gray-200 rounded-3xl shadow-sm w-full mt-5
                p-4 md:p-6">

            <!-- HEADER -->
            <div class="flex items-start gap-4">

                <!-- ICONO -->
                <div class="flex flex-col  ">
                    <div :class="[
                        encuesta.colorIcono,
                        'w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0'
                    ]"
                >
                    <i
                        :class="[
                            encuesta.icono,
                            'pi text-white text-xl md:text-3xl'
                        ]"
                    ></i>
                </div>

                <!-- TEXTO -->
                <div class="mt-3">

                    <h2 class="text-base md:text-2xl font-semibold text-[#0B1F44] leading-snug">
                        {{ encuesta.titulo }}
                    </h2>

                    <p class="text-gray-500 text-xs md:text-sm mt-1">
                        {{ encuesta.descripcion }}
                    </p>

                </div>
            </div>

            </div>

            <!-- INFO (solo desktop) -->
            <div
                class="hidden md:flex items-center gap-6 text-gray-500 mt-6"
            >
                <div class="flex items-center gap-2">
                    <i class="pi pi-file"></i>
                    <span>{{ encuesta.preguntas }} preguntas</span>
                </div>

                <div class="flex items-center gap-2">
                    <i class="pi pi-clock"></i>
                    <span>{{ encuesta.duracion }}</span>
                </div>
            </div>

            <!-- FOOTER SOLO DESKTOP -->
            <div
                class="hidden md:flex border-t border-gray-200 pt-4 items-center justify-between mt-6"
            >

                <button
                    @click="irEncuesta"
                    class="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold px-6 py-3 rounded-2xl transition cursor-pointer"
                >
                    Exprésate
                </button>
            </div>

            <!-- BOTÓN SOLO MÓVIL (tipo card accesos rápidos) -->
            <button
                @click="irEncuesta"
                class="md:hidden mt-4 w-full text-left"
            >
                <div class="flex items-center justify-between text-[#1D4ED8] font-semibold">
                    <span>Entrar</span>
                    <i class="pi pi-arrow-right"></i>
                </div>
            </button>

        </div>

    </section>
</template>
