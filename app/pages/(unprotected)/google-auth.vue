<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const authStore = useAuthStore();

const route = useRoute()

const router = useRouter()

const token = route.query.token as string

const completed = route.query.completed === "true"

if (!token) {
    router.push("/login")
}

authStore.setToken(token)

authStore.setProfileIsCompleted(completed)

if (completed) {
    router.push('/dashboard')
} else {
    router.push('/profile-confirmation')
}
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <p>Autenticazione in CORSOOOOO</p>
    </div>
</template>
