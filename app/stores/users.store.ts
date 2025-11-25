import { defineStore } from "pinia";
import type { UsersStore } from "~/model/store.model";
import type { WishlistItem } from "~/model/wishlist.model";

export const useUsersStore = defineStore("users", {
  state: (): UsersStore => ({
    selectedUserId: undefined,
    selectedCategory: undefined,
  }),

  actions: {
    setSelectedUserId(userId: string) {
      this.selectedUserId = userId;
    },
    setSelectedUserCategory(category: WishlistItem) {
      this.selectedCategory = category;
    },
  },
  persist: true,
});
