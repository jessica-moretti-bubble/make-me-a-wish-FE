<template>

    <GenericModal v-if="show" @close="emit('update:show', false)">

        <div class="flex flex-col gap-y-8">

            <h1 class="text-white text-xl font-semibold">Gestisci profilo</h1>

            <GenericButton label="Esci" @click="handleLogout" />

            <GenericButton label="Chiudi" variant="secondary" @click="emit('update:show', false)" />

        </div>

    </GenericModal>

</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";
import { useRouter } from "vue-router";
import GenericButton from "../common/GenericButton.vue";
import GenericModal from "../common/GenericModal.vue";

defineProps<{ show: boolean }>();

const emit = defineEmits(["update:show"]);

const authStore = useAuthStore();

const router = useRouter();

const handleLogout = () => {

    authStore.clearUser();

    router.push("/");
};
</script>