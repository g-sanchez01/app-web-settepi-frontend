<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    defineProps({
        equipo: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    })

    const asignarColaboradorMes = (colaborador) => {
        // redireccion
        router.push(ROUTES.LIDER.MI_EQUIPO.ASIGNAR(colaborador.numero_nomina))
    }

</script>

<template>
    <div class="bg-white rounded-3xl shadow-sm p-8">
        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text=" "
        />
        
        <h2 class="text-3xl font-bold text-slate-900 mb-8">
            Integrantes del Equipo
        </h2>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="bg-slate-100 text-left">
                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Nómina
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Nombre
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Puesto
                        </th>

                        <th class="px-6 py-5 text-lg font-semibold text-slate-900">
                            Acción
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="empleado in equipo"
                        :key="empleado.nomina"
                        class="border-b border-slate-200"
                    >
                        <td class="px-6 py-5 text-slate-700">
                            {{ empleado.numero_nomina }}
                        </td>

                        <td class="px-6 py-5 text-slate-900 font-medium">
                            {{ empleado.nombre }}
                        </td>

                        <td class="px-6 py-5 text-slate-700">
                            {{ empleado.puesto }}
                        </td>

                        <td class="px-6 py-5">
                            <button
                                @click="asignarColaboradorMes(empleado)"
                                class="bg-[#005B96] hover:bg-[#1E73B8] text-white px-5 py-3 rounded-xl transition flex items-center gap-2 cursor-pointer"
                            >
                                🏆
                                Asignar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

