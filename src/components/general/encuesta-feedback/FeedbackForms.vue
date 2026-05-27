<script setup>
    import { Form } from 'lucide-vue-next';
import { ref } from 'vue';

    const formData = ref({
        tipo: '',
        area: '',
        comentario: '',
        planta: ''
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
                    { label: 'COMUNICACION INTERNA', value: 'COMUNICACION INTERNA' },
                    { label: 'RECURSOS HUMANOS', value: 'RECURSOS HUMANOS' },
                    { label: 'MANTENIMIENTO', value: 'MANTENIMIENTO' },
                    { label: 'GESTORIA', value: 'GESTORIA' },
                    { label: 'ADMINISTRACION', value: 'ADMINISTRACION' },
                    { label: 'NOMINAS', value: 'NOMINAS' },
                    { label: 'COMBUSTIBLES', value: 'COMBUSTIBLES' },
                    { label: 'OPERACIONES', value: 'OPERACIONES' },
                    { label: 'SEGURIDAD VIAL', value: 'SEGURIDAD VIAL' }
                ]"
                validation="required"
                :validation-messages="{
                    required: 'El tipo es requerido',
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
