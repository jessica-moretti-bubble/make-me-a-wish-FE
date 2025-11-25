<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="relative h-[40%] p-4 flex flex-col gap-y-30 bg-cover bg-center rounded-t-xl" :style="{
        backgroundImage: bg
            ? `url(${bg})`
            : 'linear-gradient(135deg, #f7f7f7, #e9e9e9)'
    }">
        <div v-if="!bg" class="absolute inset-0 flex items-center justify-center opacity-30 rounded-t-xl bg-[#9333EA]">
            <Icon name="mdi:gift-outline" class="text-white text-6xl" />
        </div>


        <button class="cursor-pointer p-1 rounded-4xl w-24 text-xs text-white font-medium transition relative z-10"
            :class="wishData.reservation?.isReserved ? 'bg-green-600' : 'bg-red-600'">
            <p> {{ wishData.reservation?.isReserved ? "Prenotato" : "Non prenotato" }}
            </p>
        </button>
    </div>
</template>



<script lang="ts" setup>
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';
const props = defineProps<{
    wishData: GiftItem
    isUserWish?: boolean
}>()

const bg = ref<string | null>(null)



// @click="handleGiftReservation(!wishData.reservation?.isReserved)"

onMounted(async () => {
    if (!props.wishData.imageKey) return;

    const res = await $fetch("/api/get-image-url", {
        params: { key: props.wishData.imageKey }
    });

    bg.value = res.url;
});


</script>
