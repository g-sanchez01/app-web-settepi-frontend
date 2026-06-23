<script setup>

    import { ref } from 'vue'

    const emit = defineEmits(['filter'])

    const filters = ref({
        id: '',
        numero_nomina: '',
        departamento: '',
        fecha_solicitud: '',
        estado: ''
    })

    const aplicarFiltros = () => {
        emit('filter', { ...filters.value })
    }

    const limpiarFiltros = () => {
        filters.value = {
            id: '',
            numero_nomina: '',
            departamento: '',
            fecha_solicitud: '',
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
                v-model="filters.id"
                type="text"
                placeholder="ID"
                class="border rounded-lg px-3 py-2"
            />

            <!-- Nomina -->
            <input
                v-model="filters.numero_nomina"
                type="text"
                placeholder="Nomina"
                class="border rounded-lg px-3 py-2"
            />

            <!-- DEPARTAMENTO -->
            <select
                v-model="filters.departamento"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todos departamentos</option>
                <option value="COMUNICACION">COMUNICACION</option>
                <option value="RECURSOS HUMANOS">RECURSOS HUMANOS</option>
                <option value="RELACIONES PUBLICAS">RELACIONES PUBLICAS</option>
                <option value="RECLUTAMIENTO">RECLUTAMIENTO</option>
                <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                <option value="GESTORIA">GESTORIA</option>
                <option value="ADMINISTRACION">ADMINISTRACION</option>
                <option value="NOMINAS">NOMINAS</option>
                <option value="COMBUSTIBLES">COMBUSTIBLES</option>
                <option value="OPERACIONES">OPERACIONES</option>
                <option value="SEGURIDAD VIAL">SEGURIDAD VIAL</option>
            </select>

            <!-- Fecha -->
            <input
                v-model="filters.fecha_solicitud"
                type="date"
                class="border rounded-lg px-3 py-2"
            />

            <!-- Estado -->
            <select
                v-model="filters.estado"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todos los estados</option>
                <option value="ACEPTADO">ACEPTADO</option>
                <option value="PENDIENTE">PENDIENTE</option>
                <option value="RECHAZADA">RECHAZADA</option>
                <option value="SIN SOLICITUD">SIN SOLICITUD</option>
            </select>

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