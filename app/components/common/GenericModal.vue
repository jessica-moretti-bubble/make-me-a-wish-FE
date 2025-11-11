<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

        <div class="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl
                    p-6 rounded-2xl w-[90%] max-w-md text-center animate-fade-in">

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
