<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class=" w-full h-screen overflow-scroll flex flex-col p-6 gap-y-6">
        <HomeUserValuesWrapper />
        <div class="flex items-start gap-x-6">
            <div class="flex flex-col gap-y-6">
                <HomeFriendsRequests />
                <HomeUpcomingDates />
            </div>
            <HomeUserFriends />
        </div>
    </div>
</template>


<script setup lang="ts">
import HomeFriendsRequests from '~/components/v2/home-friends-and-gifts/HomeFriendsRequests.vue';
import HomeUpcomingDates from '~/components/v2/home-friends-and-gifts/HomeUpcomingDates.vue';
import HomeUserFriends from '~/components/v2/home-friends-and-gifts/HomeUserFriends.vue';
import HomeUserValuesWrapper from '~/components/v2/home-friends-and-gifts/HomeUserValuesWrapper.vue';



</script>
