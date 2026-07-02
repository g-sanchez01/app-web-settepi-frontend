<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue';
    import { useRouter } from 'vue-router';
    import { useUserAdmin } from '@/composables/useUserAdmin';
    import { reset } from '@formkit/core'
    import { ROUTES } from '@/router/routesGeneral';
    import { useToast } from '@/composables/ui/useToast';

    const router = useRouter()

    const toast = useToast()

    const { createUser, loading, error } = useUserAdmin()

    const handleSubmit = async (data) => {

    try {

        await createUser(data)

        toast.showToast(
            'Usuario registrado correctamente',
            'success'
        )

        reset('ideaForm')

        // redireccion
        router.push(ROUTES.ADMIN_DEV.USUARIOS.LISTA)

    } catch (err) {

        console.error(err)

        toast.showToast(
            error.value || 'No se pudo registrar el usuario',
            'error'
        )
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
            submit-label="Agregar"
            :actions="false"
        >

            <!--Nomina-->
            <FormKit
                type="text"
                name="numero_nomina"
                label="Nomina"
                placeholder="12345678"
                validation="required"
                :validation-messages="{
                    required: 'La nomina es requerida',
                }"
            />

            <!-- Nombre -->
            <FormKit
                type="text"
                name="nombre"
                label="Nombre Completo"
                placeholder="Escribe el nombre completo."
                validation="required"
                :validation-messages="{
                    required: 'El nombre es requerido',
                }"
            />

            <!-- Telefono -->
            <FormKit
                type="text"
                name="telefono"
                label="Telefono"
                placeholder="Ej. 8112146522"
                validation="required"
                :validation-messages="{
                    required: 'El telefono es requerido',
                }"
            />

            <FormKit
                type="text"
                name="imss"
                label="IMSS"
                placeholder="Ej. 12345678911"
                validation="required"
                :validation-messages="{
                    required: 'El IMSS es requerido'
                }"
            />

            <!-- Puesto -->
            <FormKit
                type="text"
                name="puesto"
                label="Puesto"
                placeholder="Ej. AUXILIAR"
                validation="required"
                :validation-messages="{
                    required: 'El puesto es requerido',
                }"
            />

            <!-- Departamento -->
            <FormKit
                type="select"
                name="departamento"
                label="Departamento"
                :options="[
                    { label: '--- Selecciona el departamento ---', value: '', disabled: true },
                    { label: 'ADMINISTRACION', value: 'ADMINISTRACION' },
                    { label: 'CAPITAL HUMANO', value: 'CAPITAL HUMANO' },
                    { label: 'GESTORIA', value: 'GESTORIA' },
                    { label: 'MANTENIMIENTO', value: 'MANTENIMIENTO' },
                    { label: 'RELACIONES PUBLICAS', value: 'RELACIONES PUBLICAS' },
                    { label: 'SEGURIDAD VIAL', value: 'SEGURIDAD VIAL' },
                    { label: 'SERVICIOS ESPECIALES', value: 'SERVICIOS ESPECIALES' },
                    { label: 'SERVICIOS GENERALES', value: 'SERVICIOS GENERALES' },
                ]"
                validation="required"
                :validation-messages="{
                    required: 'El departamento es requerido',
                }"
            />

            <!-- Area -->
            <FormKit
                type="select"
                name="area"
                label="Area"
                :options="[
                    { label: '--- Selecciona el area ---', value: '', disabled: true },
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
                    { label: 'SERVICIOS ESPECIALES', value: 'SERVICIOS ESPECIALESL' },
                    { label: 'SERVICIOS GENERALES', value: 'SERVICIOS GENERALES' },
                    { label: 'TRANSPORTACION', value: 'TRANSPORTACION' },
                ]"
                validation="required"
                :validation-messages="{
                    required: 'El area es requerido',
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
                    <span>Agregar</span>

                </button>
            </div>

        </FormKit>
    </div>
</template>
