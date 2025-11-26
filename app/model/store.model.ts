import type { GiftItem } from "~/schemas/payloads/gift.payload.schema";
import type { WishlistItem } from "./wishlist.model";
import type { Profile } from "~/schemas/responses/profile.response.schema";

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
  showUpdateWishlistModal: boolean;
  showAddWishlistModal: boolean;
  showDeleteWishlistModal: boolean;
}

export interface WishesStore {
  selectedWish?: GiftItem;
  wishes: GiftItem[];
  showAddGiftModal: boolean;
  showUpdateGiftModal: boolean;
  showDeleteGiftModal: boolean;
}

export interface ProfileStore {
  profiles?: Profile[];
  selectedProfile?: Profile;
}

export interface UsersStore {
  selectedUserId?: string;
  selectedCategory?: WishlistItem;
}
