<template>
    <div class="unprotected-layout general-bg">
        <FormBox title="Benvenuto" description="Accedi al tuo account" icon-name="bxs:user">
            <LoginForm />
        </FormBox>
    </div>
</template>

<script setup lang="ts">
import FormBox from '~/components/auth/FormBox.vue';
import LoginForm from '~/components/auth/LoginForm.vue';

definePageMeta({
    middleware: [
        'auth',
    ],
})
</script>