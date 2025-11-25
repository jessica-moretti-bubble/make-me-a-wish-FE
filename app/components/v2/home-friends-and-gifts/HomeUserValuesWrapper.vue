<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="flex items-center gap-x-6 flex-nowrap">
        <HomeUserValue title="Totale amici" :values="0" icon-name="flowbite:users-solid"
            :type="HomeValuesType.TOTAL_FRIENDS" />
        <HomeUserValue title="Richieste di amicizia" :values="0" icon-name="icon-park-outline:friends-circle"
            :type="HomeValuesType.FRIENDS_REQUESTS" />
        <HomeUserValue title="Regali prenotati" :values="0" icon-name="tabler:gift-filled"
            :type="HomeValuesType.RESERVED_GIFTS" />
        <HomeUserValue title="Eventi in arrivo" :values="0" icon-name="material-symbols:alarm"
            :type="HomeValuesType.UPCOMING_EVENTS" />

    </div>
</template>


<script setup lang="ts">
import HomeUserValue from '~/components/v2/home-friends-and-gifts/HomeUserValue.vue';
import { HomeValuesType } from '~/model/model-v2/home-friends-and-gifts.model';



</script>
