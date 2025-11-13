<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="relative h-[55%] p-4 flex flex-col gap-y-30 bg-cover bg-center rounded-t-xl"
        :style="{ backgroundImage: bg ? `url(${bg})` : 'none' }">
        <WishItemActionsWrap :id="props.wishData._id ?? ''" />
        <div class="justify-center items-center p-1 rounded-4xl flex w-24 transition"
            :class="wishData.isReceived ? 'bg-green-600' : 'bg-red-600'">
            <p class="text-xs text-white font-medium">{{ wishData.isReceived ? 'Ricevuto' : 'Non ricevuto' }}</p>
        </div>
    </div>

</template>


<script lang="ts" setup>
import type { GiftItem } from '~/schemas/payloads/gift.payload.schema';
import WishItemActionsWrap from './WishItemActionsWrap.vue';

const props = defineProps<{
    wishData: GiftItem
}>()


const bg = ref<string | null>(null)


onMounted(async () => {
    if (!props.wishData.imageKey) return;

    const res = await $fetch("/api/get-image-url", {
        params: { key: props.wishData.imageKey }
    });

    bg.value = res.url;
});


</script>
