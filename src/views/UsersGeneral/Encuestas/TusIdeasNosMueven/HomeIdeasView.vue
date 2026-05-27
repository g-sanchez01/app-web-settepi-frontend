<script setup>
    import IdeasHeader from '@/components/general/encuesta-ideas/IdeasHeader.vue';
    import IdeasTable from '@/components/general/encuesta-ideas/IdeasTable.vue';
    import IdeaTableMobile from '@/components/general/encuesta-ideas/mobile/IdeaTableMobile.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <IdeasHeader/>

        <!--Desktop-->
        <div class="hidden md:block">
            <IdeasTable/>
        </div>
        
        <!--Mobile-->
        <div class="block md:hidden">
            <IdeaTableMobile/>
        </div>
        
    </div>
</template>
