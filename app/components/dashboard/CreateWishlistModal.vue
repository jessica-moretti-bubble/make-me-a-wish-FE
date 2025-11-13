<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <GenericModal>
        <form @submit.prevent="onSubmit">

            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold text-white">{{ createMode ? 'Crea nuova' : 'Modifica la' }} Wishlist
                </h2>
                <button class="text-white text-xl hover:scale-110 transition" type="button"
                    @click="emit('close')">✖</button>
            </div>

            <input v-model="name" type="text" placeholder="Nome wishlist"
                class="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 outline-none focus:ring focus:ring-indigo-300" />

            <p class="text-md font-medium text-white mt-6 mb-2">{{ createMode ? 'Scegli icona' : 'Modifica icona' }}</p>

            <div class="grid grid-cols-5 gap-y-8 justify-items-center mt-6">
                <button v-for="icon in icons" :key="icon" type="button" @click="selectedIcon = icon"
                    class="p-2 rounded-xl border transition hover:scale-110 cursor-pointer flex justify-center items-center"
                    :class="selectedIcon === icon
                        ? 'bg-indigo-500 border-indigo-300'
                        : 'bg-white/40 border-white/30'">
                    <Icon :name="icon" class="text-white text-2xl" />
                </button>
            </div>

            <div class="grid grid-cols-2 gap-x-32 mt-8">

                <GenericButton label="Annulla" @click="emit('close')" variant="secondary" />

                <GenericButton :label="createMode ? 'Crea' : 'Modifica'" :disabled="!meta.valid || !selectedIcon"
                    :is-loading="isloading" />

            </div>
        </form>
    </GenericModal>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import GenericButton from '../common/GenericButton.vue'
import GenericModal from '../common/GenericModal.vue'
import { icons } from '~/config/categories/categories.config'
import type { WishlistItem } from '~/model/wishlist.model'
import z from 'zod'


const props = defineProps<{
    initialData?: WishlistItem
}>()


const emit = defineEmits<{
    (e: 'close'): void
}>()

const { handleSubmit, meta, resetForm } = useForm({
    validationSchema: toTypedSchema(z.object({
        name: z.string().min(1, "Il nome è obbligatorio"),
        iconName: z.string().optional(),
    })),
})

const wishlistsStore = useWishlistsStore()

const createMode = ref(props.initialData ? false : true)

onMounted(() => {
    if (props.initialData) {
        resetForm({
            values: {
                name: props.initialData.name,
            }
        })

        selectedIcon.value = props.initialData.iconName
        wishlistId.value = props.initialData._id ?? ''
        gifts.value = props.initialData.gifts ?? []

    }

})

const { value: name } = useField<string>('name')

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
        gifts: createMode.value ? [] : gifts.value

    }
    if (createMode.value) {
        await wishlistsStore.createWishlistAndRefetch(payload)
    }
    else {
        await wishlistsStore.updateWishlistAndRefetch(payload)

    }


    isloading.value = false

    emit('close')
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
