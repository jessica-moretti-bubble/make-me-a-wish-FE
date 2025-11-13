<template>

    <div class="relative general-bg h-screen overflow-hidden flex justify-center w-full">

        <WIshActionHeader title="Modifica regalo" />

        <NewWishForm :initial-data="normalizedWish" />

    </div>

</template>

<script setup lang="ts">
import NewWishForm from '~/components/dashboard/new-wish/NewWishForm.vue';
import WIshActionHeader from '~/components/dashboard/wish-form/WIshActionHeader.vue';
import { useWishesStore } from '~/stores/wishes.store';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()
const id = route.params.id as string

const wishesStore = useWishesStore()

const wishToEdit = computed(() => wishesStore.wishes.find(w => w._id === id))

const normalizedWish = computed(() => {

    const w = wishToEdit.value

    if (!w) return undefined

    return {
        id: w._id ?? '',
        title: w.title,
        description: w.description ?? "",
        location: {
            lat: w.location?.lat ?? '',
            lng: w.location?.lng ?? ''
        },
        locationUrl: w.locationUrl ?? "",
        price: w.price ?? null,
        imageKey: w.imageKey ?? null,
        isReceived: w.isReceived ?? false,
    }
})
</script>
