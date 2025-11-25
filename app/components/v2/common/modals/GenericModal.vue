<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

        <div class="bg-white  shadow-2xl lg:w-[50%] overflow-scroll lg:max-h-[90%]
                    p-8 rounded-2xl animate-fade-in">

            <slot />

        </div>
    </div>
</template>

<script setup lang="ts">





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
