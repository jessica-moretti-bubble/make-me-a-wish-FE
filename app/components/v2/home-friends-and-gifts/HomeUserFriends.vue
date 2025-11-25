<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="bg-white w-full rounded-[16px] flex flex-col h-[623px] overflow-auto">
        <div class="flex gap-x-4  items-center w-full justify-between border-b-[0.5px]  p-4 py-6 border-b-[#E5E7EB]">
            <p class="text-[18px] font-light w-full">Nuovi amici</p>
            <SearchFriendsForm @get-profiles="handleProfile" />

            <GenericSelectOptions :options="[{ value: 'All friends', label: 'Tutti' }]" />


        </div>
        <PlaceholderInitial v-if="!hasSearched" />
        <PlaceholderNoResults v-else-if="searchedProfiles.length === 0" />
        <div v-else class="flex flex-wrap flex-row gap-6 p-4 justify-start items-start">

            <FriendItem v-for="profile in searchedProfiles" :key="profile.userId" :user="profile" />
        </div>
    </div>
</template>


<script setup lang="ts">
import GenericSelectOptions from '../common/inputs/GenericSelectOptions.vue';
import FriendItem from './FriendItem.vue';
import SearchFriendsForm from '~/components/v2/home-friends-and-gifts/form/SearchFriendsForm.vue';
import PlaceholderInitial from '~/components/v2/home-friends-and-gifts/placeholder/PlaceholderInitial.vue';
import PlaceholderNoResults from '~/components/v2/home-friends-and-gifts/placeholder/PlaceholderNoResults.vue';
import type { User } from '~/schemas/responses/profile.response.schema';

const searchedProfiles = ref<User[] | []>([])

const hasSearched = ref(false)

const handleProfile = (data: User[]) => {
    hasSearched.value = true
    searchedProfiles.value = data
}


</script>
