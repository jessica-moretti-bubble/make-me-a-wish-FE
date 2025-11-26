<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <ClientOnly>
        <div class="w-full px-8 flex flex-col gap-y-8">
            <SelectedWishlistHeader />
            <WishlistToolbar v-if="wishes && wishes?.length > 0" />
            <div v-if="wishes && wishes?.length > 0" class="flex flex-wrap gap-6 overflow-auto pb-32 scroll-hide">
                <WishItem v-for="wish in wishes" :key="wish._id" :wish-data="wish" :is-user-wish="true"
                    class="flex-1" />
            </div>
            <NoGiftPlaceholder v-else />
        </div>

        <CreateGiftModal v-if="useWishesStore().showUpdateGiftModal" :key="wishesStore.selectedWish?._id"
            :initial-data="wishesStore.selectedWish" />

        <DeleteGiftModal v-if="useWishesStore().showDeleteGiftModal" />

    </ClientOnly>
</template>


<script lang="ts" setup>
import SelectedWishlistHeader from './SelectedWishlistHeader.vue';
import WishItem from '~/components/v2/dashboard/gifts/item/WishItem.vue';
import WishlistToolbar from './WishlistToolbar.vue';
import NoGiftPlaceholder from './NoGiftPlaceholder.vue';
import CreateGiftModal from '../../gifts/form/CreateGiftModal.vue';
import DeleteGiftModal from '../../gifts/form/DeleteGiftModal.vue';
const wishlistsStore = useWishlistsStore();

const wishesStore = useWishesStore()

const categoryId = computed(() => wishlistsStore.selectedCategory?._id);

const { data: wishes, refresh } = getWishes(categoryId);

watch(categoryId, async (newId) => {
    if (!newId) return;

    await refresh();

    wishesStore.setWishes(wishes.value ?? []);
});

</script>
