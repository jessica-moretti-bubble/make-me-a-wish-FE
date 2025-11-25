<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>

    <div class="flex flex-col bg-white items-start gap-x-32 py-4 px-10 border border-gray-200 w-full">
        <p class="text-[24px] font-light">Friends & Gift Management</p>
        <p class="text-sm text-[#6B7280]">Gestisci le tue connessioni e prenotazioni regali</p>
    </div>

    <LogoutModal v-model:show="showLogoutModal" />

</template>

<script setup lang="ts">

import { ref } from "vue";
import LogoutModal from "~/components/dashboard/LogoutModal.vue";

const showLogoutModal = ref(false);

</script>