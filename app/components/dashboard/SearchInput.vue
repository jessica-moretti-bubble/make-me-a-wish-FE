<template>
    <div class="relative w-full">
        <input v-model="query" type="text" placeholder="Search friends..." class="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-500
             focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" @input="onInput">

        <Icon name="bx:search" style="scale: 1.2; "
            class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const query = ref('')
const emit = defineEmits(['update'])

function onInput() {
    emit('update', query.value)
}
</script>