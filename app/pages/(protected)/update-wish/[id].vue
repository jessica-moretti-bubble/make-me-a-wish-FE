<template>

    <div class="relative general-bg h-screen overflow-hidden flex justify-center w-full">

        <WIshActionHeader title="Modifica regalo" />

        <CreateGiftModal :initial-data="normalizedWish" />

    </div>

</template>

<script setup lang="ts">
import WIshActionHeader from '~/components/v2/dashboard/gifts/form/WIshActionHeader.vue';
import { useWishesStore } from '~/stores/wishes.store';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import CreateGiftModal from '~/components/v2/dashboard/gifts/form/CreateGiftModal.vue';

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
        //isReserved: w.reservation?.isReserved ?? false,
    }
})
</script>
