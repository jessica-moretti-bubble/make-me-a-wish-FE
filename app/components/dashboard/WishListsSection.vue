<template>
    <div class="bg-white w-[28%] p-6 flex flex-col gap-y-6 border-r border-gray-200">
        <p class="font-semibold text-lg">La tua wishlist</p>

        <div class="flex flex-col gap-y-2 overflow-scroll max-h-[80%] scroll-hide">
            <WishCategoryBox v-for="category in wishlistsStore.categories" :key="category._id" :category-data="category"
                @click="() => {
                    wishlistsStore.setSelectedCategory(category)
                }" />

            <WishAddCategoryBox />
        </div>
    </div>
</template>

<script setup lang="ts">
import WishCategoryBox from "./WishCategoryBox.vue";
import WishAddCategoryBox from "./WishAddCategoryBox.vue";

const wishlistsStore = useWishlistsStore();



onMounted(() => {
    wishlistsStore.fetchWishlists()
})



</script>