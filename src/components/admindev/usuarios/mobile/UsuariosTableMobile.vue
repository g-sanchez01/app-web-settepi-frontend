<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router';
    import { ESTADO_STYLES } from '@/constants/status.constants';
    import { ROUTES } from '@/router/routesGeneral';
    import { formatDateTime } from '@/utils/formatDate';

    const props = defineProps({
        usuarios: {
            type: Array,
            default: () => []
        },
        loading: Boolean
    })

    const router = useRouter()

    const verUsuario = (usuario) => {
        router.push(
            ROUTES.ADMIN_DEV.USUARIOS.DETALLE(usuario.numero_nomina)
        )
    }
</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm p-5 relative">
        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=" "
        />

        <!-- DESKTOP TABLE -->
        <div class="hidden md:block overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 text-left">
                        <th class="px-4 py-3 font-semibold text-slate-900">Nómina</th>
                        <th class="px-4 py-3 font-semibold text-slate-900">Nombre</th>
                        <th class="px-4 py-3 font-semibold text-slate-900">Departamento</th>
                        <th class="px-4 py-3 font-semibold text-slate-900">Fecha Creación</th>
                        <th class="px-4 py-3 font-semibold text-slate-900">Estado</th>
                        <th class="px-4 py-3 font-semibold text-slate-900 text-center">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="usuario in usuarios"
                        :key="usuario.id"
                        class="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        <td class="px-4 py-3">{{ usuario.numero_nomina }}</td>
                        <td class="px-4 py-3">{{ usuario.nombre }}</td>
                        <td class="px-4 py-3">{{ usuario.departamento }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">
                            {{ formatDateTime(usuario.fecha_creacion) }}
                        </td>
                        <td class="px-4 py-3">
                            <span
                                class="px-2 py-0.5 rounded-full text-xs font-semibold"
                                :class="ESTADO_STYLES[usuario.estado]"
                            >
                                {{ usuario.estado }}
                            </span>
                        </td>
                        <td class="px-4 py-3 text-center">
                            <button
                                @click="verUsuario(usuario)"
                                class="px-3 py-1.5 text-sm rounded-md bg-[#005B96] hover:bg-[#1E73B8] text-white font-medium transition-colors"
                            >
                                Ver
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- MOBILE CARDS -->
        <div class="md:hidden space-y-3">
            <div
                v-for="usuario in usuarios"
                :key="usuario.id"
                class="border border-slate-200 rounded-xl p-4 shadow-sm bg-white"
            >
                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-xs text-slate-400">Nómina</p>
                        <p class="font-semibold text-slate-800">
                            {{ usuario.numero_nomina }}
                        </p>
                    </div>

                    <span
                        class="px-2 py-0.5 rounded-full text-xs font-semibold"
                        :class="ESTADO_STYLES[usuario.estado]"
                    >
                        {{ usuario.estado }}
                    </span>
                </div>

                <div class="mt-2">
                    <p class="text-sm font-medium text-slate-800">
                        {{ usuario.nombre }}
                    </p>
                    <p class="text-xs text-slate-500">
                        {{ usuario.departamento }}
                    </p>
                </div>

                <div class="mt-2 text-xs text-slate-500">
                    Creado: {{ formatDateTime(usuario.fecha_creacion) }}
                </div>

                <div class="mt-3">
                    <button
                        @click="verUsuario(usuario)"
                        class="w-full px-3 py-2 text-sm rounded-md bg-[#005B96] hover:bg-[#1E73B8] text-white font-medium transition-colors"
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>