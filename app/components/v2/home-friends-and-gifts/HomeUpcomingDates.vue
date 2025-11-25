<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="bg-white min-w-[344px] rounded-[16px] flex flex-col h-[476px]">
        <div class="flex items-center w-full justify-between border-b-[0.5px] p-4 py-6 border-b-[#E5E7EB]">
            <p class="text-[18px] font-light">Eventi in arrivo</p>
            <Icon name="material-symbols:calendar-month" class="text-[#A855F7]" style="scale: 1.3;" />

        </div>
        <div class="flex flex-col gap-y-3 p-4">
            <UpcomingEventItem v-for="request in dates" :key="request" />
        </div>
    </div>
</template>


<script setup lang="ts">
import UpcomingEventItem from './UpcomingEventItem.vue';

const dates = Array.from(Array(3).keys())



</script>
