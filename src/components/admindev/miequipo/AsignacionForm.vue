<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue'
    import { ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useColaborador } from '@/composables/useColaborador'
    import { useWeekEmployee } from '@/composables/useWeekEmployee'
    import { ROUTES } from '@/router/routesGeneral'
    import { useToast } from '@/composables/ui/useToast'

    const router = useRouter()
    const route = useRoute()

    const { colaborador, getByNomina, loading } = useColaborador()
    const { solicitarColaboradorMes } = useWeekEmployee()
    const toast = useToast()

    const formData = ref({
        nombre: '',
        numero_nomina: '',
        puesto: '',
        motivo: ''
    })


    const handleSubmit = async (data) => {

        try {

            await solicitarColaboradorMes({
                numero_nomina: formData.value.numero_nomina,
                motivo_solicitud: formData.value.motivo
            })

            toast.showToast('Solicitud enviada correctamente', 'success')

            // redireccion
            router.push(
                ROUTES.ADMIN_DEV.MI_EQUIPO.LISTA
            )
        } catch (err) {
            console.error(err)

            toast.showToast('No se realizó la solicitud', 'error')
        }
        
    }

    onMounted(async () => {

        const numero_nomina = route.params.numero_nomina

        if (!numero_nomina) return

        await getByNomina(numero_nomina)

        if (colaborador.value) {
            formData.value.numero_nomina = colaborador.value.numero_nomina
            formData.value.nombre = colaborador.value.nombre
            formData.value.puesto = colaborador.value.puesto
        }
    })
</script>

<template>
    <div class="w-full md:mt-7 max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text="Envíando solicitud..."
        />

        <FormKit
            type="form"
            v-model="formData"
            @submit="handleSubmit"
            submit-label="Solicitar"
            :actions="false"
        >

            <!--Nombre-->
            <FormKit
                type="text"
                name="nombre"
                label="Nombre"
                :disabled="true"
                input-class="$reset w-full px-4 py-2 text-gray-500 disabled:bg-slate-200"
                validation="required"
                :validation-messages="{
                    required: 'El nombre es requerido',
                }"
            />

            <!--Nomina-->
            <FormKit
                type="text"
                name="numero_nomina"
                label="Nomina"
                :disabled="true"
                input-class="$reset w-full px-4 py-2 text-gray-500 disabled:bg-slate-200"
                validation="required"
                :validation-messages="{
                    required: 'La nomina es requerida',
                }"
            />

            <!--Puesto-->
            <FormKit
                type="text"
                name="puesto"
                label="Puesto"
                :disabled="true"
                input-class="$reset w-full px-4 py-2 text-gray-500 disabled:bg-slate-200"
                validation="required"
                :validation-messages="{
                    required: 'El puesto es requerido',
                }"
            />

            <!-- Comentario -->
            <FormKit
                type="textarea"
                name="motivo"
                label="¿Por qué quieres asignar a tu compañero?"
                placeholder="Describe las KPIs"
                validation="required"
                rows="4"
                :validation-messages="{
                    required: 'El motivo es requerido',
                }"
            />

            <!-- BOTÓN PERSONALIZADO -->
            <div class="mt-6 flex justify-end">
                <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg 
                        bg-green-600 text-white font-semibold 
                        shadow-sm hover:bg-green-700 
                        active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    <span>Solicitar</span>

                </button>
            </div>

        </FormKit>
    </div>
</template>
