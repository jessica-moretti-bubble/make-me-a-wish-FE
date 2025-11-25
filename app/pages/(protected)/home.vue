<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/valid-v-else -->
<template>
    <div class="flex items-start">
        <HomeSideBar />
        <div class="flex flex-col w-full h-screen bg-linear-to-br from-purple-200/40 via-pink-100/30 to-white">
            <HomeTopBar />
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import HomeTopBar from '~/components/v2/home/HomeTopBar.vue'
import HomeSideBar from '~/components/v2/home/HomeSideBar.vue'
import { RouterView } from 'vue-router'

</script>