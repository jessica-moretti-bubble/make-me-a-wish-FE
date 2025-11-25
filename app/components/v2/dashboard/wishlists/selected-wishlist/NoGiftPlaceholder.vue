<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="bg-white w-full h-full p-14 rounded-2xl shadow-2xl flex justify-center items-center flex-col gap-y-8">
        <div
            class="size-[128px] bg-linear-to-b from-[#F3E8FF] to-[#FCE7F3] rounded-full flex justify-center items-center">
            <Icon name="bxs:gift" class="text-[#C084FC]" style="scale: 5;" />
        </div>
        <p class="font-bold text-2xl">La tua wishlist è vuota</p>
        <div class="flex flex-col text-center text-[#4B5563]">
            <p>Inizia ad aggiungere i regali che desideri ricevere. Condividi</p>
            <p>la tua lista con amici e
                familiari per far
                sapere loro cosa ti</p>
            <p> piacerebbe!</p>
        </div>
        <div class="flex flex-col w-[38%] gap-y-2 pb-14 border-b border-[#E5E7EB]">
            <GenericButton label="Aggiungi il tuo primo regalo" variant="purpleLightGradient"
                @click="useWishesStore().setShowAddGiftModal(true)">
                <Icon name="material-symbols:add-2" style="scale: 1.4;" class="mr-2" />
            </GenericButton>
            <GenericButton label="Sfoglia le idee regalo">
                <Icon name="material-symbols:lightbulb-2" style="scale: 1.4;" class="mr-2" />
            </GenericButton>
        </div>
    </div>

</template>


<script lang="ts" setup>
import GenericButton from '~/components/v2/common/buttons/GenericButton.vue';


</script>
