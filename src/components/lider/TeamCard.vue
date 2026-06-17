<script setup>
    import { Users } from 'lucide-vue-next';

    defineProps({
        titulo: {
            type: String,
            default: 'Integrantes'
        },
        cantidad: {
            type: Number,
            default: 18
        }
    })
</script>

<template>
    <div
        class="bg-white rounded-3xl shadow-sm p-6 w-full max-w-xs min-h-[180px] flex flex-col justify-between hover:shadow-md transition-all duration-300"
    >
        <div>
            <div class="text-3xl mb-3">
                <Users
                    class="w-8 h-8 text-[#005B96] mb-3"
                    :stroke-width="2"
                />
            </div>

            <h3 class="text-slate-600 text-xl font-semibold">
                {{ titulo }}
            </h3>
        </div>

        <div>
            <span class="text-5xl font-bold text-amber-500">
                {{ cantidad }}
            </span>
        </div>
    </div>
</template>

