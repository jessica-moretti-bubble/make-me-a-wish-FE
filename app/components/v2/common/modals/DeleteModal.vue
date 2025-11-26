<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

        <div class="bg-white   shadow-2xl lg:w-[26%] overflow-scroll flex flex-col lg:max-h-[500px]
                    p-8 rounded-2xl animate-fade-in">
            <div class="flex items-center gap-x-4 border-b-[0.5px] border-[#E5E7EB] pb-6">
                <div
                    class="h-[48px] w-[58px] rounded-full flex justify-center items-center text-[#EF4444] bg-[#FEF2F2]">
                    <Icon name="material-symbols:delete" style="scale: 1.5;" />
                </div>
                <div class="flex flex-col w-full">
                    <div class="flex items-center justify-between w-full">
                        <p class="text-[#0F172A] text-2xl font-medium">Rimuovi {{ title }}</p>
                        <button class="cursor-pointer" @click="() => handleBackClick()">
                            <Icon name="gridicons:cross" style="scale: 1.2;" class="text-[#64748B]" />
                        </button>

                    </div>
                    <p class="text-[#64748B] text-xs ">Questa azione è irreversibile.</p>

                </div>
            </div>
            <div class="py-6 gap-y-4 flex flex-col">
                <div class="bg-[#F8FAFC] flex justify-center items-center w-full h-[104px] rounded-[12px]">
                    <slot />

                </div>
                <div class="flex items-center gap-x-2 mt-3">
                    <Icon name="mdi:information" style="scale: 1.2;" class="text-[#F59E0B]" />

                    <p class="text-[#64748B] text-xs ">{{ description }}</p>

                </div>
                <div class="flex items-center gap-x-2">
                    <Icon name="mdi:information" style="scale: 1.2;" class="text-[#3B82F6]" />

                    <p class="text-[#64748B] text-xs ">{{ subDescription }}</p>

                </div>

            </div>
            <div class="flex items-center gap-x-3 mt-2">
                <GenericButton label="Annulla" variant="whiteOutline" size="md" @click="handleBackClick" />
                <GenericButton label="Elimina" variant="danger" size="md" @click="handleNextClick" />

            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import GenericButton from '../buttons/GenericButton.vue';


defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    subDescription: { type: String, default: '' },
    handleBackClick: {
        type: Function,
        default: () => { }
    },

    handleNextClick: {
        type: Function,
        default: () => { }
    }

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
