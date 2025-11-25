<template>
    <div class="flex flex-col items-center text-center text-gray-500 mt-24">
        <Icon icon="mdi:account-off" class="text-6xl text-red-400 mb-4" />
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">
            Nessun utente trovato 😕
        </h2>
        <p class="text-gray-500">
            Prova a modificare lo username e riprovare.
        </p>
    </div>
</template>


<script lang="ts" setup>

import { Icon } from '@iconify/vue'

</script>