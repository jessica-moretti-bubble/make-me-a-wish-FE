<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <div class="w-full p-5 flex items-center justify-between rounded-xl border border-gray-400 cursor-pointer
            hover:bg-indigo-50 transition-colors">

        <div class="flex items-center gap-x-4">
            <Icon :name="categoryData.iconName" style="scale: 1.2;" />
            <div class="flex flex-col">
                <p class="text-md font-semibold">{{ categoryData.name }}</p>
                <p class="text-xs">0 regali</p>

            </div>
        </div>

        <Icon name="mdi:dots-grid" style="scale: 1.2;" />
    </div>
</template>


<script lang="ts" setup>
import type { WishlistItem } from '~/model/wishlist.model';


defineProps<{
    categoryData: WishlistItem

}>()

</script>
