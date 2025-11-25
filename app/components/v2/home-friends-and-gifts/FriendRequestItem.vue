<template>
    <div
        class="w-full h-[140px] flex justify-center gap-y-4 flex-col px-4 py-8  bg-linear-to-br from-purple-200/40 via-pink-100/30 rounded-[12px]">
        <div class="flex items-center gap-x-2">
            <div class="rounded-full size-[48px] bg-black/10" />
            <div class="flex flex-col">
                <p class="text-sm">James Stocazzo</p>
                <p class="text-xs text-[#6B7280]">@jamesStocazzo9</p>
                <p class="text-xs text-[#9CA3AF]">5 amici in comune</p>
            </div>
        </div>
        <div class="flex items-center gap-x-2">
            <GenericButton label="Accetta" variant="purpleLightGradient" size="sm">
                <Icon name="gridicons:checkmark" class="text-white" />
            </GenericButton>
            <button class="flex justify-center items-center bg-[#F3F4F6] size-[42px] rounded-lg">
                <Icon name="gridicons:cross" />
            </button>
        </div>


    </div>
</template>


<script lang="ts" setup>
import GenericButton from '../common/buttons/GenericButton.vue';
</script>