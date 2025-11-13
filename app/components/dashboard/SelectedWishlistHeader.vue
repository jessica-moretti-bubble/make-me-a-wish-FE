<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="grid grid-cols-2 w-full">
        <div class="flex items-center">
            <div class="flex items-center gap-x-4">
                <Icon :name="wishlistsStore?.selectedCategory?.iconName ?? ''" style="scale: 2;" />
                <p class="text-xl font-semibold">{{ wishlistsStore.selectedCategory?.name }}</p>

            </div>
        </div>
        <div class="flex items-center gap-x-4 w-full">
            <GenericButton label="Elimina categoria" variant="secondary" :is-loading="isLoading"
                @click="wishlistsStore.deleteWishlistAndRefetch(wishlistsStore.selectedCategory?._id ?? '')" />
            <GenericButton label="Modifica categoria" variant="secondary" @click="showModal = true" />
            <RouterLink to="/new-wish" class="w-full">
                <GenericButton label="Aggiungi regalo" />
            </RouterLink>
        </div>
    </div>

    <CreateWishlistModal v-if="showModal" :initial-data="{
        name: wishlistsStore.selectedCategory?.name ?? '',
        iconName: wishlistsStore.selectedCategory?.iconName ?? '',
        gifts: wishlistsStore.selectedCategory?.gifts ?? [],
        _id: wishlistsStore.selectedCategory?._id ?? ''
    }" @close="showModal = false" />

</template>


<script lang="ts" setup>
import GenericButton from '../common/GenericButton.vue';
import CreateWishlistModal from './CreateWishlistModal.vue';
import { ref } from 'vue'

const wishlistsStore = useWishlistsStore()

const showModal = ref(false)

const isLoading = ref(false)

</script>