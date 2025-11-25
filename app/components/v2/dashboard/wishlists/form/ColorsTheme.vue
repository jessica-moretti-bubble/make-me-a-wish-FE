<template>
    <div class="flex flex-col gap-3">
        <p class="text-[#334155] font-semibold text-sm">Tema colore</p>
        <div class="flex flex-wrap gap-6">
            <div v-for="color in ThemeColorsConfig" :key="color.id"
                class="flex justify-center items-center flex-col gap-y-2">
                <div class="size-[91px] rounded-[12px] cursor-pointer" :class="color.gradient" />
                <p class="text-xs">{{ color.title }}</p>
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
import { ThemeColorsConfig } from '~/config/config-v2/colors-theme.config';

</script>