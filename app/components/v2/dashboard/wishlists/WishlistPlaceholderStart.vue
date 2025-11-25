<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div
        class="bg-white w-full h-full p-14 rounded-2xl shadow-2xl flex justify-center items-center flex-col gap-y-8 ml-8">
        <div
            class="size-[128px] bg-linear-to-b from-[#F3E8FF] to-[#FCE7F3] rounded-full flex justify-center items-center">
            <Icon name="bxs:gift" class="text-[#C084FC]" style="scale: 5" />
        </div>
        <p class="font-bold text-3xl">
            Il tuo viaggio in Make Me A Wish inizia qui
        </p>
        <div class="flex flex-col text-center text-[#4B5563]">
            <p>Inizia creando la tua prima wishlist e lascia che amici e parenti</p>
            <p>
                sappiano cosa potrebbe renderti felice. E' semplice, divertente e magico
            </p>
        </div>
        <div class="flex items-center gap-x-3">
            <WishlistTip class="bg-linear-to-b from-[#F3E8FF] to-[#FCE7F3]" title="Crea la wishlist"
                description="Organizza i tuoi regali per eventi, occasioni, categorie">
                <Icon name="material-symbols:add-circle" class="text-[#9333EA]" style="scale: 2" />
            </WishlistTip>
            <WishlistTip class="bg-[#FFF1F2]" title="Aggiungi i tuoi regali"
                description="Includi foto, links, posizione e altri dettagli ">
                <Icon name="mingcute:gift-2-fill" class="text-[#DB2777]" style="scale: 2" />
            </WishlistTip>
            <WishlistTip class="bg-[#EFF6FF]" title="Condividi"
                description="Condividi con qualcuno che ami e guarda i tuoi sogni diventare reali">
                <Icon name="ic:baseline-share" class="text-[#4F46E5]" style="scale: 2" />
            </WishlistTip>
        </div>
        <div class="flex w-[70%] gap-x-2 pb-12 border-b border-[#E5E7EB]">
            <GenericButton label="Crea la tua prima wishlist" variant="purpleLightGradient"
                @click="wishlistsStore.setShowAddWishlistModal(true)">
                <Icon name="material-symbols:add-2" style="scale: 1.4" class="mr-2" />
            </GenericButton>
            <GenericButton label="Guarda il tutorial" variant="whiteOutline">
                <Icon name="material-symbols:lightbulb-2" style="scale: 1.4" class="mr-2" />
            </GenericButton>
        </div>
        <div
            class="w-full h-[120px] bg-linear-to-b from-[#F3E8FF] to-[#FCE7F3] rounded-[12px] flex items-center justify-center gap-x-2">
            <div
                class="bg-[linear-gradient(to_bottom_right,#9333ea_0%,#db2777_100%)] rounded-full flex justify-center items-center size-[48px]">
                <Icon name="ri:lightbulb-fill" class="text-white" style="scale: 1.5" />
            </div>
            <div class="flex flex-col">
                <p class="text-[#1F2937] font-semibold">
                    Pro tip: Rendi la tua wishlist descrittiva
                </p>
                <p class="text-[#4B5563] text-sm">
                    Aggiungi descrizioni dettagliate, foto e links per aiutare i tuoi
                    amici e la tua famiglia a trovare il regalo perfetto. Più informazioni
                    fornisci, più sarà efficace!
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import GenericButton from "~/components/v2/common/buttons/GenericButton.vue";
import WishlistTip from "./WishlistTip.vue";
const wishlistsStore = useWishlistsStore();
</script>
