<template>
    <AuthHeroWrapper>
        <div class="flex flex-col gap-y-2 justify-center text-white items-center text-center  w-full h-full">
            <Icon name="famicons:gift" style="scale: 5; color: white" />
            <div class="text-center flex flex-col gap-y-6 mt-12 w-[50%]">
                <div class="flex flex-col gap-y-2">
                    <p class="font-bold text-4xl">Benvenuto su</p>
                    <p class="font-bold text-4xl"> Make Me A Wish</p>
                </div>
                <p class="text-[20px] leading-8">Accedi alla tua dashboard e gestisci i tuoi regali con facilità.
                    Un'esperienza
                    moderna e intuitiva ti aspetta.</p>
            </div>

        </div>
    </AuthHeroWrapper>
</template>


<script setup lang="ts">
import AuthHeroWrapper from '../common/wrappers/AuthHeroWrapper.vue';

</script>