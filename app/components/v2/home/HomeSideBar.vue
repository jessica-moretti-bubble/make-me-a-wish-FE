<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="h-screen w-[350px] px-8 pt-5 border-r border-gray-200 bg-white">
        <div class="border-b-[0.5px] pb-5 border-gray-200 flex items-center gap-x-3">
            <HomeIconBadge />
            <div class="flex flex-col">
                <p class="text-[20px]">Make Me A Wish</p>
                <p class="text-xs text-[#6B7280]">Home</p>
            </div>
        </div>
        <div class="flex flex-col gap-y-2 w-full mt-8">
            <RouterLink v-for="item in menuItems" :key="item.id" :to="item.path"
                class="flex items-center justify-between w-full px-4 py-3 rounded-xl transition-colors"
                active-class="bg-[linear-gradient(to_bottom_right,#9333ea_0%,#db2777_100%)]" v-slot="{ isActive }">
                <div class="flex items-center gap-x-4">
                    <Icon :name="item.iconName" :class="isActive ? 'text-white' : 'text-[#9CA3AF]'"
                        style="scale: 1.4;" />
                    <p :class="isActive ? 'text-white' : 'text-[#374151]'">
                        {{ item.title }}
                    </p>
                </div>
                <div v-if="item.additionalValue"
                    class="rounded-full size-[20px] bg-[#EF4444] text-white flex items-center text-xs justify-center">
                    <p>0</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import HomeIconBadge from './HomeIconBadge.vue';
import { menuItems } from '~/config/config-v2/home-side-bar.config';




</script>