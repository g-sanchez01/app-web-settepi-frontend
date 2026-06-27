<script setup>
    import { onMounted, ref } from 'vue';
    import { useColaborador } from '@/composables/useColaborador';
    import { UserCheck } from 'lucide-vue-next';
    import UsuariosHeader from '@/components/admindev/usuarios/UsuariosHeader.vue';
    import StatsUsuariosCard from '@/components/admindev/usuarios/StatsUsuariosCard.vue';
    import UsuariosFilter from '@/components/admindev/usuarios/UsuariosFilter.vue';
    import UsuariosTable from '@/components/admindev/usuarios/UsuariosTable.vue';

    const { getUsers, fetchTotalUsuarios, usuarios, totalUsuarios } = useColaborador()
    const filters = ref({})

    const currentPage = ref(1);
    const limit = 6

    const cargarUsuarios = async () => {
        await getUsers({
            ...filters.value,
            offset: (currentPage.value - 1) * limit,
            limit
        });
    };

    onMounted(() => {
        getUsers()
        fetchTotalUsuarios()
    })

    const aplicarFiltros = (f) => {
        filters.value = f
        getUsers(f)
    }

    const siguientePagina = async () => {

        // si la página trae menos de 10 registros
        // probablemente ya no hay más resultados
        if (usuarios.value.length < limit)
            return

        currentPage.value++

        await cargarUsuarios()
    }

    const paginaAnterior = async () => {

        if (currentPage.value === 1)
            return

        currentPage.value--

        await cargarUsuarios()
    }

</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <UsuariosHeader/>

        <div class="mb-8 flex flex-col md:flex-row gap-4">
            <StatsUsuariosCard
                titulo="Activos"
                :cantidad="totalUsuarios"
                :icono="UserCheck"
                color-icono="text-green-600"
            />

        </div>

        <!--Filtros-->
        <UsuariosFilter class="mb-8"
            @filter="aplicarFiltros"
        />

        <!--Desktop-->
        <div class="mb-8 hidden md:block">
            <UsuariosTable :usuarios="usuarios"/>
        </div>

        <!-- PAGINACIÓN -->
        <div
            class="flex items-center justify-end gap-3 mt-4"
        >
            <button
                @click="paginaAnterior"
                :disabled="currentPage === 1"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Anterior
            </button>

            <span class="text-sm text-gray-600">
                Página {{ currentPage }}
            </span>

            <button
                @click="siguientePagina"
                :disabled="usuarios.length < limit"
                class="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Siguiente
            </button>
        </div>
    </div>
</template>

