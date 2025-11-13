<template>

    <div class="relative general-bg h-screen overflow-hidden">

        <TopBar />

        <div class="flex mt-20 w-full h-full">

            <WishListsSection />
            <SelectedWishListSection v-if="wishlistsStore.selectedCategory" />

        </div>
    </div>

</template>




<script setup lang="ts">
import TopBar from '~/components/common/TopBar.vue';
import WishListsSection from '~/components/dashboard/WishListsSection.vue';
import SelectedWishListSection from '~/components/dashboard/SelectedWishListSection.vue';

const wishlistsStore = useWishlistsStore()




definePageMeta({
    middleware: [
        'auth',
    ],
})

</script>