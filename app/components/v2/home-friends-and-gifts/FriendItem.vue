<template>
    <div
        class="max-w-[300px] w-full h-[276px] flex justify-center items-start  gap-y-4 flex-col p-6 bg-linear-to-br from-purple-200/40 via-pink-100/30 rounded-[12px]">
        <div class="flex items-start justify-between w-full">
            <div class="flex items-center gap-x-4 w-full pb-2">
                <div
                    class="size-[56px] flex justify-center items-center text-white uppercase rounded-full bg-[#EC4899]">
                    <p> {{ user.name?.charAt(0) }}{{ user.surname?.charAt(0) }}</p>
                </div>

                <div class="flex flex-col ">
                    <p>{{ user.name }} {{ user.surname }}</p>
                    <p class="text-xs text-[#6B7280]">@{{ user.username }}</p>
                </div>
            </div>
            <Icon name="octicon:kebab-vertical" />
        </div>
        <p
            class="text-[#DB2777] w-[70%] text-xs bg-[#DB2777]/10 px-2 py-1 rounded-full flex justify-center items-center">
            Compleanno tra 3 giorni
        </p>
        <div class="flex flex-col gap-y-3 bg-white w-full p-2 rounded-lg text-sm">
            <div class="flex items-center justify-between w-full">
                <p class="text-[#4B5563]">Regali wishlist</p>
                <p>{{ user.wishlists?.length }}</p>
            </div>
            <div class="flex items-center justify-between w-full">
                <p class="text-[#4B5563]">Disponibili</p>
                <p class="text-green-500">1</p>
            </div>
        </div>
        <div class="flex items-center w-full gap-x-4">
            <GenericButton label="Vedi wishlists" variant="purpleLightGradient" size="sm" @click="goToProfile">
                <Icon name="mingcute:gift-fill" class="text-white" />
            </GenericButton>
            <button
                class="flex justify-center items-center h-[40px] w-[50px] bg-white rounded-lg border border-[#E5E7EB]">
                <Icon name="material-symbols:chat-bubble" />
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import GenericButton from '../common/buttons/GenericButton.vue';
import type { User } from '~/schemas/responses/profile.response.schema'
const data = defineProps<{
    user: User
}>()


const usersStore = useUsersStore()

const goToProfile = () => {
    if (data.user.userId)
        usersStore.setSelectedUserId(data.user.userId)
    navigateTo(`/user/${data.user.userId}`)

}




</script>