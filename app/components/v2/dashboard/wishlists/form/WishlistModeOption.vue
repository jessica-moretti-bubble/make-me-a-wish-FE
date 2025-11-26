<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col bg-[#F8FAFC] justify-between p-4 w-full h-[80px] rounded-[12px]">

        <div class="flex items-center justify-between border-b-[0.5px] border-[#E5E7EB] pb-6">
            <div class="flex flex-col gap-y-2">
                <div class="flex items-center gap-x-2">
                    <Icon name="material-symbols:privacy-tip" style="scale: 1.5;" />
                    <p class="text-[#0F172A] font-medium text-sm">
                        {{ specialDateMode ? 'Crea evento speciale' : 'Crea lista generica' }}
                    </p>
                </div>
                <p class="text-xs text-[#475569]">
                    {{ specialDateMode ? "La lista si riferisce ad un evento speciale" :
                        "La lista è generica" }}
                </p>
            </div>

            <GenericToggle :model-value="specialDateMode"
                @update:model-value="val => emit('update:specialDateMode', val)" />
        </div>



    </div>
</template>

<script setup lang="ts">
import GenericToggle from '~/components/v2/common/inputs/GenericToggle.vue'

defineProps<{
    specialDateMode: boolean
}>()

const emit = defineEmits<{
    'update:specialDateMode': [value: boolean]
}>()




</script>