<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>
    <div class="flex items-center justify-between px-6 py-4 bg-white absolute top-0 w-full left-0">
        <div class="flex items-center gap-x-3">
            <DashboardIconBadge />
            <p class="text-[#9333EA] font-bold text-2xl">Make Me A Wish</p>
        </div>
        <div class="flex items-center gap-x-10">
            <RouterLink class="text-[#374151] font-medium" to="/dashboard">
                <p>Dashboard</p>
            </RouterLink>
            <RouterLink class="text-[#374151] font-medium" to="/home/friends-and-gifts">
                <p>Home</p>
            </RouterLink>
            <RouterLink class="text-[#374151] font-medium" to="/settings">
                <p>Settings</p>
            </RouterLink>
            <button class="flex justify-center items-center cursor-pointer">
                <Icon name="material-symbols:notifications-sharp" style="scale: 1.5;" class="text-[#4B5563]" />
            </button>
            <button @click="showLogoutModal = true"
                class="rounded-full size-8 text-white flex justify-center items-center cursor-pointer bg-gradient-icon-rich">
                <p class="uppercase">{{ usernameInitial }}</p>
            </button>
        </div>
    </div>

    <LogoutModal v-model:show="showLogoutModal" />

</template>

<script setup lang="ts">

import { ref } from "vue";
import { } from "~/stores/auth.store";
import { getInitials } from "~/helper/text.helper";
import { RouterLink } from "vue-router";
import DashboardIconBadge from "./DashboardIconBadge.vue";
import LogoutModal from "./LogoutModal.vue";
const showLogoutModal = ref(false);

const authStore = useAuthStore()

const usernameInitial = computed(() =>
    getInitials(authStore.name, authStore.surname)

);

</script>