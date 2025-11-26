<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <GenericModal>
        <form @submit.prevent="onSubmit" class="w-full rounded-2xl flex gap-y-6 flex-col h-auto">

            <WishFormHeader />

            <div class="flex gap-x-10">
                <div class="flex flex-col gap-y-6 w-full">
                    <p class="font-semibold">Informazioni Base</p>

                    <InputFormWrapper v-if="props.initialData" description="Indica se il regalo è stato ricevuto">
                        <WishStatusInput v-model="isReceived" />

                    </InputFormWrapper>

                    <InputFormWrapper description="Questo è il titolo principale che apparirà nella tua wishlist">
                        <GenericInput v-model="title" label="Titolo regalo" required
                            placeholder="Inserisci il nome del regalo desiderato" />
                    </InputFormWrapper>

                    <div class="flex flex-col gap-y-2">
                        <GenericInput v-model="price" label="Prezzo / Budget (Optional)" type="number" />
                        <p class="text-xs text-[#64748B]">Inserisci il prezzo del regalo
                        </p>
                    </div>

                    <InputFormWrapper description="Indica la priorità">
                        <GenericSelectOptions id="priority" input-label="Priorità"
                            :options="[{ value: 'low', label: 'Bassa' }, { value: 'medium', label: 'Media' }, { value: 'high', label: 'Alta' }]" />
                    </InputFormWrapper>
                </div>
                <div class="flex flex-col gap-y-6 w-full">
                    <p class="font-semibold">Informazioni addizionali</p>

                    <InputFormWrapper description="Aggiungi una descrizione del tuo regalo">
                        <label for="description" class="text-sm font-semibold">Descrizione *</label>
                        <textarea id="description" v-model="description"
                            class="border border-gray-500/30 rounded-xl p-2 h-[122px] text-sm" />
                    </InputFormWrapper>


                    <InputFormWrapper description="Condividi un link da cui il tuo regalo può essere acquistato">
                        <GenericInput v-model="locationUrl" label="Url Link (Opzionale)"
                            icon-name="material-symbols:add-link" placeholder="https://example.com/product" />
                    </InputFormWrapper>





                </div>
            </div>

            <div class="flex mt-8 flex-col justify-center items-center border-b border-gray-200 pb-8 gap-y-2">
                <button class="text-sm flex items-center gap-x-4 " @click="mapIsShow = !mapIsShow">
                    <p class="font-semibold">Indica l'eventuale luogo fisico dove il regalo può essere trovato o
                        acquistato (Optional)</p>
                    <Icon
                        :name="mapIsShow ? 'material-symbols:arrow-drop-up-rounded' : 'material-symbols:arrow-drop-down-rounded'"
                        style="scale: 2; color: black;" />
                </button>
                <GoogleMapsInput v-if="mapIsShow" v-model:location="location" />
            </div>

            <NewWishImagePicker @file-selected="onFileSelected" />

            <GiftTags />

            <div class="flex w-full justify-end items-center">
                <div class="flex items-center gap-x-2 w-[50%]">
                    <GenericButton label="Cancel" variant="whiteOutline" class="font-light!" @click="modalVisibility" />
                    <GenericButton :label="isLoading ? 'Caricamento...' : 'Aggiungi alla wishlist'" type="submit"
                        :disabled="!meta.valid" />
                </div>
            </div>
        </form>
    </GenericModal>
</template>


<script setup lang="ts">
import GenericInput from '~/components/v2/common/inputs/GenericInput.vue';
import NewWishImagePicker from '~/components/v2/dashboard/gifts/form/NewWishImagePicker.vue';
import GenericButton from '~/components/v2/common/buttons/GenericButton.vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import WishStatusInput from '~/components/v2/dashboard/gifts/form/WishStatusInput.vue';
import WishFormHeader from '~/components/v2/dashboard/gifts/form/WishFormHeader.vue';
import { GiftSchemaPayload, type GiftItem } from '~/schemas/payloads/gift.payload.schema';
import GoogleMapsInput from '~/components/v2/dashboard/gifts/form/GoogleMapsInput.vue';
import GenericModal from '~/components/v2/common/modals/GenericModal.vue';
import GenericSelectOptions from '~/components/v2/common/inputs/GenericSelectOptions.vue';
import InputFormWrapper from '~/components/v2/common/wrappers/InputFormWrapper.vue';
import GiftTags from './GiftTags.vue';
const mapIsShow = ref(false)

const props = defineProps<{
    initialData?: GiftItem
}>()

const modalVisibility = () => {
    useWishesStore().setShowUpdateGiftModal(false);
    useWishesStore().setShowAddGiftModal(false);


}

const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        modalVisibility()
    }
};

const { handleSubmit, meta, resetForm } = useForm({
    validationSchema: toTypedSchema(GiftSchemaPayload),
})

const serverError = ref('')

const wishlistsStore = useWishlistsStore()

onMounted(() => {
    window.addEventListener('keydown', handleEscapeKey);

    if (props.initialData) {
        resetForm({
            values: {
                title: props.initialData.title,
                description: props.initialData.description ?? "",
                location: props.initialData.location
                    ? {
                        lat: props.initialData.location.lat ?? "",
                        lng: props.initialData.location.lng ?? ""
                    }
                    : undefined,
                locationUrl: props.initialData.locationUrl ?? "",
                price: props.initialData.price ?? undefined,
                // isRe: props.initialData.is ?? false,

            }
        })
    }
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscapeKey);
});

const { value: title } = useField<string>('title');

const { value: description } = useField<string>('description');

const { value: locationUrl } = useField<string | undefined>('locationUrl');

const { value: price } = useField<number | undefined>('price');

const { value: isReceived } = useField<boolean>('isReceived');

const { value: location } = useField<{ lat: string, lng: string } | undefined>('location')



const isLoading = ref(false)

watch([title, description, location, price], () => {
    if (serverError.value) serverError.value = ''
})

const selectedFile = ref<File | null>(null);

const onFileSelected = (file: File | null) => {
    console.log(file, 'file')
    selectedFile.value = file;
};

const onSubmit = handleSubmit(async (values) => {

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

    if (props.initialData) {
        const updatePayload = {
            body: payload,
            params: {
                categoryId: wishlistsStore.selectedCategory?._id ?? '',
                giftId: props.initialData._id ?? ''
            }
        }
        await updateGift(updatePayload)

        isLoading.value = false

        modalVisibility()
        return
    }

    await createWish(payload)

    isLoading.value = false


    modalVisibility()

});

</script>
