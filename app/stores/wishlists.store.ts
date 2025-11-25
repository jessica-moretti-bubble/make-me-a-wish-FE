import { defineStore } from "pinia";
import type { WishlistStore } from "~/model/store.model";
import type { WishlistItem } from "~/model/wishlist.model";
import type { UpdateWishlistPayload } from "~/schemas/payloads/wish.payload.schema";

export const useWishlistsStore = defineStore("wishlists", {
  state: (): WishlistStore => ({
    selectedCategory: undefined,
    showAddWishlistModal: false,
    showUpdateWishlistModal: false,
    categories: [],
  }),

  actions: {
    setSelectedCategory(category: WishlistItem) {
      this.selectedCategory = category;
    },

    setShowAddWishlistModal(show: boolean) {
      this.showAddWishlistModal = show;
    },

    setShowUpdateWishlistModal(show: boolean) {
      this.showUpdateWishlistModal = show;
    },

    async fetchWishlists() {
      const { data } = await getWishlists();
      this.categories = data.value || [];
      if (this.categories.length > 0 && !this.selectedCategory) {
        this.selectedCategory = this.categories[0];
      }
    },

    async createWishlistAndRefetch(payload: WishlistItem) {
      await createWishlist(payload);
      await this.fetchWishlists();
    },

    async updateWishlistAndRefetch(payload: {
      body: UpdateWishlistPayload;
      categoryId: string;
    }) {
      await updateWishlist(payload);
      await this.fetchWishlists();

      const updatedCategory = this.categories.find(
        (c) => c._id === payload.categoryId
      );
      if (updatedCategory) {
        this.selectedCategory = updatedCategory;
      }
    },

    async deleteWishlistAndRefetch(categoryId: string) {
      await deleteWishlist(categoryId);
      await this.fetchWishlists();
      if (this.selectedCategory?._id === categoryId) {
        this.selectedCategory =
          this.categories.length > 0 ? this.categories[0] : undefined;
      }
    },
  },
  persist: true,
});
