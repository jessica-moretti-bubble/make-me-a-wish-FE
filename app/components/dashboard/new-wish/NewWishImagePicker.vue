<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div>
        <p class="text-sm">Immagine custom (Optional)</p>

        <div class="py-8 border-3 border-dotted border-gray-400 flex flex-col justify-center items-center gap-2">
            <div class="size-[70px] rounded-xl flex justify-center items-center bg-gray-200">
                <Icon :name="fileExist ? 'streamline-ultimate-color:check' : 'bxs:camera'" style="scale: 1.5"
                    :class="fileExist ? '' : 'bg-gray-400'" />
            </div>

            <p class="font-semibold text-gray-600">
                {{ fileExist ? 'Upload corretto' : 'Upload immagine' }}
            </p>

            <p class="text-gray-600">
                {{ fileExist ? 'Immagine caricata con successo' : 'PNG, JPG, GIF fino a 10MB' }}
            </p>

            <input id="fileUpload" ref="fileInputRef" type="file" class="hidden" @change="onFileSelected" />

            <div class="flex flex-col gap-y-4 mt-8">
                <label for="fileUpload"
                    class="cursor-pointer h-[40px] whitespace-nowrap px-10 rounded-xl flex justify-center items-center bg-gray-200 font-medium text-gray-700 hover:bg-gray-300 transition">
                    {{ fileExist ? 'Modifica file' : 'Scegli file' }}
                </label>

                <GenericButton v-if="fileExist" label="Rimuovi file" variant="secondary" @click="handleRemoveImage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GenericButton from '~/components/common/GenericButton.vue';
const fileExist = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

const emit = defineEmits<{
    (e: "file-selected", file: File | null): void
}>();

const onFileSelected = (e: Event) => {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) return;

    emit("file-selected", file);
    fileExist.value = true;
};

const handleRemoveImage = () => {
    fileExist.value = false;
    emit("file-selected", null);
    if (fileInputRef.value) {
        fileInputRef.value.value = "";
    }
};
</script>
