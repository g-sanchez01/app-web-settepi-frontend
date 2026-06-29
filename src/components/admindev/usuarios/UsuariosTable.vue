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
    <div class="bg-white rounded-2xl shadow-sm p-5">
        <AppSpinner
            :show="loading"
            logo="/images/logoAzul.png"
            text=" "
        />

        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 text-left">
                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Nómina
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Nombre
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Departamento
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Fecha Creación
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900">
                            Estado
                        </th>

                        <th class="px-4 py-3 font-semibold text-slate-900 text-center">
                            Acción
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="usuario in usuarios"
                        :key="usuario.id"
                        class="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        <td class="px-4 py-3 text-slate-700">
                            {{ usuario.numero_nomina }}
                        </td>

                        <td class="px-4 py-3 text-slate-700">
                            {{ usuario.nombre }}
                        </td>

                        <td class="px-4 py-3 text-slate-700">
                            {{ usuario.departamento }}
                        </td>

                        <td class="px-4 py-3 text-slate-700 whitespace-nowrap">
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
                                class="px-3 py-1.5 text-sm rounded-md bg-[#005B96] hover:bg-[#1E73B8] text-white font-medium transition-colors cursor-pointer"
                            >
                                Ver
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

