<template>
    <button :class="classes">
        <slot />
        <p>{{ label }}</p>
    </button>
</template>

<script setup lang="ts">
import { buttonSize, buttonVariant } from '~/config/config-v2/button.config';
import type { Variant, Size } from '~/model/model-v2/button.model';

const props = defineProps<{
    variant?: Variant
    size?: Size,
    label?: string
}>()

const classes = computed(() => {
    const base =
        'w-full transition-colors duration-200 disabled:opacity-50 rounded-lg flex justify-center items-center gap-x-2 cursor-pointer'

    return `${base} ${buttonVariant[props.variant ?? 'purpleGradient']} ${buttonSize[props.size ?? 'xl']}`
})
</script>