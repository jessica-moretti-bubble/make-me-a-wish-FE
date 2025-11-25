<template>
    <div
        class="flex flex-col items-start justify-start w-full h-[174px] p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-center w-full justify-between mb-4">
            <div :class="cardConfig.bgColor" class="size-[48px] rounded-xl flex justify-center items-center">
                <Icon :name="iconName" style="font-size: 25px;" :class="cardConfig.iconColor" />
            </div>
        </div>
        <p class="text-[30px] font-light">{{ values }}</p>
        <p class="text-[#6B7280] text-sm">{{ title }}</p>

    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { HomeValuesIconConfig } from '~/config/config-v2/home-values-wrapper.config';
import { HomeValuesType } from '~/model/model-v2/home-friends-and-gifts.model';

const props = defineProps<{
    title: string;
    values: number;
    iconName: string;
    type?: HomeValuesType;
}>();



const cardConfig = computed(() => {
    return HomeValuesIconConfig[props.type || HomeValuesType.UPCOMING_EVENTS] || HomeValuesIconConfig[HomeValuesType.UPCOMING_EVENTS];
});
</script>