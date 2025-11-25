<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import { onMounted } from 'vue'

const authStore = useAuthStore()

const route = useRoute()

const router = useRouter()

onMounted(() => {
    const token = route.query.token as string

    const completed = route.query.completed === "true"

    if (!token) {
        return router.push('/login')
    }

    authStore.setToken(token)

    authStore.setProfileIsCompleted(completed)

    if (completed) {
        router.push('/dashboard')
    } else {
        router.push('/profile-confirmation')
    }
})
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <p>Autenticazione in corso...</p>
    </div>
</template>
