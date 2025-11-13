<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/attributes-order -->
<template>
    <div @click="showModal = true" class="w-full px-5 py-6 flex items-center rounded-xl relative border-3 border-dotted border-gray-400 
               hover:bg-indigo-50 transition-colors cursor-pointer">
        <Icon name="ic:twotone-plus" style="scale: 3;" class="text-gray-400 mb-6 absolute bottom-[5%] left-5" />
        <p class="font-medium ml-8">Aggiungi wishlist</p>



    </div>
    <CreateWishlistModal v-if="showModal" @close="showModal = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateWishlistModal from './CreateWishlistModal.vue'

const showModal = ref(false)
</script>
