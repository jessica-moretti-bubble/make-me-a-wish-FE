<template>
    <div
        class="bg-[linear-gradient(to_bottom_right,#9333ea_0%,#db2777_100%)] flex justify-center items-center size-[40px] rounded-xl">
        <Icon :name="iconName" style="scale: 1.2" class="text-white" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    iconName: {
        type: String,
        default: 'famicons:gift'
    }
})
</script>