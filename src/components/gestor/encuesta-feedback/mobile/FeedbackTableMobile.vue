<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { formatDateTime } from '@/utils/formatDate';
    import { ESTADO_STYLES } from '@/constants/status.constants'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const props = defineProps({
        feedbacks: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    })

    const verFeedback = (feedbacks) => {
        // redireccion
        router.push(ROUTES.GESTOR.ENCUESTAS.FEEDBACKS.DETALLE(feedbacks.idfeedback))
    }

</script>

<template>
    <div class="w-full mt-5">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />

        <div class="md:hidden space-y-3">
            <div
                v-for="feedback in feedbacks"
                :key="feedback.idfeedback"
                class="bg-white border border-gray-100 rounded-xl shadow-sm p-4"
            >
                <!-- Header -->
                <div class="flex justify-between items-start gap-3">
                    <div>
                        <p class="text-xs text-gray-400">ID</p>
                        <p class="font-semibold text-gray-700">
                            {{ feedback.idfeedback }}
                        </p>
                    </div>

                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-lg text-blue-500 hover:bg-blue-100 transition"
                        @click="verFeedback(feedback)"
                    >
                        <i class="pi pi-eye text-4xl"></i>
                    </button>
                </div>

                <!-- Estado -->
                <div class="mt-3">
                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[feedback.estado]"
                    >
                        {{ feedback.estado }}
                    </span>
                </div>

                <!-- Título -->
                <div class="mt-3">
                    <p class="text-xs text-gray-400">Título</p>
                    <p class="text-gray-900 font-medium">
                        {{ feedback.tipo }}
                    </p>
                </div>

                <!-- Datos -->
                <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <p class="text-xs text-gray-400">Area Dirigida</p>
                        <p class="font-medium text-gray-700">
                            {{ feedback.area }}
                        </p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-400">Comentario</p>
                        <p class="font-medium text-gray-700">
                            {{ feedback.comentario }}
                        </p>
                    </div>

                    <div class="col-span-2">
                        <p class="text-xs text-gray-400">Fecha y Hora</p>
                        <p class="text-gray-600">
                            {{ formatDateTime(feedback.fecha) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>