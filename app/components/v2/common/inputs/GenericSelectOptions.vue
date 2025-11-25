<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col gap-y-1 w-full">
        <p class="text-sm font-semibold">{{ inputLabel }}</p>
        <div class="relative w-full">
            <button
                class="block w-full rounded-lg text-sm border border-gray-300 bg-[#E5E7EB]/30 px-3 py-2 text-left text-gray-900 shadow-sm focus-within:ring-1 focus-within:ring-violet-500 focus-within:border-violet-500 transition cursor-pointer"
                type="button" @click="isOpen = !isOpen" @blur="closeDropdown">
                <span>{{ selectedLabel }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Icon name="ic:sharp-keyboard-arrow-down" />
                </span>
            </button>

            <div v-show="isOpen" class="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
                <div v-for="option in options" :key="option.value"
                    class="px-3 py-2 text-gray-900 cursor-pointer text-sm hover:bg-gray-100"
                    :class="{ 'bg-blue-50': modelValue === option.value }"
                    @mousedown.prevent="selectOption(option.value)">
                    {{ option.label }}
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

interface Option {
    value: string
    label: string
}

const props = defineProps<{
    modelValue?: string
    options: Option[]
    inputLabel?: string
}>()

const emit = defineEmits<{
    'update:modelValue': [value: string]
}>()

const isOpen = ref(false)

const selectedLabel = computed(() => {
    const selected = props.options.find(opt => opt.value === props.modelValue)
    return selected?.label || props.options[0]?.label || ''
})

const selectOption = (value: string) => {
    emit('update:modelValue', value)
    isOpen.value = false
}

const closeDropdown = () => {
    setTimeout(() => {
        isOpen.value = false
    }, 150)
}
</script>