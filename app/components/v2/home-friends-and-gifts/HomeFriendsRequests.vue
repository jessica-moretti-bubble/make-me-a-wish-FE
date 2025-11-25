<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="bg-white  min-w-[344px] rounded-[16px] flex flex-col h-[618px]">
        <div class="flex items-center w-full justify-between border-b-[0.5px] p-4 py-6 border-b-[#E5E7EB]">
            <p class="text-[18px] font-light">Richieste di amicizia</p>
            <div
                class="text-xs rounded-full w-[60px] flex justify-center items-center h-[24px] bg-[#FAF5FF] text-[#9333EA]">
                <p>3 Nuove</p>
            </div>

        </div>
        <div class="flex flex-col gap-y-3 p-4">
            <FriendRequestItem v-for="request in requests" :key="request" />
            <div class="border-t-[0.5px] border-t-[#E5E7EB] flex justify-center items-center py-4 mt-2">
                <p class="text-sm text-[#9333EA]">Vedi tutte le richieste</p>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import FriendRequestItem from './FriendRequestItem.vue';

const requests = Array.from(Array(3).keys())



</script>
