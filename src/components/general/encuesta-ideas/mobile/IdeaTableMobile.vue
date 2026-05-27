<script setup>
import { ideasTable } from '@/data/general/ideas'
import { ESTADO_STYLES } from '@/constants/status.constants'

</script>

<template>
    <div class="w-full mt-5">

        <div class="md:hidden space-y-3">
            <div
                v-for="idea in ideasTable"
                :key="idea.id"
                class="bg-white border border-gray-100 rounded-xl shadow-sm p-4"
            >
                <div class="flex justify-between items-start gap-3">
                    
                    <div>
                        <p class="text-xs text-gray-400">ID</p>
                        <p class="font-semibold text-gray-700">{{ idea.id }}</p>
                    </div>

                    <button
                        class="text-blue-500 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-50"
                        @click="editIdea(idea)"
                    >
                        <i class="pi pi-pencil text-xl"></i>
                    </button>

                </div>

                <div class="mt-2">
                    <p class="text-xs text-gray-400">Título</p>
                    <p class="text-gray-900 font-medium leading-snug">
                        {{ idea.titulo }}
                    </p>
                </div>

                <div class="mt-2 flex justify-between items-center">
                    
                    <div>
                        <p class="text-xs text-gray-400">Fecha</p>
                        <p class="text-sm text-gray-600">
                            {{ idea.fechaCreacion }}
                        </p>
                    </div>

                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[idea.estado]"
                    >
                        {{ idea.estado }}
                    </span>

                </div>
            </div>
        </div>

    </div>
</template>