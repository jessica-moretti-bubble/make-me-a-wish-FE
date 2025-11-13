<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>

    <div class="flex fixed top-0 bg-white items-center justify-between p-4 border-b border-gray-200 w-full">

        <RouterLink class="size-10 rounded-2xl bg-gradient-primary flex justify-center items-center cursor-pointer"
            to="/home">
            <Icon name="dashicons:admin-home" style="scale: 1.5; color: white;" />
        </RouterLink>
        <button @click="showLogoutModal = true"
            class="rounded-full size-10 text-white flex justify-center items-center cursor-pointer bg-gradient-icon-rich">
            <p class="uppercase">{{ usernameInitial }}</p>
        </button>


    </div>

    <LogoutModal v-model:show="showLogoutModal" />

</template>

<script setup lang="ts">

import { ref } from "vue";
import { } from "~/stores/auth.store";
import LogoutModal from "../dashboard/LogoutModal.vue";
import { getInitials } from "~/helper/text.helper";
import { RouterLink } from "vue-router";

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