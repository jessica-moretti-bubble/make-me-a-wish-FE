<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <GenericModal>
        <form @submit.prevent="onSubmit">

            <div class="flex justify-between items-center mb-4 border-b-[0.1px] border-[#334155] pb-6">
                <div class="flex flex-col">
                    <h2 class="text-[24px] font-bold ">
                        {{ createMode ? 'Crea Nuova Wishlist' : 'Modifica la Wishlist' }}
                    </h2>
                    <p class="text-sm text-[#64748B]">Personalizza la tua lista dei desideri</p>
                </div>

                <button class="text-[#94A3B8] text-xl hover:scale-110 transition cursor-pointer" type="button" @click=" modalVisibility(false)
                    ">
                    <Icon name="gridicons:cross-small" style="scale: 1.4;" />
                </button>
            </div>
            <div class="flex flex-col gap-y-2 mt-8">
                <label for="specialDateMode" class="text-[#334155] text-sm font-semibold">Modalità della
                    wishlist</label>
                <WishlistModeOption v-model:special-date-mode="specialDateMode" id="specialDateMode" />


            </div>
            <InputFormWrapper v-if="specialDateMode"
                description="Indica la data entro cui il regalo deve essere acquistato" class="mt-10">
                <input type="date" class="h-[52px] border border-[#D1D5DB] p-4 rounded-lg" v-model="dueDate" />
            </InputFormWrapper>

            <div class="flex flex-col gap-y-2 my-12">
                <label for="name" class="text-[#334155] text-sm font-semibold">Nome della Wishlist *</label>
                <GenericInput v-model="name" type="text" placeholder="Es: Regali di compleanno 2026" id="name" />
                <p class="text-xs text-[#64748B] ">Scegli un nome descrittivo per identificare facilmente la tua lista
                </p>
            </div>

            <div class="flex flex-col gap-y-2">
                <p class="text-[#334155] text-sm font-semibold">{{ createMode ? 'Scegli icona' : 'Modifica icona' }}
                </p>
                <div class="grid grid-cols-10 gap-y-8 justify-items-center mt-6">
                    <button v-for="icon in icons" :key="icon" type="button" @click="selectedIcon = icon"
                        class="p-2 rounded-xl size-[65px] transition hover:scale-110 cursor-pointer flex justify-center items-center"
                        :class="selectedIcon === icon
                            ? 'bg-indigo-500 border-2 border-indigo-400'
                            : 'bg-black border-2 '">
                        <Icon :name="icon" class="text-white text-2xl" />
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-y-2 my-12">
                <label for="description" class="text-[#334155] text-sm font-semibold">Descrizione</label>
                <textarea v-model="description" placeholder="Aggiungi una descrizione per la tua wishlist..."
                    class="border-2 border-gray-300 p-3 rounded-xl h-[128px]" />
                <p class="text-xs text-[#64748B] ">Opzionale: descrivi lo scopo di questa lista 0/200
                </p>
            </div>

            <PrivacyOptions v-model:notification="notification" v-model:visibility="visibility" />

            <ColorsTheme v-model:color="selectedColor" />

            <div class="grid grid-cols-2 gap-2 mt-8">

                <GenericButton label="Annulla" @click="wishlistsStore.setShowAddWishlistModal(false)" size="md" />

                <GenericButton :label="createMode ? 'Crea' : 'Modifica'" :disabled="!meta.valid || !selectedIcon"
                    :is-loading="isloading" size="md" />



            </div>
        </form>
    </GenericModal>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import GenericModal from '~/components/v2/common/modals/GenericModal.vue'
import GenericButton from '~/components/v2/common/buttons/GenericButton.vue'
import InputFormWrapper from '~/components/v2/common/wrappers/InputFormWrapper.vue'
import { icons } from '~/config/categories/categories.config'
import type { WishlistItem } from '~/model/wishlist.model'
import GenericInput from '~/components/v2/common/inputs/GenericInput.vue'
import PrivacyOptions from './PrivacyOptions.vue'
import ColorsTheme from './ColorsTheme.vue'
import WishlistModeOption from './WishlistModeOption.vue'
import { createWishlistFormInitialValue } from '~/config/config-v2/form.config'
import type { WishlistVisibility } from '~/schemas/payloads/wish.payload.schema'
import { WishlistPayloadSchema } from '~/schemas/payloads/wish.payload.schema'

const props = defineProps<{
    initialData?: WishlistItem
}>()

const { handleSubmit, meta, resetForm } = useForm({
    validationSchema: toTypedSchema(
        WishlistPayloadSchema
    ),

    initialValues: createWishlistFormInitialValue
})

const wishlistsStore = useWishlistsStore()

const modalVisibility = (show: boolean) => {
    wishlistsStore.setShowUpdateWishlistModal(show);
    wishlistsStore.setShowAddWishlistModal(show);
}

const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        modalVisibility(false)

    }
};



const createMode = ref(props.initialData ? false : true)

onMounted(() => {
    window.addEventListener('keydown', handleEscapeKey);

    if (props.initialData) {
        resetForm({
            values: {
                name: props.initialData.name,
                description: props.initialData.description,
                notification: props.initialData.notification,
                visibility: props.initialData.visibility,
                specialDateMode: props.initialData.specialDateMode,
                dueDate: props.initialData.dueDate
            }
        })

        selectedIcon.value = props.initialData.iconName
        selectedColor.value = props.initialData.color ?? ''
        wishlistId.value = props.initialData._id ?? ''
        gifts.value = props.initialData.gifts ?? []

    }
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscapeKey);
});

const { value: name } = useField<string>('name')

const { value: description } = useField<string>('description')

const { value: notification } = useField<boolean>('notification')

const { value: specialDateMode } = useField<boolean>('specialDateMode')

const { value: dueDate } = useField<string>("dueDate")

const { value: visibility } = useField<WishlistVisibility>('visibility')

const selectedColor = ref('')

const selectedIcon = ref<string>('')

const isloading = ref(false)

const wishlistId = ref(props.initialData?._id ?? '')

const gifts = ref(props.initialData?.gifts ?? [])

const onSubmit = handleSubmit(async (values) => {

    isloading.value = true

    if (!selectedIcon.value) return

    const payload = {
        ...values,
        iconName: selectedIcon.value,
        _id: wishlistId.value,
        color: selectedColor.value,
        dueDate: values.dueDate || undefined,
        gifts: createMode.value ? [] : gifts.value,


    }
    if (createMode.value) {
        await wishlistsStore.createWishlistAndRefetch(payload)
        modalVisibility(false)
    }
    else {
        const updatePayload = {
            body: payload,
            categoryId: payload._id
        }
        await wishlistsStore.updateWishlistAndRefetch(updatePayload)
    }

    isloading.value = false

    modalVisibility(false)

})

</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: scale(.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fade-in .25s ease-out;
}
</style>
