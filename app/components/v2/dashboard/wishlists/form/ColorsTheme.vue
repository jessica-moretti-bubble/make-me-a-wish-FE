<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col gap-3">
        <p class="text-[#334155] font-semibold text-sm">Tema colore</p>

        <div class="flex flex-wrap gap-6">
            <div v-for="color in ThemeColorsConfig" :key="color.id"
                class="flex justify-center items-center flex-col gap-y-2">

                <div class="size-[91px] rounded-[12px] cursor-pointer relative flex items-center justify-center"
                    :class="color.gradient" @click="selectColor(color.gradient)">
                    <Icon v-if="selectedColor === color.gradient" name="ion:checkmark-round"
                        class="text-white w-10 h-10" />
                </div>

                <p class="text-xs">{{ color.title }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ThemeColorsConfig } from '~/config/config-v2/colors-theme.config'

const emit = defineEmits<{
    'update:color': [value: string]
}>()

const selectedColor = ref<string>('')

const selectColor = (color: string) => {
    selectedColor.value = color
    emit('update:color', color)
}
</script>
