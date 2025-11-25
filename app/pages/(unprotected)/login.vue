<template>
    <div class="grid grid-cols-2 h-screen">
        <LoginHero />
        <LoginForm />
    </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/v2/login/LoginForm.vue';
import LoginHero from '~/components/v2/login/LoginHero.vue';
definePageMeta({
    middleware: [
        'auth',
    ],
})
</script>