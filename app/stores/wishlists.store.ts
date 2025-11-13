import { defineStore } from "pinia";
import type { WishlistStore } from "~/model/store.model";
import type { WishlistItem } from "~/model/wishlist.model";
import type { GiftPayload } from "~/schemas/payloads/gift.payload.schema";
import type { UpdateWishlistPayload } from "~/schemas/payloads/wish.payload.schema";

export const useWishlistsStore = defineStore("wishlists", {
  state: (): WishlistStore => ({
    selectedCategory: undefined,
    categories: [],
  }),

  actions: {
    setSelectedCategory(category: WishlistItem) {
      this.selectedCategory = category;
    },

    async fetchWishlists() {
      const { data } = await getWishlists();
      this.categories = data.value || [];
    },

    async createWishlistAndRefetch(payload: WishlistItem) {
      const data = await createWishlist(payload);
      console.log(data, "ooooo");
      await this.fetchWishlists();
    },

    async updateWishlistAndRefetch(payload: {
      body: UpdateWishlistPayload;
      categoryId: string;
    }) {
      await updateWishlist(payload);
      // this.selectedCategory = payload;
      await this.fetchWishlists();
    },

    async deleteWishlistAndRefetch(categoryId: string) {
      await deleteWishlist(categoryId);
      this.selectedCategory = undefined;
      await this.fetchWishlists();
    },

    async updateGiftAndRefetch(payload: {
      body: GiftPayload;
      params: { categoryId: string; giftId: string };
    }) {
      await updateGift({ body: payload.body, params: payload.params });
      // this.selectedCategory = payload;
      await this.fetchWishlists();
    },
  },
  persist: true,
});
