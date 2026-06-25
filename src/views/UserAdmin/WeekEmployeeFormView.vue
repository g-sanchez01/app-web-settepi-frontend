<script setup>
    import WeekEmployeeFormHeader from '@/components/admin/empleado-mes/WeekEmployeeFormHeader.vue';
    import WeekEmployeeDetail from '@/components/admin/empleado-mes/WeekEmployeeDetail.vue';
    import WeekEmploeeDetailMobile from '@/components/admin/empleado-mes/mobile/WeekEmploeeDetailMobile.vue';
</script>

<template>
    <div class="p-4 lg:ml-72 lg:p-6">
        <WeekEmployeeFormHeader/>

        <!--Desktop-->
        <div class="mb-8 hidden md:block">
            <WeekEmployeeDetail/>
        </div>

        <!-- Mobile -->
        <div class="block md:hidden">
            <WeekEmploeeDetailMobile />
        </div>
    </div>
</template>

