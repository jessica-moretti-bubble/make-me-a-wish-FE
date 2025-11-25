<template>
    <div class="bg-white w-full max-w-[320px] max-h-[460px] rounded-[18px] p-6 shadow-2xl border-r border-gray-200">

        <ButtonAddWishlist />

        <div v-if="wishlistsStore.categories.length > 0" class="flex-col gap-y-3 flex max-h-[370px] overflow-auto py-2">
            <WishCategoryBox v-for="category in wishlistsStore.categories" :key="category._id" :category-data="category"
                @click="wishlistsStore.setSelectedCategory(category)" />
        </div>
        <NoWishlistsPlaceholder v-else />

    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ButtonAddWishlist from "./ButtonAddWishlist.vue";
import WishCategoryBox from "./WishCategoryBox.vue";
import NoWishlistsPlaceholder from "./NoWishlistsPlaceholder.vue";

const wishlistsStore = useWishlistsStore();

onMounted(() => {
    if (!wishlistsStore.categories.length) {
        wishlistsStore.fetchWishlists();
    }
});
</script>