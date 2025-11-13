import type { GiftItem } from "~/schemas/payloads/gift.payload.schema";
import type { WishlistItem } from "./wishlist.model";

export interface AuthStore {
  email?: string;
  name?: string;
  surname?: string;
  username?: string;
  profileId?: string;
  accessToken?: string;
  profileIsCompleted?: boolean;
}

export interface WishlistStore {
  selectedCategory?: WishlistItem;
  categories: WishlistItem[];
}

export interface WishesStore {
  selectedWish?: GiftItem;
  wishes: GiftItem[];
}
