<template>

    <div class="flex flex-col gap-y-2">
        <slot />
        <p class="text-xs text-[#64748B]">{{ description }}
        </p>
    </div>
</template>


<script lang="ts" setup>

defineProps({
    description: { type: String, default: '' }
})

</script>