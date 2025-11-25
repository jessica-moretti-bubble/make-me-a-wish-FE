<template>
    <div
        class="bg-white rounded-xl border border-gray-200 min-w-[372px] max-w-[300px] h-[520px] shadow-md hover:shadow-2xl text-lg hover:-translate-y-[2px] transition">
        <WishBackgroundSection :wish-data="wishData" :is-user-wish="isUserWish" :user-id="userId" />
        <WishInfoSection :wish-data="wishData" :is-user-wish="isUserWish" :user-id="userId" />

    </div>


</template>

<script lang="ts" setup>
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';
import WishBackgroundSection from '~/components/v2/dashboard/gifts/item/WishBackgroundSection.vue';
import WishInfoSection from '~/components/v2/dashboard/gifts/item/WishInfoSection.vue';
withDefaults(
    defineProps<{
        wishData: GiftItem
        isUserWish?: boolean
        userId?: string
    }>(),
    {
        isUserWish: true
    }
)





</script>