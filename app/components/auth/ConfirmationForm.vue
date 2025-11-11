<template>
    <form class="w-full gap-y-6 flex flex-col" @submit.prevent="onSubmit">
        <div class="flex justify-center items-center flex-col gap-y-2">
            <GenericInput v-model="username as string" label="Username" icon-name="bxs:user"
                placeholder="@ il_tuo_username" />
            <p class="text-center text-xs text-gray-500">L'username deve contenere solo lettere, numeri e underscore
            </p>
        </div>

        <UsernameRequirementsBox :username-value="username" />

        <div class="gap-y-6 flex justify-center items-center flex-col">
            <GenericButton label="Completa profilo" :disabled="!meta.valid" />
            <p class="text-center text-xs text-gray-500">Potrai confermare il tuo userame in seguito dalle impostazioni
                del profilo
            </p>

            <p v-if="serverError" class="text-red-500">{{ serverError }}</p>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import GenericButton from '~/components/common/GenericButton.vue'
import GenericInput from '~/components/common/GenericInput.vue'
import UsernameRequirementsBox from '~/components/auth/UsernameRequirementsBox.vue'
import { ProfileConfirmationPayloadSchema } from '~/schemas/auth.schema'

const router = useRouter()

const { confirmProfile, isSuccess } = useProfileConfirmation()




const { handleSubmit, meta } = useForm({
    validationSchema: toTypedSchema(ProfileConfirmationPayloadSchema),
})

const serverError = ref('')

const { value: username } = useField<string>('username')

const onSubmit = handleSubmit(async (values) => {

    await confirmProfile({ username: values.username })

    if (isSuccess.value) {
        useAuthStore().setProfileIsCompleted(true)
        router.push('/dashboard')
    }

})

</script>