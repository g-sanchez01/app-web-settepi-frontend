<script setup>
    import { useRouter } from 'vue-router'
    import { useUser } from '@/composables/useUser';

    const { user } = useUser()

    defineProps({
        open: Boolean
    })

    defineEmits(['close'])

    const router = useRouter()

    const cerrarSesion = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('usuario')

        user.value = null

        router.replace('/login')
    }
</script>

<template>
    <aside class="fixed
            top-0 left-0
            z-50
            w-72 h-screen
            bg-[#005B96]
            text-white
            flex flex-col justify-between
            transition-transform duration-300"

            :class="
            open
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
        "          
    >   
        <div>

            
            <!--Logo-->
            <div class="p-6 border-b border-white/10">
                <img 
                    src="/images/logo.png" 
                    alt="Settepi"
                    class="w-40"
                >
            </div>

            <!--Menu-->
            <nav class="mt-4 px-4 space-y-2">
                
                <router-link
                    to="/gestor/home"
                    v-slot="{ isActive }"
                >
                    <div
                        :class="[
                            'flex items-center gap-4 px-4 py-4 rounded-2xl transition',
                            isActive
                                ? 'bg-[#0077C8] shadow-md'
                                : 'hover:bg-white/10'
                        ]"
                    >
                        <i class="pi pi-home text-xl"></i>
                        <span class="text-lg font-medium">Inicio</span>
                    </div>
                    
                </router-link>

                <router-link
                    to="/gestor/encuestas"
                    v-slot="{ isActive }"
                >
                    <div
                        :class="[
                            'flex items-center gap-4 px-4 py-4 rounded-2xl transition',
                            isActive
                                ? 'bg-[#0077C8] shadow-md'
                                : 'hover:bg-white/10'
                        ]"
                    >
                        <i class="pi pi-file text-xl"></i>
                        <span class="text-lg">Encuestas</span>
                    </div>
                
                </router-link>

                <router-link
                    to="/gestor/perfil"
                    v-slot="{ isActive }"
                >
                    <div
                        :class="[
                            'flex items-center gap-4 px-4 py-4 rounded-2xl transition',
                            isActive
                                ? 'bg-[#0077C8] shadow-md'
                                : 'hover:bg-white/10'
                        ]"
                    >

                        <i class="pi pi-user text-xl"></i>
                        <span class="text-lg">Perfil</span>

                    </div>
                    

                </router-link>

                <!-- <router-link
                    to="/"
                    class="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 transition"
                >
                    <i class="pi pi-cog text-xl"></i>
                    <span class="text-lg">Configuración</span>
                    
                </router-link> -->

            </nav>

            

        </div>

        <!--Inferior-->
        <div class="p-4 mt-auto">

             <!--Cerrar sesión-->
            <div class="px-4 pb-4">
                <button
                    @click="cerrarSesion"
                    class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-red-500 transition duration-200 cursor-pointer"
                >
                    <i class="pi pi-sign-out text-lg"></i>
                    <span class="font-medium">Cerrar sesión</span>
                </button>
            </div>

        </div>

        <!--Usuario-->
        <div class="p-4 border-t border-white/10">
            <!--Info Usuario-->
            <div class="flex items-center gap-3">

                <div
                    class="w-15 h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center"
                >
                    {{ user.initials }}
                </div>

                <div>
                    <p class="font-semibold">{{ user.name }}</p>
                    <p class="text-sm text-white/70">{{ user.department }}</p>
                </div>

            </div>

        </div>
    </aside>
</template>
