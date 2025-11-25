<template>
    <AuthHeroWrapper>
        <div class="flex flex-col p-8 text-white w-[50%]">
            <div class="flex items-center gap-x-3 mb-8">
                <div class=" bg-white size-[40px] rounded-[8px] flex justify-center items-center">
                    <Icon name="famicons:gift" style="scale: 1.8" class="text-[#4F46E5]" />
                </div>
                <p class="font-bold text-2xl">Make Me A Wish</p>
            </div>
            <p class="text-4xl font-bold mb-8">Inizia il tuo viaggio con noi</p>
            <p class="leading-8">Unisciti a migliaia di utenti che hanno già scelto la nostra piattaforma per
                condividero i loro
                regali e wishlists.</p>
        </div>
    </AuthHeroWrapper>
</template>


<script setup lang="ts">
import AuthHeroWrapper from '../common/wrappers/AuthHeroWrapper.vue';

</script>