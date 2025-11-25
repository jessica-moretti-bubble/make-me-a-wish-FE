<template>

    <div class="size-12 rounded-2xl bg-gradient-primary flex justify-center items-center">
        <Icon :name="iconName" style="scale: 2; color: white;" />
    </div>

</template>


<script setup lang="ts">

defineProps({
    iconName: {
        type: String,
        required: true
    },

})

</script>