<template>

    <div class="relative general-bg px-20 min-h-screen pt-28">
        <DashboardTopBar />
        <div class="flex w-full lg:flex-row flex-col pb-32">
            <WishListsSection />
            <SelectedWishListSection v-if="wishlistsStore.selectedCategory" />
            <WishlistPlaceholderStart v-if="wishlistsStore.categories.length === 0" />
        </div>
    </div>

</template>




<script setup lang="ts">
import DashboardTopBar from '~/components/v2/dashboard/DashboardTopBar.vue';
import WishListsSection from '~/components/v2/dashboard/wishlists/WishListsSection.vue';
import WishlistPlaceholderStart from '~/components/v2/dashboard/wishlists/WishlistPlaceholderStart.vue';
import SelectedWishListSection from '~/components/v2/dashboard/wishlists/selected-wishlist/SelectedWishListSection.vue';
const wishlistsStore = useWishlistsStore()

definePageMeta({
    middleware: [
        'auth',
    ],
})



</script>