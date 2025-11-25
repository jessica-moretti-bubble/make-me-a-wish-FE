<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <div class="w-full max-w-[272px] max-h-[76px] p-5 flex items-center justify-between rounded-xl border-l-4  border-l-[#A855F7] bg-[#A855F7]/10 cursor-pointer
            hover:bg-indigo-50 transition-colors">

        <div class="flex items-center gap-x-4">
            <div class="flex flex-col">
                <p class="font-semibold">{{ categoryData.name }}</p>
                <p class="text-xs">0 regali • Privata </p>
            </div>
        </div>
        <div class="flex items-center gap-x-1">
            <Icon :name="categoryData.iconName" style="scale: 1.2;" />
            <Icon name="iconamoon:menu-kebab-vertical-bold" style="scale: 1;" />
        </div>

    </div>
</template>


<script lang="ts" setup>
import type { WishlistItem } from '~/model/wishlist.model';


defineProps<{
    categoryData: WishlistItem

}>()

</script>
