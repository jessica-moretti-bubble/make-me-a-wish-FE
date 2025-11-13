<template>
    <div class="bg-white w-[28%] p-6 flex flex-col gap-y-6 border-r border-gray-200">

        <p class="font-semibold text-lg">
            {{ wishlistsStore.categories.length > 0
                ? "Le tue wishlists"
                : "Crea una nuova wishlist per iniziare" }}
        </p>

        <div class="flex flex-col gap-y-2 overflow-scroll max-h-[80%] scroll-hide">

            <WishCategoryBox v-for="category in wishlistsStore.categories" :key="category._id" :category-data="category"
                @click="wishlistsStore.setSelectedCategory(category)" />

            <WishAddCategoryBox />

        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import WishCategoryBox from "./WishCategoryBox.vue";
import WishAddCategoryBox from "./WishAddCategoryBox.vue";

const wishlistsStore = useWishlistsStore();

onMounted(() => {
    if (!wishlistsStore.categories.length) {
        wishlistsStore.fetchWishlists();
    }
});
</script>