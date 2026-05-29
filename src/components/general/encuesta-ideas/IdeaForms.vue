<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router';
    import { useIdeas } from '@/composables/useIdeas';
    import { reset } from '@formkit/core'
    import { ROUTES } from '@/router/routesGeneral';

    const router = useRouter()

    const { registrarIdea, loading, error } = useIdeas()

    const handleSubmit = async (data) => {
        
        try {
            
            await registrarIdea(data)

            // reset limpio del form
            reset('ideaForm')

            // redireccion
            router.push(
                ROUTES.GENERAL.ENCUESTAS.MIS_IDEAS.LISTA
            )

        } catch (err) {
            console.error(err)
        }
    }
</script>

<template>
    <div class="w-full md:mt-8 max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text="Guardando Idea..."
        />

        <FormKit
            id="ideaForm"
            type="form"
            v-model="formData"
            @submit="handleSubmit"
            submit-label="Guardar"
            :actions="false"
        >

            <!--Titulo-->
            <FormKit
                type="text"
                name="tituloIdea"
                label="Título"
                placeholder="Escribe el título de tu idea"
                validation="required"
                :validation-messages="{
                    required: 'El titulo es requerido',
                }"
            />

            <!-- Unidad de negocio -->
            <FormKit
                type="select"
                name="unidadNegocio"
                label="Unidad de Negocio"
                :options="[ { label: 'SETTEPI MTY', value: 'SETTEPI MTY' } ]"
                validation="required"
                :disabled="true"
                input-class="$reset w-full px-4 py-2 text-gray-500 disabled:bg-slate-200"
                :validation-messages="{
                    required: 'La unidad de negocio es requerida',
                }"
            />

            <!-- Zona -->
            <FormKit
                type="select"
                name="zona"
                label="Zona"
                :options="[
                { label: 'Selecciona una zona', value: '', disabled: true },
                { label: 'APODACA', value: 'APODACA' },
                { label: 'ESCOBEDO', value: 'ESCOBEDO' },
                { label: 'PESQUERIA', value: 'PESQUERIA' }
                ]"
                validation="required"
                :validation-messages="{
                    required: 'La zona es requerida',
                }"
            />

            <!-- Descripción -->
            <FormKit
                type="textarea"
                name="descripcionIdea"
                label="Descripción"
                placeholder="Describe tu nueva idea"
                validation="required"
                rows="4"
                :validation-messages="{
                    required: 'La descrición es requerida',
                }"
            />

            <!-- ERROR -->
            <p
                v-if="error"
                class="mt-4 text-sm text-red-500 font-medium"
            >
                {{ error }}
            </p>

            <!-- BOTÓN PERSONALIZADO -->
            <div class="mt-6 flex justify-end">
                <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg 
                        bg-green-600 text-white font-semibold 
                        shadow-sm hover:bg-green-700 
                        active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    <span>Guardar</span>

                </button>
            </div>

        </FormKit>
    </div>
</template>
