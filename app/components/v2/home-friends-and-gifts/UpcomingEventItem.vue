<template>
    <div
        class="w-full h-[115px] flex justify-center gap-y-4 flex-col px-4 py-3  bg-linear-to-br from-purple-200/40 via-pink-100/30 rounded-[12px]">
        <div class="flex items-center flex-col w-full">
            <div class="flex items-center gap-x-4 w-full border-b-[0.5px] border-[#EC4899] pb-2">
                <div
                    class="size-[48px] rounded-[12px] bg-[#EC4899] text-white uppercase flex flex-col justify-center items-center text-xs">
                    <p>mar</p>
                    <p>24</p>
                </div>
                <div class="flex flex-col ">
                    <p class="text-sm">Compleanno Sofia</p>
                    <p class="text-xs text-[#6B7280]">Tra 3 giorni</p>

                </div>
            </div>

            <div class="flex items-center justify-between w-full pt-3">
                <p class="text-xs text-[#6B7280]">2 regali prenotati</p>
                <RouterLink to="" class="text-xs text-[#EC4899]">Vedi wishlist</RouterLink>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>