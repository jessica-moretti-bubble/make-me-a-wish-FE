<!-- eslint-disable vue/attributes-order -->
<!-- template -->
<template>
    <fieldset class="flex items-center gap-x-4">
        <legend>Cambia lo stato del regalo:</legend>
        <input type="radio" id="received" :value="true" v-model="model" />
        <label for="received">Ricevuto</label>
        <input type="radio" id="not-received" :value="false" v-model="model" />
        <label for="not-received">Non ricevuto</label>
    </fieldset>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
</script>