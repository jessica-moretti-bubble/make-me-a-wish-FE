<template>
    <div class="flex flex-col gap-y-2 bg-gray-100 p-4 rounded-md">
        <p>Requisiti username:</p>
        <div class="flex flex-col gap-y-1">

            <div class="flex items-center gap-x-1">
                <div class="base" :class="requirements.minLength ? 'bg-green-500' : 'bg-gray-400'" />
                <p class="text-xs">Minimo 3 caratteri</p>
            </div>

            <div class="flex items-center gap-x-1">
                <div class="base" :class="requirements.maxLength ? 'bg-green-500' : 'bg-gray-400'" />
                <p class="text-xs">Massimo 20 caratteri</p>
            </div>

            <div class="flex items-center gap-x-1">
                <div class="base" :class="requirements.validChars ? 'bg-green-500' : 'bg-gray-400'" />
                <p class="text-xs">Solo lettere, numeri e underscore</p>
            </div>

            <div class="flex items-center gap-x-1">
                <div class="base" :class="requirements.unique ? 'bg-green-500' : 'bg-gray-400'" />
                <p class="text-xs">Deve essere unico</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps<{
    usernameValue: string
}>()

const requirements = reactive({
    minLength: false,
    maxLength: false,
    validChars: false,
    unique: false,
})

watch(() => props.usernameValue, (value) => {
    const username = value || ''
    requirements.minLength = username.length >= 3
    requirements.maxLength = username.length >= 3 && username.length <= 20
    requirements.validChars = /^[A-Za-z0-9_]+$/.test(username)
    requirements.unique = false
})
</script>

<style scoped>
@layer components {
    .base {
        @apply size-[11px] rounded-full;
    }
}
</style>