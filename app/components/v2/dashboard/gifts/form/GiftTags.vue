<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex flex-col gap-y-6">
        <p class="font-semibold">Tags</p>
        <div class="flex items-center gap-x-2 flex-wrap gap-y-2">
            <button v-for="(tag, index) in tags" :key="index" :class="[
                'h-[28px] rounded-full text-sm px-3 transition-colors',
                selectedTag === tag
                    ? 'bg-[#6366F1] text-white'
                    : 'bg-[#E5E7EB] text-gray-800'
            ]" @click="toggleTag(tag)">
                <p>{{ tag }}</p>
            </button>
        </div>
        <form class="flex gap-x-2" @submit.prevent="addTag">
            <GenericInput v-model="newTag" placeholder="Aggiungi tags.." />
            <button type="submit"
                class="px-4 py-2 bg-[#6366F1] text-white rounded-lg text-sm font-medium hover:bg-[#5558E3] transition-colors">
                Aggiungi
            </button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GenericInput from '~/components/v2/common/inputs/GenericInput.vue';

const tags = ref(['Elettronica', 'Gadget', 'Cucina']);

const selectedTag = ref<string | null>(null);

const newTag = ref('');

const toggleTag = (tag: string) => {
    selectedTag.value = selectedTag.value === tag ? null : tag;
};

const addTag = () => {
    if (newTag.value.trim()) {
        tags.value.push(newTag.value.trim());
        newTag.value = '';
    }
};
</script>