<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex items-center gap-x-3 w-full">
        <RouterLink to="/" class="w-full">
            <GenericButton label="Guarda dettagli" class="h-[45px] font-light! text-lg!" variant="purpleLightGradient">
                <Icon name="material-symbols:visibility" />
            </GenericButton>
        </RouterLink>

        <div class="flex items-center gap-x-2 text-[#4B5563]">
            <button class="size-[45px] flex justify-center items-center rounded-lg bg-[#F1F5F9] cursor-pointer" @click="() => {
                wishesStore.setSelectedWishes(selectedWish)
                wishesStore.setShowUpdateGiftModal(true)
            }">
                <Icon name="material-symbols:edit-rounded" />
            </button>

            <button class="size-[45px] flex justify-center items-center rounded-lg bg-[#FFF1F2] cursor-pointer">
                <Icon v-if="!isLoading" name="ic:sharp-delete" class=" text-[#E11D48]" @click="() => {
                    wishesStore.setSelectedWishes(selectedWish)
                    wishesStore.setShowDeleteGiftModal(true)
                }" />
                <Loader v-else />
            </button>
        </div>
    </div>

</template>


<script lang="ts" setup>
import Loader from '~/components/v2/common/loaders/Loader.vue';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import GenericButton from '~/components/v2/common/buttons/GenericButton.vue';
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';

defineProps<{
    selectedWish: GiftItem
}>()




const isLoading = ref(false)

const wishesStore = useWishesStore()



</script>
