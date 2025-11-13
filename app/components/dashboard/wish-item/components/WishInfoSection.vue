<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col p-4 gap-y-3">
        <p class="text-lg font-medium">{{ props.wishData.title }}</p>
        <p class="text-sm font-medium">{{ props.wishData.description }}</p>
        <div class="flex items-center justify-between">
            <p v-if="props.wishData.price" class="font-bold text-xl">{{ props.wishData.price }}€</p>
            <div v-if="props.wishData.location" class="flex items-center gap-x-2">
                <Icon name="mdi:map-marker" style="scale: 1.2;" class="text-gray-500" />
                <a v-if="props.wishData.location" :href="url" target="_blank" class="text-xs">Puoi acquistarlo qui</a>
                <a v-if="props.wishData.locationUrl" :href="props.wishData.locationUrl" target="_blank"
                    class="text-xs">Puoi acquistarlo qui</a>

            </div>
        </div>

        <div class="flex items-center justify-between">
            <p>Vedi prodotto</p>
            <Icon name="mdi:dots-vertical" style="scale: 1.2;" />

        </div>
    </div>
</template>


<script lang="ts" setup>
import { createGoogleMapsUrlWithMarker } from '~/helper/maps.helper';
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';

const props = defineProps<{
    wishData: GiftItem
}>()

const url = createGoogleMapsUrlWithMarker({
    lat: Number(props.wishData.location?.lat),
    lng: Number(props.wishData.location?.lng),
    zoom: 18
})







</script>
