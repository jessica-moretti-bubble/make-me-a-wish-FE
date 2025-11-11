<template>
    <svg class="mini-spinner" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
            <linearGradient :id="gradId" gradientTransform="rotate(145)">
                <stop offset="0%" stop-color="#A8B2FF" />
                <stop offset="70%" stop-color="#8A75FF" />
                <stop offset="100%" stop-color="#6753D9" />
            </linearGradient>
        </defs>

        <circle class="track" cx="50" cy="50" r="40" />
        <circle class="arc" cx="50" cy="50" r="40" :stroke="`url(#${gradId})`" />
    </svg>
</template>

<script setup lang="ts">
const gradId = `gl-${Math.random().toString(36).slice(2, 10)}`
</script>

<style scoped>
.mini-spinner {
    width: 22px;
    height: 22px;
    animation: spin 0.9s linear infinite;
}

.track {
    fill: none;
    stroke: rgba(0, 0, 0, 0.1);
    stroke-width: 9;
}

.arc {
    fill: none;
    stroke-width: 9;
    stroke-linecap: round;
    stroke-dasharray: 160 300;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>