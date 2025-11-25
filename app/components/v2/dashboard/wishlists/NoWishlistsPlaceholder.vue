<template>

    <div class="flex justify-center items-center py-8 flex-col gap-y-3">
        <div
            class="size-[80px] bg-linear-to-b from-[#F3E8FF] to-[#FCE7F3] rounded-full flex justify-center items-center">
            <Icon name="material-symbols-light:lists-rounded" class="text-[#C084FC]" style="scale: 3;" />
        </div>
        <p class="text-[#1F2937] text-[18px] font-semibold">Nessuna wishlist</p>
        <p class="text-center text-sm text-[#4B5563]">Crea la tua prima wishlist per iniziare ad organizzare i tuoi
            sogni</p>
        <div class="w-[80%] mt-4">
            <GenericButton label="Crea wishlist" variant="purpleLightGradient" size="md"
                @click="wishlistsStore.setShowAddWishlistModal(true)" />
        </div>

    </div>

</template>

<script setup lang="ts">
import GenericButton from '../../common/buttons/GenericButton.vue';
const wishlistsStore = useWishlistsStore()

</script>