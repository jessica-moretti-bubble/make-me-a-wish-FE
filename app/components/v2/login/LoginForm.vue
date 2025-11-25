<template>
    <AuthFormWrapper>
        <LoginFormHeader />
        <form class="w-full" @submit.prevent="onSubmit">
            <div class="flex justify-center items-center flex-col gap-y-6 mb-8">
                <GenericInput v-model="email as string" label="Email" type="email"
                    icon-name="material-symbols:mail-outline" placeholder="inserisci@email.com" />
                <GenericInput v-model="password as string" label="Password" type="password"
                    icon-name="material-symbols:lock" placeholder="••••••••••" :error="serverError" />
            </div>
            <div class="gap-y-6 flex justify-center items-center flex-col">
                <GenericButton :label="isLoading ? 'Caricamento' : 'Accedi'" :disabled="!meta.valid">
                    <Icon name="ic:baseline-logout" style="scale: 1" />
                </GenericButton>
                <p class="text-sm font-medium text-[#6B7280]">
                    Non hai un account?
                    <NuxtLink to="/signup" class="text-[#4F46E5] hover:underline font-medium">
                        Registrati
                    </NuxtLink>
                </p>
                <div class="w-full flex justify-center items-center flex-col gap-y-4">
                    <p class="text-sm font-medium text-[#6B7280]">Oppure</p>
                    <GenericButton label="Continua con Google" icon-name="logos:google-icon" variant="whiteOutline"
                        @click="googleLogin">
                        <Icon name="logos:google-icon" style="scale: 1" />
                    </GenericButton>
                </div>
            </div>
        </form>
    </AuthFormWrapper>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { LoginSchemaPayload } from '~/schemas/payloads/auth.payload.schema'
import GenericButton from '../common/buttons/GenericButton.vue'
import GenericInput from '~/components/v2/common/inputs/GenericInput.vue'
import LoginFormHeader from './LoginFormHeader.vue'
import AuthFormWrapper from '../common/wrappers/AuthFormWrapper.vue'
const router = useRouter()
const { login, error: loginError } = useAuth()

const { googleLogin } = useGoogleAuth()



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
