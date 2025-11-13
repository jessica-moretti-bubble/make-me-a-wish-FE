import { defineStore } from "pinia";
import type { WishesStore } from "~/model/store.model";
import type { GiftItem } from "~/schemas/payloads/gift.payload.schema";

export const useWishesStore = defineStore("wishes", {
  state: (): WishesStore => ({
    selectedWish: undefined,
    wishes: [],
  }),

  actions: {
    setSelectedWishes(wish: GiftItem) {
      this.selectedWish = wish;
    },

    async fetcHWishes() {
      const wishlistsStore = useWishlistsStore();
      const { data } = await getWishes({
        categoryId: wishlistsStore.selectedCategory?._id ?? "",
      });
      this.wishes = data.value || [];
    },

    async createWishAndRefetch(payload: GiftItem) {
      const wishlistsStore = useWishlistsStore();

      await createWish(payload);
      await wishlistsStore.fetchWishlists();
    },

    async deleteWishAndRefetch(categoryId: string, wishId: string) {
      await deleteWish(categoryId, wishId);
      await this.fetcHWishes();
    },
  },
  persist: true,
});
