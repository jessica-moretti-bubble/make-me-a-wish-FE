<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex items-center gap-x-3 w-full">
        <RouterLink to="/" class="w-full">
            <GenericButton label="Guarda dettagli" class="h-[45px] font-medium!">
                <Icon name="material-symbols:visibility" />
            </GenericButton>
        </RouterLink>

        <div class="flex items-center gap-x-2 text-[#4B5563]">
            <button class="size-[45px] flex justify-center items-center rounded-lg bg-[#F1F5F9]" @click="() => {
                wishesStore.setSelectedWishes(selectedWish)
                wishesStore.setShowUpdateGiftModal(true)
            }">
                <Icon name="material-symbols:edit-rounded" />
            </button>

            <button class="size-[45px] flex justify-center items-center rounded-lg bg-[#FFF1F2]">
                <Icon v-if="!isLoading" name="ic:sharp-delete" class="cursor-pointer text-[#E11D48]"
                    @click="handleDeleteWish" />
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
const wishlistsStore = useWishlistsStore()

const props = defineProps<{
    selectedWish: GiftItem
}>()

const handleDeleteWish = async () => {
    await deleteWish(wishlistsStore.selectedCategory?._id ?? '', props.selectedWish._id ?? '')
}


const isLoading = ref(false)

const wishesStore = useWishesStore()



</script>
