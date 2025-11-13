<template>
    <div class="flex fixed top-0 bg-white items-center justify-between py-4 px-14 border-b border-gray-200 w-full">
        <div class="flex items-center gap-x-6 w-96">
            <RouterLink to="/dashboard">
                <Icon name="mdi:arrow-left" style="scale: 2;" class="text-gray-400 cursor-pointer" />
            </RouterLink>
            <p class="whitespace-nowrap font-medium text-2xl mb-1">{{ title }}</p>
        </div>
        <div class="flex items-center gap-x-8 w-[20rem]">
            <GenericButton label="Cancel" variant="secondary" />
            <GenericButton label="Salva regalo" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GenericButton from '~/components/common/GenericButton.vue';

defineProps({
    title: {
        type: String,
        default: 'Aggiungi regalo'
    }
})
</script>