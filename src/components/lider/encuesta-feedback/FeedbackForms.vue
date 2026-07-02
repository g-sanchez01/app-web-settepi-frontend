<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { reset } from '@formkit/core'
    import { useFeedbacks } from '@/composables/useFeedbacks';
    import { ROUTES } from '@/router/routesGeneral';
    import { useToast } from '@/composables/ui/useToast';

    const router = useRouter()

    const { registrarFeedback, loading, error } = useFeedbacks()

    const formData = ref({
        anonimo: false
    })

    const toast = useToast()

    const handleSubmit = async (data) => {

        try {

            await registrarFeedback(data)

            toast.showToast('Feedback registrado correctamente', 'success')

            // reset limpio del form
            reset('feedbackForm')

            // redireccion
            router.push(
                ROUTES.LIDER.ENCUESTAS.FEEDBACKS.LISTA
            )
        } catch (err) {
            console.error(err)

            toast.showToast('No se envíar el feedback', 'error')
        }
        
    }
</script>

<template>
    <div class="w-full md:mt-18 max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text="Envíando Feedback..."
        />

        <FormKit
            id="feedbackForm"
            type="form"
            v-model="formData"
            @submit="handleSubmit"
            submit-label="Envíar"
            :actions="false"
        >

            <!--Tipo-->
            <FormKit
                type="select"
                name="tipo"
                label="Tipo"
                :options="[ 
                    { label: '--- Selecciona la situacion ---', value: '' }, 
                    { label: 'QUEJA', value: 'QUEJA' }, 
                    { label: 'FELICITACION', value: 'FELICITACION' } ]"
                validation="required"
                :validation-messages="{
                    required: 'El tipo es requerido',
                }"
            />

            <!--Area-->
            <FormKit
                type="select"
                name="area"
                label="Area"
                :options="[
                    { label: '--- Selecciona el area dirigida ---', value: '', disabled: true },
                    { label: 'CAPITAL HUMANO', value: 'CAPITAL HUMANO' },
                    { label: 'COBRANZA', value: 'COBRANZA' },
                    { label: 'COMERCIAL', value: 'COMERCIAL' },
                    { label: 'COMPRAS', value: 'COMPRAS' },
                    { label: 'COMUNICACION INTERNA', value: 'COMUNICACION INTERNA' },
                    { label: 'COORDINACION', value: 'COORDINACION' },
                    { label: 'FACTURACION', value: 'FACTURACION' },
                    { label: 'GESTORIA', value: 'GESTORIA' },
                    { label: 'LLANTAS', value: 'LLANTAS' },
                    { label: 'MANTENIMIENTO', value: 'MANTENIMIENTO' },
                    { label: 'PLANEACION Y LOGISTICA', value: 'PLANEACION Y LOGISTICA' },
                    { label: 'RELACIONES LABORALES', value: 'RELACIONES LABORALES' },
                    { label: 'RELACIONES PUBLICAS', value: 'RELACIONES PUBLICAS' },
                    { label: 'SEGURIDAD VIAL', value: 'SEGURIDAD VIAL' },
                    { label: 'SERVICIOS ESPECIALESL', value: 'SERVICIOS ESPECIALESL' },
                    { label: 'SERVICIOS GENERALES', value: 'SERVICIOS GENERALES' },
                    { label: 'TRANSPORTACION', value: 'TRANSPORTACION' },
                ]"
                validation="required"
                :validation-messages="{
                    required: 'El area es requerida',
                }"
            />

            <!-- Comentario -->
            <FormKit
                type="textarea"
                name="comentario"
                label="Comentario"
                placeholder="Describe tu situación"
                validation="required"
                rows="4"
                :validation-messages="{
                    required: 'El comentario de tu situación es requerida',
                }"
            />

            <!-- Planta -->
            <FormKit
                type="text"
                name="planta"
                label="Planta"
                placeholder="Escribe a la planta que perteneces"
                validation="required"
                rows="4"
                :validation-messages="{
                    required: 'La planta es requerida',
                }"
            />

            <!-- Anónimo -->
            <div class="mb-6">
                <div
                    class="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50"
                >
                    <div>
                        <h3 class="font-medium text-gray-800">
                            Enviar de forma anónima
                        </h3>

                        <p class="text-sm text-gray-500 mt-1">
                            Tu nombre y datos personales no serán visibles para el área receptora.
                        </p>
                    </div>

                    <button
                        type="button"
                        @click="formData.anonimo = !formData.anonimo"
                        class="relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300"
                        :class="formData.anonimo ? 'bg-green-600' : 'bg-gray-300'"
                    >
                        <span
                            class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-all duration-300"
                            :class="formData.anonimo ? 'translate-x-6' : 'translate-x-1'"
                        />
                    </button>
                </div>

                <!-- Campo oculto para enviarlo en FormKit -->
                <FormKit
                    type="hidden"
                    name="anonimo"
                    :value="formData.anonimo"
                />

                <div
                    v-if="formData.anonimo"
                    class="mt-2 text-sm text-green-700 flex items-center gap-2"
                >
                    ✓ Este feedback será enviado de forma anónima.
                </div>
            </div>

            <!-- BOTÓN PERSONALIZADO -->
            <div class="mt-6 flex justify-end">
                <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg 
                        bg-green-600 text-white font-semibold 
                        shadow-sm hover:bg-green-700 
                        active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    <span>Envíar</span>

                </button>
            </div>

        </FormKit>
    </div>
</template>
