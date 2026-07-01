<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(['filter'])

    const filters = ref({
        idRegistroIdea: '',
        tituloIdea: '',
        fecha: '',
        estado: ''
    })

    const aplicarFiltros = () => {
        emit('filter', { ...filters.value })
    }

    const limpiarFiltros = () => {
        filters.value = {
            idRegistroIdea: '',
            tituloIdea: '',
            fecha: '',
            estado: ''
        }

        emit('filter', { ...filters.value })
    }

</script>

<template>
    <div class="bg-white p-4 rounded-lg shadow-sm mt-5">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <!-- ID -->
            <input
                v-model="filters.idRegistroIdea"
                type="text"
                placeholder="ID"
                class="border rounded-lg px-3 py-2"
            />

            <!-- Titulo -->
            <input
                v-model="filters.tituloIdea"
                type="text"
                placeholder="Titulo"
                class="border rounded-lg px-3 py-2"
            />

            <!-- Tipo -->
            <select
                v-model="filters.estado"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todos los estado</option>
                <option value="ENVIADA">ENVIADA</option>
                <option value="EN PROCESO">EN PROCESO</option>
                <option value="APROBADA">APROBADA</option>
                <option value="RECHAZADA">RECHAZADA</option>
            </select>

            <!-- Fecha -->
            <input
                v-model="filters.fecha"
                type="date"
                class="border rounded-lg px-3 py-2"
            />
        </div>

        <div class="flex justify-end gap-2 mt-4">
            <button
                @click="limpiarFiltros"
                class="px-4 py-2 border rounded-lg cursor-pointer"
            >
                Limpiar
            </button>

            <button
                @click="aplicarFiltros"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            >
                Filtrar
            </button>
        </div>
    </div>
</template>