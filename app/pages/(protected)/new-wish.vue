<template>

    <div class="relative general-bg h-screen overflow-hidden flex justify-center w-full">

        <WIshActionHeader />

        <NewWishForm />

    </div>

</template>


<script setup lang="ts">
import WIshActionHeader from '~/components/dashboard/wish-form/WIshActionHeader.vue';
import NewWishForm from '~/components/dashboard/new-wish/NewWishForm.vue';


</script>