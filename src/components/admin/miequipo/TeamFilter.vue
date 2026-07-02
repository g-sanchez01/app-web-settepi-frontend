<script setup>

    import { ref } from 'vue'

    const emit = defineEmits(['filter'])

    const filters = ref({
        numero_nomina: '',
        area: ''
    })

    const aplicarFiltros = () => {
        emit('filter', { ...filters.value })
    }

    const limpiarFiltros = () => {
        filters.value = {
            numero_nomina: '',
            area: ''
        }

        emit('filter', { ...filters.value })
    }

</script>

<template>
    <div class="bg-white p-3 rounded-xl shadow-sm mt-5">
        
        <div class="flex flex-col md:flex-row md:items-end gap-3">

            <!-- Nomina -->
            <div class="flex flex-col w-full">
                <label class="text-xs text-slate-500 mb-1">Nómina</label>
                <input
                    v-model="filters.numero_nomina"
                    type="text"
                    placeholder="Ej. 12345678"
                    class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

            <!-- Puesto -->
            <div class="flex flex-col w-full">
                <label class="text-xs text-slate-500 mb-1">Area</label>
                <input
                    v-model="filters.area"
                    type="text"
                    placeholder="Ej. ATRACCION DE TALENTO"
                    class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

            <!-- Botones juntos a inputs -->
            <div class="flex gap-2 w-full md:w-auto md:ml-2">

                <button
                    @click="limpiarFiltros"
                    class="px-4 py-2 border rounded-lg text-sm hover:bg-slate-50 transition cursor-pointer"
                >
                    Limpiar
                </button>

                <button
                    @click="aplicarFiltros"
                    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition cursor-pointer"
                >
                    Filtrar
                </button>

            </div>

        </div>
    </div>
</template>