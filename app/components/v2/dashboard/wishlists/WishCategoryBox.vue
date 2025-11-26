<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <div class="w-full max-w-[272px] max-h-[76px] p-5 flex items-center justify-between border-white/40 rounded-xl border-l-4  cursor-pointer
            hover:bg-indigo-50 transition-colors" :class="categoryData.color">

        <div class="flex items-center gap-x-4 text-white">
            <div class="flex flex-col">
                <p class="font-semibold">{{ categoryData.name }}</p>
                <p class="text-xs lowercase">0 regali • {{ categoryData.visibility }} </p>
            </div>
        </div>
        <div class="flex items-center gap-x-2 text-white">
            <Icon :name="categoryData.iconName" style="scale: 1.5;" />
            <Icon name="iconamoon:menu-kebab-vertical-bold" style="scale: 1.5;" />
        </div>

    </div>
</template>


<script lang="ts" setup>
import type { WishlistItem } from '~/model/wishlist.model';


defineProps<{
    categoryData: WishlistItem

}>()

</script>
