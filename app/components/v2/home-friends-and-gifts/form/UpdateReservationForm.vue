<template>
    <form v-if="!isUserWish" class="flex flex-col gap-y-3" @submit.prevent="onSubmit">

        <button v-if="!wishData.reservation?.isReserved" type="submit"
            class="bg-gradient-primary text-white p-2 rounded-xl text-xs">
            Prenota
        </button>

        <div v-else class="flex flex-col gap-y-2 border-b pb-8">

            <textarea class="p-2 w-full h-20 border rounded" v-model="note"
                placeholder="Aggiungi o modifica una nota"></textarea>

            <button type="submit" class="bg-blue-500 text-white p-2 rounded-xl text-xs cursor-pointer">
                Aggiorna nota
            </button>

            <button @click.prevent="cancelReservation"
                class="bg-red-500 text-white p-2 rounded-xl text-xs cursor-pointer">
                Cancella prenotazione
            </button>

        </div>

    </form>
</template>


<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { GiftReservationPayloadSchema, type GiftItem } from '~/schemas/payloads/gift.payload.schema'

const props = defineProps<{
    isUserWish?: boolean
    wishData: GiftItem
    userId?: string
}>()

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(GiftReservationPayloadSchema)
})

const { value: note } = useField<string>('note', {
    initialValue: props.wishData.reservation?.note ?? ''
})

watch(
    () => props.wishData.reservation,
    (reservation) => {
        note.value = reservation?.note ?? ""
    },
    { immediate: true }
)



const onSubmit = handleSubmit(async (values) => {

    const isReserved = props.wishData.reservation?.isReserved ?? false



    if (!isReserved) {
        await reserveGift(props.wishData._id!, true, values.note)
    } else {
        await reserveGift(props.wishData._id!, true, values.note)
    }

    await doRefresh()
})


async function cancelReservation() {
    await reserveGift(props.wishData._id!, false, "")
    note.value = ""
    await doRefresh()
}

async function doRefresh() {
    console.log(props.userId)

    await refreshNuxtData(`get-user-${props.userId}`)
}
</script>