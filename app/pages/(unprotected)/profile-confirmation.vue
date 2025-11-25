<template>
    <div class="unprotected-layout general-bg">
        <FormBox title="Completa il tuo profilo"
            description="Per continuare devi scegliere un username unico che ti rappresenti nella community."
            icon-name="bxs:user">
            <ConfirmationForm />
        </FormBox>
    </div>
</template>

<script setup lang="ts">
import ConfirmationForm from '~/components/v2/signup/ConfirmationForm.vue';
import FormBox from '~/components/v2/signup/FormBox.vue';
</script>
