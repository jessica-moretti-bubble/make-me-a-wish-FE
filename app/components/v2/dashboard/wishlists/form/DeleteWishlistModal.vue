<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <DeleteModal title="Lista"
        description="Sei sicuro di voler eliminare questa wishlist? Tutti i regali contenuti verranno rimossi."
        sub-description="Le persone con cui hai condiviso questa lista non potranno più accedervi."
        :handle-next-click="handleDeleteWish"
        :handle-back-click="() => useWishlistsStore().setShowDeleteWishlistModal(false)">
        <div class="flex items-center  w-full px-4 gap-x-4">
            <div class="size-[64px] rounded-xl bg-[#8B5CF6] flex justify-center items-center">
                <Icon :name="selectedWishlist?.iconName ?? ''" style="scale: 2.5;" />
            </div>

            <div class="flex flex-col">
                <p class="text-[18px] font-semibold">{{ selectedWishlist?.name }}</p>

            </div>
        </div>
    </DeleteModal>


</template>


<script setup lang="ts">
import DeleteModal from '~/components/v2/common/modals/DeleteModal.vue';


const selectedWishlist = useWishlistsStore().selectedCategory


const handleDeleteWish = async () => {
    await useWishlistsStore().deleteWishlistAndRefetch(selectedWishlist?._id ?? '')
    useWishlistsStore().setShowDeleteWishlistModal(false)
}

</script>