<script setup>
    import { ref } from 'vue';

    const formData = ref({
        titulo: '',
        descripcion: ''
    })

    const handleSubmit = (data) => {
        console.log('Formulario enviado:', data)
    }
</script>

<template>
    <div class="w-full md:mt-8 max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <FormKit
            type="form"
            v-model="formData"
            @submit="handleSubmit"
            submit-label="Guardar"
            :actions="false"
        >

            <!--Titulo-->
            <FormKit
                type="text"
                name="titulo"
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
                name="businessUnitOptions"
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
                name="businessZone"
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
                name="descripcion"
                label="Descripción"
                placeholder="Describe tu nueva idea"
                validation="required"
                rows="4"
                :validation-messages="{
                    required: 'La descrición es requerida',
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
                    <span>Guardar</span>

                </button>
            </div>

        </FormKit>
    </div>
</template>
