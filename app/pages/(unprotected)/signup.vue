<template>
    <div class="grid grid-cols-2 h-screen overflow-hidden">
        <SignupHero />
        <SignupForm />
    </div>
</template>

<script setup lang="ts">
import SignupHero from '~/components/v2/signup/SignupHero.vue';
import SignupForm from '~/components/v2/signup/SignupForm.vue';
</script>