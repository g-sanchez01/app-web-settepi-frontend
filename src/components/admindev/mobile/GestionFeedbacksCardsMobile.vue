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
    <div class="space-y-4">

        <!-- Encabezado mobile -->
        <div>
            <h3 class="text-2xl font-semibold text-slate-800">
                Settepi Te Escucha
            </h3>
        </div>

        <!-- Cards mobile -->
        <div class="grid grid-cols-2 gap-3">

            <div
                v-for="card in stats"
                :key="card.title"
                class="bg-white border border-slate-200 rounded-xl p-3 shadow-sm active:scale-[0.98] transition flex flex-col justify-between"
            >

                <!-- Top -->
                <div class="flex items-start justify-between">
                    <span class="text-[12px] text-slate-500 leading-tight">
                        {{ card.title }}
                    </span>

                    <div
                        :class="[
                            'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
                            card.bgColor
                        ]"
                    >
                        <component
                            :is="card.icon"
                            :class="['w-6 h-6', card.iconColor]"
                        />
                    </div>
                </div>

                <!-- Value -->
                <div class="mt-3">
                    <span class="text-3xl font-bold text-[#0B1F44]">
                        {{ card.value }}
                    </span>
                </div>

            </div>

        </div>

    </div>
</template>

