<script setup>
    import { Users } from 'lucide-vue-next'
    defineProps({
            titulo: {
                type: String,
                default: 'Solicitudes'
            },
            cantidad: {
                type: Number,
                default: 18
            }
    })

</script>

<template>
    <div
        class="bg-white rounded-2xl shadow-sm p-4 sm:p-6 w-full max-w-xs min-h-[150px] 
        flex flex-col justify-between hover:shadow-md transition-all duration-300
        mx-auto sm:mx-0"
    >
        <!-- Header -->
        <div>
            <Users
                class="w-7 h-7 sm:w-8 sm:h-8 text-[#005B96] mb-2 sm:mb-3"
                :stroke-width="2"
            />

            <h3 class="text-slate-600 text-base sm:text-xl font-semibold">
                {{ titulo }}
            </h3>
        </div>

        <!-- Number -->
        <div>
            <span class="text-3xl sm:text-5xl font-bold text-amber-500">
                {{ cantidad }}
            </span>
        </div>
    </div>
</template>


