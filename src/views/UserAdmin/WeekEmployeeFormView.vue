<script setup>
    import WeekEmployeeFormHeader from '@/components/admin/empleado-mes/WeekEmployeeFormHeader.vue';
    import WeekEmployeeDetail from '@/components/admin/empleado-mes/WeekEmployeeDetail.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <WeekEmployeeFormHeader/>

        <!--Desktop-->
        <div class="mb-8 hidden md:block">
            <WeekEmployeeDetail/>
        </div>
    </div>
</template>

