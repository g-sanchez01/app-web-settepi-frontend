<script setup>
import { feedbacksTable } from '@/data/general/feedbacks'
import { ESTADO_STYLES } from '@/constants/status.constants'
</script>

<template>
    <div class="w-full mt-5">

        <!-- MOBILE -->
        <div class="md:hidden space-y-4">

            <div
                v-for="feedback in feedbacksTable"
                :key="feedback.id"
                class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >

                <!-- HEADER -->
                <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">

                    <div class="flex items-center gap-2">
                        <div
                            class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 
                                   flex items-center justify-center"
                        >
                            <i class="pi pi-comment text-lg"></i>
                        </div>

                        <div>
                            <p class="text-xs text-gray-400">
                                Feedback #{{ feedback.id }}
                            </p>

                            <p class="font-semibold text-gray-800">
                                {{ feedback.tipo }}
                            </p>
                        </div>
                    </div>

                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[feedback.estado]"
                    >
                        {{ feedback.estado }}
                    </span>

                </div>

                <!-- CONTENT -->
                <div class="p-4 space-y-4">

                    <!-- AREA + PLANTA -->
                    <div class="flex flex-wrap gap-2">

                        <div
                            class="inline-flex items-center gap-2 
                                   bg-gray-100 text-gray-700 
                                   px-3 py-1.5 rounded-full text-xs font-medium"
                        >
                            <i class="pi pi-briefcase"></i>
                            {{ feedback.area }}
                        </div>

                        <div
                            class="inline-flex items-center gap-2 
                                   bg-indigo-50 text-indigo-700 
                                   px-3 py-1.5 rounded-full text-xs font-medium"
                        >
                            <i class="pi pi-building"></i>
                            {{ feedback.planta }}
                        </div>

                    </div>

                    <!-- COMENTARIO -->
                    <div>
                        <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                            Comentario
                        </p>

                        <p class="text-sm text-gray-700 leading-relaxed line-clamp-4">
                            {{ feedback.comentario }}
                        </p>
                    </div>

                    <!-- FOOTER -->
                    <div
                        class="flex items-center justify-between 
                               pt-3 border-t border-gray-100"
                    >

                        <div class="flex items-center gap-2 text-sm text-gray-500">
                            <i class="pi pi-calendar"></i>
                            <span>{{ feedback.fechaCreacion }}</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>