<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>

    <div class="flex fixed top-0 bg-white items-center justify-between p-4 border-b border-gray-200 w-full">

        <p class="whitespace-nowrap font-bold text-2xl">La mia wishlist</p>

        <div class="flex items-center gap-x-8 w-[40rem]">

            <SearchInput />

            <button @click="showLogoutModal = true"
                class="rounded-full size-10 text-white flex justify-center items-center cursor-pointer bg-gradient-icon-rich">
                <p class="uppercase">{{ usernameInitial }}</p>
            </button>

        </div>

    </div>

    <LogoutModal v-model:show="showLogoutModal" />

</template>

<script setup lang="ts">

import { ref } from "vue";
import { } from "~/stores/auth.store";
import SearchInput from "../dashboard/SearchInput.vue";
import LogoutModal from "../dashboard/LogoutModal.vue";
import { getInitials } from "~/helper/text.helper";

const showLogoutModal = ref(false);

const authStore = useAuthStore()

const usernameInitial = computed(() =>
    getInitials(authStore.name, authStore.surname)
);

/**
 * 
 * NOTA A ME STESSA: 
 * 
 * getInitilals in computed viene eseguita solo quando name o surname cambiano. Vue lo capisce in automatico
 */

</script>