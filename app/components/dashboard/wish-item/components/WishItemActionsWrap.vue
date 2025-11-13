<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>

    <div class="flex items-center justify-end gap-x-4 w-full">
        <div class="size-10 justify-center items-center rounded-full bg-white flex cursor-pointer">
            <RouterLink :to="`/update-wish/${props.id}`">
                <Icon name="bxs:pencil" class="text-gray-400" />
            </RouterLink>

        </div>
        <div class="size-10 flex justify-center items-center rounded-full bg-white cursor-pointer">
            <Icon v-if="!isLoading" name="fluent:delete-24-filled" style="scale: 1;" class="text-red-500"
                @click="wishesStore.deleteWishAndRefetch(wishlistsStore.selectedCategory?._id ?? '', props.id)" />
            <Loader v-else />
        </div>
    </div>


</template>


<script lang="ts" setup>
import Loader from '~/components/common/Loader.vue';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const wishesStore = useWishesStore()

const wishlistsStore = useWishlistsStore()

const props = defineProps<{
    id: string
}>()

const isLoading = ref(false)

</script>
