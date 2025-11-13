<template>
    <form class="w-full" @submit.prevent="onSubmit">
        <div class="flex justify-center items-center lg:flex-row flex-col gap-x-4 mb-4">
            <GenericInput v-model="name as string" label="Nome" icon-name="bxs:user" placeholder="Mario" />

            <GenericInput v-model="surname as string" label="Cognome" icon-name="bxs:user" placeholder="Rossi" />
        </div>
        <div class="flex justify-center items-center flex-col gap-y-6 mb-8">
            <GenericInput v-model="email as string" label="Email" type="email" icon-name="bxs:envelope"
                placeholder="mario@example.com" />

            <GenericInput v-model="password as string" label="Password" type="password" icon-name="bxs:lock" />

            <GenericInput label="Conferma password" type="password" icon-name="bxs:lock" v-model="confirmPassword" />
        </div>

        <div class="gap-y-6 flex justify-center items-center flex-col">
            <GenericButton label="Crea account"
                :disabled="!meta.valid || confirmPassword !== password || !confirmPassword" />
            <p v-if="serverError" class="text-red-500">{{ serverError }}</p>

            <div class="w-full flex justify-center items-center flex-col gap-y-4">
                <p>Oppure</p>
                <GenericButton label="Continua con Google" variant="secondary" icon-name="logos:google-icon" />
            </div>
            <p>
                Hai già un account?
                <NuxtLink to="/" class="text-primary-200 hover:underline font-medium">
                    Accedi
                </NuxtLink>
            </p>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import GenericButton from '~/components/common/GenericButton.vue'
import GenericInput from '~/components/common/GenericInput.vue'
import { RegisterSchemaPayload } from '~/schemas/payloads/auth.payload.schema'

const router = useRouter()

const { signup, isSuccess } = useSignup()


const { handleSubmit, meta } = useForm({
    validationSchema: toTypedSchema(RegisterSchemaPayload),
})


const serverError = ref('')

const confirmPassword = ref('')

const {
    value: email,
} = useField('email')

const {
    value: password,
} = useField('password')

const {
    value: name,
} = useField('name')

const {
    value: surname,
} = useField('surname')

watch([email, password], () => {
    if (serverError.value) serverError.value = ''
})



const onSubmit = handleSubmit(async (values) => {
    const payload = {
        email: values.email,
        password: values.password,
        name: values.name,
        surname: values.surname
    }

    await signup(payload)

    if (isSuccess)
        router.push('/login')
})

</script>