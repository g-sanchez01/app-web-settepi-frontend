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
    <div class="w-full md:mt-18 max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

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
