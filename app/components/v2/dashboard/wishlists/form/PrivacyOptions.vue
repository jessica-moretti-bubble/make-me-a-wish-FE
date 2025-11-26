<!-- eslint-disable vue/first-attribute-linebreak -->
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
                    <p class="text-xs text-[#475569]">
                        {{ visibility === WishlistVisibility.PRIVATE ? "Solo tu puoi vedere e modificare questa lista" :
                            "La lista è pubblica e visibile a tutti" }}
                    </p>
                </div>

                <GenericToggle v-model="visibilityBoolean" />
            </div>

            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-2">
                        <Icon name="material-symbols:privacy-tip" style="scale: 1.5;" />
                        <p class="text-[#0F172A] font-medium text-sm">Ricevi notifiche</p>
                    </div>
                    <p class="text-xs text-[#475569]">
                        {{ notification ? "Ricevi aggiornamenti quando qualcuno interagisce con la lista" :
                            "Non ricevere aggiornamenti quando qualcuno interagisce con la lista" }}


                    </p>
                </div>

                <GenericToggle :model-value="notification"
                    @update:model-value="val => emit('update:notification', val)" />
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import GenericToggle from '~/components/v2/common/inputs/GenericToggle.vue'
import { WishlistVisibility } from '~/schemas/payloads/wish.payload.schema'
import { computed } from 'vue'

const props = defineProps<{
    notification: boolean
    visibility: WishlistVisibility
}>()

const emit = defineEmits<{
    'update:notification': [value: boolean]
    'update:visibility': [value: WishlistVisibility]
}>()

const visibilityBoolean = computed({
    get: () => props.visibility === WishlistVisibility.PRIVATE,
    set: (value: boolean) => {
        emit(
            'update:visibility',
            value ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC
        )
    }
})
</script>
