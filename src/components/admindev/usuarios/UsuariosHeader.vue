<script setup>
    import { UserRoundPlus } from 'lucide-vue-next'
    import { useRouter } from 'vue-router';
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const goToNuevoUsuario = () => {
        router.push(ROUTES.ADMIN_DEV.USUARIOS.NUEVA)
    }
</script>

<template>
    <header class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <!--Izquierda-->
        <div class="w-full">

            <h1 class="text-2xl md:text-5xl font-bold text-[#0B1F44]">Administrador de Usuarios</h1>

            <div class="flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
                <span>Gestiona los usuarios de la plataforma.</span>
            </div>
        </div>
       

    </header>
    <!-- Derecha (Botón) -->
    <div class="w-full sm:w-auto flex sm:justify-end">
        <button
            @click="goToNuevoUsuario"
            class="w-full sm:w-auto flex items-center justify-center gap-5 bg-green-600 hover:bg-green-700 
            text-white px-5 py-2 rounded-xl shadow-sm transition cursor-pointer"
        >
            <UserRoundPlus/>
            <span>Agregar nuevo usuario</span>
        </button>
    </div>
</template>

