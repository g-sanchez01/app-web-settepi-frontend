<script setup>
    import AppSpinner from '@/components/ui/AppSpinner.vue'
    import { useRouter } from 'vue-router'
    import { useAuth } from '@/composables/useAuth'

    const router = useRouter()

    const { login, loading, error } = useAuth()

    const handleSubmit = async (data) => {

        await login({
            numero_nomina: data.nomina,
            imss: data.password
        })
    }

</script>

<template>
    <div
        class="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style="background-image: url('/images/LoginPortada.jpeg')"
    >
        <AppSpinner
           :show="loading" logo="/images/logoAzul.png" text="Validando credenciales..."
        />

        <!-- Overlay azul -->
        <div
            class="absolute inset-0"
            style="background-color: rgba(0, 89, 143, 0.81);"
        ></div>
        
        <!--Card-->
        <div class="relative z-10 w-full max-w-lg mx-4 sm:mx-6 md:mx-0 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl" style="background-color: rgba(0, 0, 0, 0.20);">

            <!--Logo-->
            <div class="flex justify-center mb-6">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    class="w-45 h-24 object-contain"
                />
            </div>

            <!--Title-->
            <h1 class="text-white text-center text-4xl font-light tracking-wide mb-10">Ingresar</h1>

            <!--From Login-->
            <FormKit
                type="form"
                :actions="false"
                @submit="handleSubmit"
                incomplete-message="El número de nomina o contraseña son incorrectos"
                form-class="space-y-6"
            >

                <!--Numero de Nomina-->
                <FormKit
                    type="text"
                    name="nomina"
                    placeholder="Número de nómina"
                    validation="required|min:8"
                    validation-visibility="submit"
                    maxlength="8" 
                    input-class="
                    w-full
                    bg-transparent
                    text-white
                    placeholder:text-white/70
                    py-4
                    outline-none
                    "
                    outer-class="space-y-2"
                    help-class="hidden"
                    :sections-schema="{
                        inner: {
                            attrs: {
                                class: `
                                flex
                                items-center
                                bg-black/20
                                border-b-2
                                border-white/80
                                px-5
                                transition
                                focus-within:border-white
                                `
                            }
                        }
                    }"
                    required
                    :validation-messages="{
                        required: 'El numero de nomina es obligatorio',
                        length: 'Numero de nomina no valido',
                        min: 'Máximo 8 caracteres'
                    }"
                />

                <!--Password-->
                <FormKit
                    name="password"
                    placeholder="Contraseña"
                    input-class="
                    w-full
                    bg-transparent
                    text-white
                    placeholder:text-white/70
                    py-4
                    outline-none
                    "
                    outer-class="space-y-2"
                    help-class="hidden"
                    :sections-schema="{
                        inner: {
                            attrs: {
                                class: `
                                flex
                                items-center
                                bg-black/20
                                border-b-2
                                border-white/80
                                px-5
                                transition
                                focus-within:border-white
                                `
                            }
                        }
                    }"
                    required
                    :validation-messages="{
                        required: 'La contraseña es obligatoria',
                        length: 'Contraseña no valida',
                        min: 'Máximo 11 caracteres'
                    }"
                />

                <!-- Button -->
                <div class="pt-4">
                    <FormKit
                        type="submit"
                        label="Iniciar sesión"
                        input-class="
                        w-full
                        bg-white
                        text-[#00598F]
                        font-medium
                        text-lg
                        rounded-lg
                        py-4
                        transition
                        hover:bg-gray-100
                        cursor-pointer
                        "
                    />
                </div>

                <p
                    v-if="error"
                    class="text-red-300 text-center mt-4"
                >
                    {{ error }}
                </p>


            </FormKit>

        </div>


    </div>
</template>