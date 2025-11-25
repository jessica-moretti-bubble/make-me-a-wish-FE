<template>

    <div class="flex justify-center items-center flex-col gap-y-3 w-[245px] h-[220px] rounded-[12px]">
        <div class="size-[64px] shadow-2xl flex justify-center items-center rounded-full">
            <slot />
        </div>
        <p class="text-[#1F2937] font-semibold mt-3">{{ title }}</p>
        <p class="text-[#4B5563] text-sm text-center">{{ description }}</p>
    </div>
</template>


<script lang="ts" setup>

defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
})
</script>