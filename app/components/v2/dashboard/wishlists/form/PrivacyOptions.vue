<template>
    <div class="flex flex-col gap-y-2 my-12">
        <div class="flex items-center gap-x-2">
            <Icon name="material-symbols:privacy-tip" style="scale: 1.5;" class="text-[#3B82F6]" />
            <p class="text-[#0F172A] font-semibold">Impostazioni Privacy</p>
        </div>
        <div class="flex flex-col bg-[#F8FAFC] justify-between p-4 w-full h-[168px] rounded-[12px]">
            <div class="flex items-center justify-between border-b-[0.5px] border-[#E5E7EB] pb-6">
                <div class="flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-2">
                        <Icon name="material-symbols:privacy-tip" style="scale: 1.5;" />
                        <p class="text-[#0F172A] font-medium text-sm">Visibilità wishlist</p>
                    </div>
                    <p class="text-xs text-[#475569]">Solo tu puoi vedere e modificare questa lista</p>

                </div>
                <GenericToggle :model-value="true" />

            </div>
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-2">
                        <Icon name="material-symbols:privacy-tip" style="scale: 1.5;" />
                        <p class="text-[#0F172A] font-medium text-sm">Ricevi notifiche</p>
                    </div>
                    <p class="text-xs text-[#475569]">Ricevi aggiornamenti quando qualcuno interagisce con la
                        lista</p>

                </div>
                <GenericToggle :model-value="false" />

            </div>
        </div>


    </div>
</template>


<script lang="ts" setup>

import GenericToggle from '~/components/v2/common/inputs/GenericToggle.vue';
</script>