import { defineStore } from "pinia";
import type { WishesStore } from "~/model/store.model";
import type { GiftItem } from "~/schemas/payloads/gift.payload.schema";

export const useWishesStore = defineStore("wishes", {
  state: (): WishesStore => ({
    selectedWish: undefined,
    showAddGiftModal: false,
    showUpdateGiftModal: false,
    wishes: [],
  }),

  actions: {
    setSelectedWishes(wish: GiftItem) {
      this.selectedWish = wish;
    },

    setShowAddGiftModal(show: boolean) {
      this.showAddGiftModal = show;
    },
    setShowUpdateGiftModal(show: boolean) {
      this.showUpdateGiftModal = show;
    },

    setWishes(wishes: GiftItem[]) {
      this.wishes = wishes;
    },
  },
  persist: true,
});
