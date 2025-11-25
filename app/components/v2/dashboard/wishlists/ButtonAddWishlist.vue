<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>

    <div class="flex items-center justify-between w-full mb-6">
        <p class="font-bold text-[20px]">La mia Wishlists</p>
        <button @click="wishlistsStore.setShowAddWishlistModal(true)"
            class="size-[35px] flex justify-center items-center rounded-xl bg-[linear-gradient(to_bottom_right,#9333ea_0%,#db2777_100%)] cursor-pointer">
            <Icon name="material-symbols:add" style="scale: 1.2" class="text-white" />
        </button>
    </div>


    <CreateWishlistModal v-if="wishlistsStore.showAddWishlistModal"
        @close="wishlistsStore.setShowAddWishlistModal(false)" />
</template>

<script setup lang="ts">
import CreateWishlistModal from '~/components/v2/dashboard/wishlists/form/CreateWishlistModal.vue';
const wishlistsStore = useWishlistsStore()
</script>
