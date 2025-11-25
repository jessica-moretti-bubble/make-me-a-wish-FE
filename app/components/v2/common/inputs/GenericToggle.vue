<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <button type="button" role="switch" :aria-checked="modelValue"
        class="relative inline-flex h-8 w-14 items-center rounded-full transition-colors cursor-pointer outline-none"
        :class="modelValue ? 'bg-indigo-600' : 'bg-gray-300'" @click="toggle">

        <span class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform"
            :class="modelValue ? 'translate-x-7' : 'translate-x-1'" />

    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue?: boolean
}>()

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>()

const toggle = () => {
    emit('update:modelValue', !props.modelValue)
}
</script>