<script setup>
    import { computed } from 'vue'
    import { generarStatsFeedbacks } from '@/data/admin/stats'

    const props = defineProps({
        statsData: {
            type: Object,
            default: () => null
        }
    })

    const stats = computed(() => {
        if (!props.statsData) return []

        return generarStatsFeedbacks(props.statsData)
    })

</script>

<template>
    <div class="space-y-5">
        <!--Encabezado-->
        <div>
            <h3 class="text-2xl md:text-3xl font-normal text-slate-800">Settepi Te Escucha</h3>
        </div>

        <!--Tarjetas-->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div
                v-for="card in stats"
                :key="card.title"
                class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition"
            >
                <div class="flex items-center justify-between">
                    <span class="text-sm text-slate-500">
                        {{ card.title }}
                    </span>

                    <div :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center',
                        card.bgColor
                    ]">
                        <component
                            :is="card.icon"
                            :class="['w-5 h-5', card.iconColor]"
                        />
                    </div>
                </div>

                <div class="mt-5">
                    <h3 class="text-4xl font-bold text-[#0B1F44]">
                        {{ card.value }}
                    </h3>
                </div>

            </div>
        </div>
        
    </div>
</template>
