<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="grid grid-cols-2 w-full bg-white px-8 py-6 shadow-2xl rounded-[18px]">
        <div class="flex items-center">
            <div class="flex items-center gap-x-4">
                <WishlistIcon :icon-name="wishlistsStore.selectedCategory?.iconName" />
                <div class="flex flex-col">
                    <p class="text-2xl font-bold">{{ wishlistsStore.selectedCategory?.name }}</p>
                    <p class="text-sm text-[#4B5563]">Creato il 25 Settembre 2025 • 0 items</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end gap-x-8">
            <GenericButton label="Aggiungi regalo" size="md" variant="purpleLightGradient" class="w-[50%]!"
                @click="wishesStore.setShowAddGiftModal(true)">
                <Icon name="material-symbols:add" style="scale: 1.2" class="text-white" />
            </GenericButton>
            <button class="cursor-pointer" @click="wishlistsStore.setShowUpdateWishlistModal(true)">
                <Icon name="material-symbols:settings-heart" style="scale: 1.4" class="text-[#4B5563]" />
            </button>
            <button class="cursor-pointer" @click="wishlistsStore.setShowDeleteWishlistModal(true)">
                <Icon name="material-symbols:delete-forever-sharp" style="scale: 1.4" class="text-[#4B5563]" />
            </button>

        </div>
    </div>

    <CreateWishlistModal v-if="wishlistsStore.showUpdateWishlistModal" :key="wishlistsStore.selectedCategory?._id"
        :initial-data="wishlistsStore.selectedCategory" />

    <DeleteWishlistModal v-if="wishlistsStore.showDeleteWishlistModal" />

    <CreateGiftModal v-if="wishesStore.showAddGiftModal" />


</template>


<script lang="ts" setup>
import GenericButton from '~/components/v2/common/buttons/GenericButton.vue'
import CreateWishlistModal from '~/components/v2/dashboard/wishlists/form/CreateWishlistModal.vue'
import WishlistIcon from './WishlistIcon.vue'
import CreateGiftModal from '~/components/v2/dashboard/gifts/form/CreateGiftModal.vue'
import DeleteWishlistModal from '../form/DeleteWishlistModal.vue'

const wishlistsStore = useWishlistsStore()


const wishesStore = useWishesStore()


</script>