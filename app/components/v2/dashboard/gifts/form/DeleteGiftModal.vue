<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <DeleteModal title="Regalo" description="Vuoi rimuovere questo regalo dalla tua wishlist?"
        sub-description="Il link e tutte le informazioni associate verranno eliminate."
        :handle-next-click="handleDeleteWish" :handle-back-click="() => useWishesStore().setShowDeleteGiftModal(false)">
        <div class="flex items-center  w-full px-4 gap-x-4">
            <img v-if="selectedGift?.imageKey" :src="selectedGift?.imageKey" class="size-[64px]">

            <div v-else class="size-[64px] rounded-xl bg-[#8B5CF6]" />

            <div class="flex flex-col">
                <p class="text-[18px] font-semibold">{{ selectedGift?.title }}</p>
                <p v-if="selectedGift?.price">€ {{ selectedGift?.price }}</p>

            </div>
        </div>
    </DeleteModal>


</template>


<script setup lang="ts">
import DeleteModal from '~/components/v2/common/modals/DeleteModal.vue';

const selectedGift = useWishesStore().selectedWish

const selectedWishlist = useWishlistsStore().selectedCategory


const handleDeleteWish = async () => {
    await deleteWish(selectedWishlist?._id ?? '', selectedGift?._id ?? '')
    useWishesStore().setShowDeleteGiftModal(false)
}

</script>