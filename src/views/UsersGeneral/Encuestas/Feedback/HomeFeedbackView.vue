<script setup>
    import FeedbackFilter from '@/components/general/encuesta-feedback/FeedbackFilter.vue';
    import FeedbackHeader from '@/components/general/encuesta-feedback/FeedbackHeader.vue';
    import FeedbacksTable from '@/components/general/encuesta-feedback/FeedbacksTable.vue';
    import FeedbackTableMobile from '@/components/general/encuesta-feedback/mobile/FeedbackTableMobile.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">

        <FeedbackHeader/>

        <!--Filtros-->
        <FeedbackFilter/>

        <!--Desktop-->
        <div class="hidden md:block">
            <FeedbacksTable/>
        </div>

        <!--Mobile-->
        <div class="block md:hidden">
            <FeedbackTableMobile/>
        </div>
    </div>
</template>
