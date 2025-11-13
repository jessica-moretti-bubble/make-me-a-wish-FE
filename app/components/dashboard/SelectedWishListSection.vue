<template>
    <div class="w-full p-8 flex flex-col gap-y-8">

        <SelectedWishlistHeader />

        <div class="flex flex-wrap gap-6 max-h-[calc(100vh-200px)] overflow-auto pb-32">
            <WishItem v-for="wish in wishesStore?.wishes" :key="wish._id" :wish-data="wish" />
            <AddNewWishElement />
        </div>

    </div>

</template>

<script lang="ts" setup>
import SelectedWishlistHeader from "./SelectedWishlistHeader.vue";
import WishItem from "./wish-item/WishItem.vue";
import AddNewWishElement from "./AddNewWishElement.vue";

const wishlistsStore = useWishlistsStore();

const wishesStore = useWishesStore();

watch(
    () => wishlistsStore.selectedCategory?._id,
    (id) => {
        if (id) wishesStore.fetcHWishes();
    },
    { immediate: true }
);

/**
 * 
 * NOTA A ME STESS: 
 * Quando cambiato la selectedCategory, il codice non ascoltava il cambiamento. Quindi getWishes non veniva chiamato.
 * 
 * Spiegazione watch:
 * () => wishlistsStore.selectedCategory?._id   -> Dice di osservare quella proprietà. 
 *  (id) => {
        if (id) wishesStore.fetcHWishes();
    },   --> LA CALLBACK dice che ogni volta che la selectedCategory id cambia, deve eseguire fetchWishes
{ immediate: true }  --> al primo render vue esegue il codice, tipo useeffect senza dipendenze
 
 */


</script>
