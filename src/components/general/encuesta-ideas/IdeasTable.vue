<script setup>
    import { ideasTable } from '@/data/general/ideas';
    import { ESTADO_STYLES } from '@/constants/status.constants';
</script>

<template>
    <div class="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm mt-5">
        <table class="min-w-full text-sm text-left">

            <!--HEADER-->
            <thead class="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                    <th class="px-4 py-3 font-semibold">ID</th>
                    <th class="px-4 py-3 font-semibold">Título</th>
                    <th class="px-4 py-3 font-semibold">Fecha y Hora Creación</th>
                    <th class="px-4 py-3 font-semibold">Estado</th>
                    <th class="px-4 py-3 font-semibold">Editar</th>
                    <th class="px-4 py-3 font-semibold">Envíar</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">

                <tr
                    v-for="idea in ideasTable"
                    :key="idea.id"
                    class="hover:bg-gray-50 transition-all duration-200"
                >
                    <td class="px-6 py-4 font-medium text-gray-700">
                        {{ idea.id }}
                    </td>

                    <!--Titulo-->
                    <td class="px-6 py-4 text-gray-800">
                        <div class="font-medium text-gray-900 leading-snug">
                            {{ idea.titulo }}
                        </div>
                    </td>

                    <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
                        {{ idea.fechaCreacion }}
                    </td>

                    <!--ESTADO-->
                    <td class="px-6 py-4">
                        <span
                            class="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold"
                            :class="ESTADO_STYLES[idea.estado]"
                        >
                            {{ idea.estado }}
                        </span>
                    </td>

                    <!-- EDITAR -->
                    <td class="px-6 py-4">
                        <button
                            class="inline-flex items-center justify-center text-blue-500 w-9 h-9 rounded-lg hover:text-blue-300 hover:text-blue-300 transition cursor-pointer"
                            @click="editIdea(idea)"
                        >
                            <i class="pi pi-pencil text-2xl"></i>
                        </button>
                    </td>

                    <!-- ENVIAR -->
                    <td class="px-6 py-4">
                        <button
                            class="inline-flex items-center justify-center text-indigo-400 w-9 h-9 rounded-lg hover:text-indigo-300 hover:text-blue-300 transition cursor-pointer"
                            @click="enviarIdea(idea)"
                        >
                            <i class="pi pi-send text-2xl"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>