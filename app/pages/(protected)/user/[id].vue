<template>
    <div class="flex flex-col px-16 py-8 gap-y-8">
        <p class="text-xl">La wishlist di {{ selectedUser?.username }}</p>
        <div class="flex gap-x-8">
            <div class="flex flex-col gap-y-2 overflow-scroll max-h-[80%] w-[20%] scroll-hide">
                <WishCategoryBox v-for="category in selectedUser?.wishlists" :key="category._id"
                    :category-data="category" @click="wishlistsStore.setSelectedCategory(category)" />
            </div>
            <div class="flex flex-wrap gap-6 max-h-[calc(100vh-200px)] overflow-auto pb-32">
                <WishItem v-for="wish in selectedWishes" :key="wish._id" :wish-data="wish" :is-user-wish="false"
                    :user-id="selectedUser?.userId" />
            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import WishItem from '~/components/v2/dashboard/gifts/item/WishItem.vue'
import WishCategoryBox from '~/components/v2/dashboard/wishlists/WishCategoryBox.vue'
const route = useRoute()
const id = route.params.id as string

const { data: selectedUser } = await getUser(id)

const wishlistsStore = useWishlistsStore()

const selectedWishes = computed(() => {
    const selected = selectedUser.value?.wishlists?.find(
        (wishlist) => wishlist._id === wishlistsStore.selectedCategory?._id
    )

    return selected?.gifts || []
})

</script>
