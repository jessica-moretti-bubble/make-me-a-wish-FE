<template>
    <div class="unprotected-layout general-bg">
        <FormBox title="Crea il tuo account" description="Inizia oggi stesso" icon-name="bxs:user">
            <SignupForm />
        </FormBox>
    </div>
</template>

<script setup lang="ts">
import FormBox from '~/components/auth/FormBox.vue'
import SignupForm from '~/components/auth/SignupForm.vue';
</script>