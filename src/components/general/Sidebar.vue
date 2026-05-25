<script setup>

</script>

<template>
    <aside class="w-72 h-screen bg-[#005B96] text-white flex flex-col justify-between">

        
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
                    to="/general/home"
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
                    to="/"
                    class="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 transition"
                >
                    <i class="pi pi-file text-xl"></i>
                    <span class="text-lg">Encuestas</span>
                </router-link>

                <router-link
                    to="/general/perfil"
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

                <router-link
                    to="/"
                    class="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 transition"
                >
                    <i class="pi pi-user text-xl"></i>
                    <span class="text-lg">Configuración</span>
                    
                </router-link>

            </nav>

        </div>

        <!--Usuario-->
        <div class="p-4 border-t border-white/10">
            <div class="flex items-center gap-3">

                <div
                    class="w-12 h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center"
                >
                    CS
                </div>

                <div>
                    <p class="font-semibold">Carolina Sánchez</p>
                    <p class="text-sm text-white/70">Comunicación Interna</p>
                </div>

            </div>

        </div>
    </aside>
</template>
