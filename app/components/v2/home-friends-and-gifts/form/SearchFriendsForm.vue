<template>
    <div class="w-full">
        <GenericInput v-model="username" icon-name="material-symbols:search-rounded"
            placeholder="Cerca amici tramite username" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useDebounceFn } from '@vueuse/core'
import GenericInput from '../v2/common/inputs/GenericInput.vue'
import { SearchUsersPayloadParamsSchema } from '~/schemas/payloads/users.payload.schema'


const emit = defineEmits(['getProfiles'])


useForm({
    validationSchema: toTypedSchema(SearchUsersPayloadParamsSchema),
})

const { value: username } = useField<string>('username')

const serverError = ref('')

const isLoading = ref(false)

watch(username, () => {
    if (serverError.value) serverError.value = ''
})

const debouncedSearch = useDebounceFn(async (value: string) => {
    if (!value) {
        emit('getProfiles', [])
        return
    }

    isLoading.value = true

    serverError.value = ''

    const { data, error } = await getUsers(value)


    emit('getProfiles', data.value)


    if (error.value) {
        serverError.value = error.value.message
    }

    if (data.value) {
        emit('getProfiles', data.value)
    }

    isLoading.value = false
}, 400)

watch(username, (newVal) => debouncedSearch(newVal))
</script>
