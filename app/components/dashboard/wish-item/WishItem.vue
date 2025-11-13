<template>
    <div
        class="bg-white rounded-xl border border-gray-200 lg:w-[400px] lg:h-[420px] shadow-md hover:shadow-lg hover:-translate-y-[2px] transition">
        <WishBackgroundSection :wish-data="wishData" />
        <WishInfoSection :wish-data="wishData" />
    </div>
</template>

<script lang="ts" setup>
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';
import WishBackgroundSection from './components/WishBackgroundSection.vue'
import WishInfoSection from './components/WishInfoSection.vue'


defineProps<{
    wishData: GiftItem
}>()


</script>