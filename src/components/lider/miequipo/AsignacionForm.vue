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
                ROUTES.GENERAL.ENCUESTAS.FEEDBACKS.LISTA
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
            submit-label="Solicitar"
            :actions="false"
        >

            <!--Nombre-->
            <FormKit
                type="text"
                name="nombre"
                label="Nombre"
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
