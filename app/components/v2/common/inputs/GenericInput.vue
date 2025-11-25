<template>
    <div class="w-full flex flex-col gap-1">
        <label v-if="label" :for="id" class="text-sm font-semibold text-gray-[#374151]">
            {{ label }} {{ required ? '* ' : null }}
        </label>

        <div
            class="relative flex items-center border rounded-lg border-[#D1D5DB] px-3 py-3 bg-white focus-within:ring-1 focus-within:ring-violet-500 focus-within:border-violet-500 transition">
            <Icon :name="iconName" style="scale: 1.2;  " class="text-[#9CA3AF]" />
            <input :id="id" v-model="inputValue" :type="type" :placeholder="placeholder"
                class="w-full pl-4 pr-3 bg-transparent outline-none text-gray-800 placeholder-gray-400" />
        </div>

        <p v-if="error" class="text-sm text-red-500 mt-1">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    id: { type: String, default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: { type: [String, Number, null], default: '' },
    iconName: { type: String, default: '' },
    error: { type: String, default: '' },
    required: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        if (props.type === 'number') {
            const parsed = value === '' ? null : Number(value)
            emit('update:modelValue', parsed)
        } else {
            emit('update:modelValue', value)
        }
    }
})
</script>
