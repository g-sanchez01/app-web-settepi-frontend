<script setup>

    import { ref } from 'vue'

    const emit = defineEmits(['filter'])

    const filters = ref({
        idfeedback: '',
        tipo: '',
        area: '',
        estado: '',
        fecha: ''
    })

    const aplicarFiltros = () => {
        emit('filter', { ...filters.value })
    }

    const limpiarFiltros = () => {
        filters.value = {
            idfeedback: '',
            tipo: '',
            area: '',
            estado: '',
            fecha: ''
        }

        emit('filter', { ...filters.value })
    }

</script>

<template>
    <div class="bg-white p-4 rounded-lg shadow-sm mt-5">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <!-- ID -->
            <input
                v-model="filters.idfeedback"
                type="text"
                placeholder="ID"
                class="border rounded-lg px-3 py-2"
            />

            <!-- Tipo -->
            <select
                v-model="filters.tipo"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todos los tipos</option>
                <option value="QUEJA">QUEJA</option>
                <option value="FELICITACION">FELICITACION</option>
            </select>

            <!-- Area -->
            <select
                v-model="filters.area"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todas las areas</option>
                <option value="ADMINISTRACION">ADMINISTRACION</option>
                <option value="ADMINISTRACION DE PERSONAL">ADMINISTRACION DE PERSONAL</option>
                <option value="ALMACEN">ALMACEN</option>
                <option value="ATENCION AL COLBAORADOR">ATENCION AL COLBAORADOR</option>
                <option value="ATRACCION DE TALENTO">ATRACCION DE TALENTO</option>
                <option value="CABINA">CABINA</option>
                <option value="CALIDAD">CALIDAD</option>
                <option value="CAPACITACION Y DESARROLLO">CAPACITACION Y DESARROLLO</option>
                <option value="CAPITAL HUMANO">CAPITAL HUMANO</option>
                <option value="COBRANZA">COBRANZA</option>
                <option value="COMERCIAL">COMERCIAL</option>
                <option value="COMPRAS">COMPRAS</option>
                <option value="COMUNICACION INTERNA">COMUNICACION INTERNA</option>
                <option value="COORDINACION">COORDINACION</option>
                <option value="FACTURACION">FACTURACION</option>
                <option value="GESTORIA">GESTORIA</option>
                <option value="LLANTAS">LLANTAS</option>
                <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                <option value="PLANEACION Y LOGISTICA">PLANEACION Y LOGISTICA</option>
                <option value="RELACIONES LABORALES">RELACIONES LABORALES</option>
                <option value="RELACIONES PUBLICAS">RELACIONES PUBLICAS</option>
                <option value="SEGURIDAD VIAL">SEGURIDAD VIAL</option>
                <option value="SERVICIOS ESPECIALES">SERVICIOS ESPECIALES</option>
                <option value="SERVICIOS GENERALES">SERVICIOS GENERALES</option>
                <option value="TRANSPORTACION">TRANSPORTACION</option>
            </select>

            <!-- Estado -->
            <select
                v-model="filters.estado"
                class="border rounded-lg px-3 py-2"
            >
                <option value="">Todos los estados</option>
                <option value="PENDIENTE">PENDIENTE</option>
                <option value="EN PROCESO">EN PROCESO</option>
                <option value="FINALIZADA">FINALIZADA</option>
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