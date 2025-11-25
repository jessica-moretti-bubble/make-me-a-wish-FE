<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col p-4 ">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[20px] text-[#1E293B]">{{ props.wishData.title }}</p>
            <p v-if="props.wishData.price" class="font-bold text-[24px] text-[#6366F1]">€ {{ props.wishData.price }}</p>
        </div>

        <div class="flex flex-col gap-y-8 h-[130px] my-6 border-b border-[#E2E8F0]">
            <p class="text-sm text-[#4B5563]">{{ props.wishData.description }}</p>
            <div class="flex flex-col gap-y-3 mt-3">
                <div v-if="props.wishData.locationUrl" class="flex items-center gap-x-2 text-[#4F46E5]">
                    <Icon name="mdi:map-marker" style="scale: 1.2;" />
                    <a :href="props.wishData.locationUrl" target="_blank" class="text-xs">Vedi negozio online</a>
                </div>

                <div v-if="props.wishData.location" class="flex items-center gap-x-2 text-[#E11D48]">
                    <Icon
                        name="streamline:travel-map-navigation-arrow-compass-arrow-map-bearing-navigation-maps-heading-gps"
                        style="scale: 0.8;" />
                    <a :href="url" target="_blank" class="text-xs">Vedi su Google Maps</a>
                </div>

            </div>

        </div>
        <WishItemActionsWrap v-if="isUserWish" :selected-wish="props.wishData" />

        <UpdateReservationForm v-if="!isUserWish" :is-user-wish="isUserWish" :wish-data="wishData" :user-id="userId" />


    </div>
</template>


<script lang="ts" setup>
import UpdateReservationForm from '~/components/v2/home-friends-and-gifts/form/UpdateReservationForm.vue';
import { createGoogleMapsUrlWithMarker } from '~/helper/maps.helper';
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';
import WishItemActionsWrap from './WishItemActionsWrap.vue';

const props = defineProps<{
    isUserWish?: boolean
    wishData: GiftItem,
    userId?: string
}>()

const url = createGoogleMapsUrlWithMarker({
    lat: Number(props.wishData.location?.lat),
    lng: Number(props.wishData.location?.lng),
    zoom: 18
})


</script>
