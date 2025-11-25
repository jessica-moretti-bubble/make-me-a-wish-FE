<script setup lang="ts">
import GenericSelectOptions from '../../../common/inputs/GenericSelectOptions.vue';

</script>

<template>
    <div class="bg-white shadow-xl whitespace-nowrap flex px-8 items-center  gap-x-8 w-full py-5 rounded-[16px]">
        <div class="flex items-center gap-x-2 w-full">
            <p>Ordina per:</p>
            <GenericSelectOptions :options="[
                { value: 'priority', label: 'Priorità' },
                { value: 'price', label: 'Prezzo' }
            ]" />
        </div>

        <div class="flex items-center gap-x-2 w-full">
            <p>Filtra per:</p>
            <GenericSelectOptions :options="[
                { value: 'allItems', label: 'Tutti' },
                { value: 'priority', label: 'Priorità' }
            ]" />
        </div>



    </div>
</template>