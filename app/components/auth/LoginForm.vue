<template>
    <form class="w-full" @submit.prevent="onSubmit">
        <div class="flex justify-center items-center flex-col gap-y-6 mb-8">
            <GenericInput v-model="email as string" label="Email" type="email" icon-name="bxs:envelope" />

            <GenericInput v-model="password as string" label="Password" type="password" icon-name="bxs:lock"
                :error="serverError" />
        </div>

        <div class="gap-y-6 flex justify-center items-center flex-col">
            <GenericButton :label="isLoading ? 'Caricamento' : 'Accedi'" :disabled="!meta.valid" />

            <p>
                Non hai un account?
                <NuxtLink to="/signup" class="text-primary-200 hover:underline font-medium">
                    Registrati
                </NuxtLink>
            </p>

            <div class="w-full flex justify-center items-center flex-col gap-y-4">
                <p>Oppure</p>
                <GenericButton label="Continua con Google" variant="secondary" icon-name="logos:google-icon" />
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useAuth } from '~/composables/useAuth'
import GenericButton from '../common/GenericButton.vue'
import GenericInput from '../common/GenericInput.vue'
import { LoginSchemaPayload } from '~/schemas/payloads/auth.payload.schema'

const router = useRouter()
const { login, error: loginError } = useAuth()


const { handleSubmit, meta } = useForm({
    validationSchema: toTypedSchema(LoginSchemaPayload),
})

const serverError = ref('')

const isLoading = ref(false)

const { value: email } = useField('email')

const { value: password } = useField('password')

watch([email, password], () => {
    if (serverError.value) serverError.value = ''
})

const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true

    serverError.value = ''

    await login(values)

    isLoading.value = false

    if (loginError.value) {

        serverError.value = loginError.value.message || 'Errore di autenticazione'

        return
    }

    router.push('/dashboard')


})
</script>
