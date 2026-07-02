<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(['filter'])

    const filters = ref({
        idRegistroIdea: '',
        nomina: '',
        departamento: '',
        tituloIdea: '',
        fecha: '',
        estado: ''
    })

    const aplicarFiltros = () => {
        console.log(filters)
        emit('filter', { ...filters.value })
    }

    const limpiarFiltros = () => {
        filters.value = {
            idRegistroIdea: '',
            nomina: '',
            departamento: '',
            tituloIdea: '',
            fecha: '',
            estado: ''
        }

        emit('filter', { ...filters.value })
    }

</script>

<template>
    <div class="bg-white p-3 rounded-xl shadow-sm mt-4">

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">

            <!-- ID -->
            <input
                v-model="filters.idRegistroIdea"
                type="text"
                placeholder="ID"
                class="border rounded-md px-3 py-2 text-sm h-10"
            />

            <!-- Nómina -->
            <input
                v-model="filters.nomina"
                type="text"
                placeholder="Nómina"
                class="border rounded-md px-3 py-2 text-sm h-10"
            />

            <!-- Título -->
            <input
                v-model="filters.tituloIdea"
                type="text"
                placeholder="Título"
                class="border rounded-md px-3 py-2 text-sm h-10"
            />

            <!-- Departamento -->
            <select
                v-model="filters.departamento"
                class="border rounded-md px-3 py-2 text-sm h-10"
            >
                <option value="">Departamento</option>
                <option value="ADMINISTRACION">ADMINISTRACION</option>
                <option value="CAPITAL HUMANO">CAPITAL HUMANO</option>
                <option value="GESTORIA">GESTORIA</option>
                <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                <option value="RELACIONES PUBLICAS">RELACIONES PUBLICAS</option>
                <option value="SEGURIDAD VIAL">SEGURIDAD VIAL</option>
                <option value="SERVICIOS ESPECIALES">SERVICIOS ESPECIALES</option>
                <option value="SERVICIOS GENERALES">SERVICIOS GENERALES</option>
                <option value="TRANSPORTACION">TRANSPORTACION</option>
            </select>

            <!-- Estado -->
            <select
                v-model="filters.estado"
                class="border rounded-md px-3 py-2 text-sm h-10"
            >
                <option value="">Estado</option>
                <option value="ENVIADA">ENVIADA</option>
                <option value="EN PROCESO">EN PROCESO</option>
                <option value="APROBADA">APROBADA</option>
                <option value="RECHAZADA">RECHAZADA</option>
            </select>

            <!-- Fecha -->
            <input
                v-model="filters.fecha"
                type="date"
                class="border rounded-md px-3 py-2 text-sm h-10"
            />

        </div>

        <!-- Botones -->
        <div class="flex justify-end gap-2 mt-3">
            <button
                @click="limpiarFiltros"
                class="px-3 py-2 text-sm border rounded-md hover:bg-slate-50 transition cursor-pointer"
            >
                Limpiar
            </button>

            <button
                @click="aplicarFiltros"
                class="px-3 py-2 text-sm bg-[#005B96] hover:bg-[#1E73B8] text-white rounded-md transition cursor-pointer"
            >
                Filtrar
            </button>
        </div>

    </div>
</template>