<template>
    <div
        class="rounded-xl border-5 border-gray-300 border-dotted
             lg:w-[400px] lg:h-[210px] shadow-md hover:shadow-lg hover:-translate-y-[2px] transition flex justify-center items-center flex-col">
        <RouterLink to="/new-wish">
            <Icon name="ic:twotone-plus" style="scale: 3;" class="text-gray-400 mb-6 cursor-pointer" />

        </RouterLink>
        <p class="text-lg font-medium mb-2 text-gray-500">Aggiungi un nuovo regalo</p>
        <p class="text-center text-md text-gray-500">Clicca per aggiungere un nuovo regalo alla tua wishlist</p>


    </div>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router';







</script>