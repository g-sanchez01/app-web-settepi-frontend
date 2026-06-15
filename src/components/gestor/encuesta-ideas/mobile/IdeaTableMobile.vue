<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const props = defineProps({
        ideas: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    })

    const verIdea = (idea) => {
        // redireccion
        router.push(ROUTES.GESTOR.ENCUESTAS.IDEAS.DETALLE(idea.idRegistroIdea))
    }

</script>

<template>
    <div class="w-full mt-5">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />

        <div class="md:hidden space-y-3">
            <div
                v-for="idea in ideas"
                :key="idea.idRegistroIdea"
                class="bg-white border border-gray-100 rounded-xl shadow-sm p-4"
            >
                <!-- Header -->
                <div class="flex justify-between items-start gap-3">
                    <div>
                        <p class="text-xs text-gray-400">ID</p>
                        <p class="font-semibold text-gray-700">
                            {{ idea.idRegistroIdea }}
                        </p>
                    </div>

                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-lg text-blue-500 hover:bg-blue-100 transition"
                        @click="verIdea(idea)"
                    >
                        <i class="pi pi-eye text-4xl"></i>
                    </button>
                </div>

                <!-- Estado -->
                <div class="mt-3">
                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[idea.estado]"
                    >
                        {{ idea.estado }}
                    </span>
                </div>

                <!-- Título -->
                <div class="mt-3">
                    <p class="text-xs text-gray-400">Título</p>
                    <p class="text-gray-900 font-medium">
                        {{ idea.tituloIdea }}
                    </p>
                </div>

                <!-- Datos -->
                <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <p class="text-xs text-gray-400">Nómina</p>
                        <p class="font-medium text-gray-700">
                            {{ idea.nomina }}
                        </p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-400">Zona</p>
                        <p class="font-medium text-gray-700">
                            {{ idea.zona }}
                        </p>
                    </div>

                    <div class="col-span-2">
                        <p class="text-xs text-gray-400">Departamento</p>
                        <p class="font-medium text-gray-700">
                            {{ idea.departamento }}
                        </p>
                    </div>

                    <div class="col-span-2">
                        <p class="text-xs text-gray-400">Fecha y Hora</p>
                        <p class="text-gray-600">
                            {{ formatDateTime(idea.fecha) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>