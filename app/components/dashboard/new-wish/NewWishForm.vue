<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <form @submit.prevent="onSubmit"
        class="mt-32 py-5 w-[50%] max-h-[85vh] overflow-scroll rounded-2xl shadow-xl bg-white flex gap-y-14 flex-col h-auto">

        <WishFormHeader />

        <div class="flex flex-col gap-y-4 pb-4 px-10">

            <WishStatusInput v-model="isReceived" />

            <div class="flex flex-col gap-y-2">

                <GenericInput v-model="title" label="Titolo regalo"
                    placeholder="Inserisci il nome del regalo desiderato" />

                <p class="text-sm">Questo è il titolo principale che apparirà nella tua wishlist</p>

            </div>

            <label for="description" class="text-sm">Descrizione</label>

            <textarea id="description" v-model="description" class="border border-gray-500 rounded-xl p-2 text-sm" />

            <div class="flex flex-col gap-y-2">

                <GenericInput v-model="locationUrl" label="Url Link (Opzionale)" icon-name="material-symbols:add-link"
                    placeholder="https://example.com/product" />

                <p class="text-sm">Condividi un link da cui il tuo regalo può essere trovato </p>

            </div>

            <NewWishImagePicker @file-selected="onFileSelected" />

            <GenericInput v-model="price" label="Prezzo / Budget (Optional)" type="number" />

            <div class="flex flex-col border-b border-gray-200 pb-8 gap-y-2">

                <GenericInput v-model="location" label="Location (Optional)" placeholder="Cerca una location..."
                    icon-name="material-symbols:add-location-alt-rounded" />

                <p class="text-sm">Indica dove il regalo può essere trovato o acquistato</p>

            </div>

            <div class="grid grid-cols-2 mt-8">

                <div class="flex items-center gap-x-4">

                    <Icon name="mdi:arrow-left" style="scale: 1.5;" class="text-gray-400 cursor-pointer"
                        @click="() => router.push('/dashboard')" />

                    <p class="whitespace-nowrap text-lg font-medium">Torna alla Wishlist</p>

                </div>

                <GenericButton :label="isLoading ? 'Caricamento...' : 'Aggiungi alla wishlist'" type="submit"
                    :disabled="!meta.valid" />

            </div>

        </div>

    </form>

</template>


<script setup lang="ts">
import GenericInput from '~/components/common/GenericInput.vue';
import NewWishImagePicker from './NewWishImagePicker.vue';
import GenericButton from '~/components/common/GenericButton.vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useRouter } from 'vue-router';
import WishStatusInput from './inputs/WishStatusInput.vue';
import WishFormHeader from '../wish-form/WishFormHeader.vue';
import { GiftSchemaPayload } from '~/schemas/payloads/gift.payload.schema';


const props = defineProps<{
    initialData?: {
        id: string
        title: string
        description?: string
        location?: string
        locationUrl?: string
        price?: number | null
        imageKey?: string | null
        isReceived?: boolean
    }
}>()


const { handleSubmit, meta, resetForm } = useForm({
    validationSchema: toTypedSchema(GiftSchemaPayload),
})

const serverError = ref('')

const wishlistsStore = useWishlistsStore()


onMounted(() => {
    if (props.initialData) {
        resetForm({
            values: {
                title: props.initialData.title,
                description: props.initialData.description ?? "",
                location: props.initialData.location ?? "",
                locationUrl: props.initialData.locationUrl ?? "",
                price: props.initialData.price ?? undefined,
                isReceived: props.initialData.isReceived ?? false,

            }
        })
    }
})



const { value: title } = useField<string>('title');

const { value: description } = useField<string>('description');

const { value: location } = useField<string | undefined>('location');

const { value: locationUrl } = useField<string | undefined>('locationUrl');

const { value: price } = useField<number | undefined>('price');

const { value: isReceived } = useField<boolean>('isReceived');


const isLoading = ref(false)


watch([title, description, location, price], () => {
    if (serverError.value) serverError.value = ''
})
const selectedFile = ref<File | null>(null);

const onFileSelected = (file: File | null) => {
    console.log(file, 'file')
    selectedFile.value = file;
};

const router = useRouter()


const onSubmit = handleSubmit(async (values) => {


    console.log(wishlistsStore.selectedCategory?._id, 'cat')

    isLoading.value = true

    let imageKey = props.initialData?.imageKey ?? ''


    if (selectedFile.value) {
        const { uploadUrl, key } = await $fetch("/api/upload-url", {
            params: { ext: selectedFile.value.type.split("/")[1] }
        });

        await fetch(uploadUrl, {
            method: "PUT",
            body: selectedFile.value
        });

        console.log(key, 'key')

        imageKey = key;
    }

    const payload = {
        ...values,
        imageKey,
        categoryId: wishlistsStore.selectedCategory?._id ?? '',
        isReceived: isReceived.value,

    }


    await createWish(payload)

    isLoading.value = false

    router.push('/dashboard')


});


</script>
