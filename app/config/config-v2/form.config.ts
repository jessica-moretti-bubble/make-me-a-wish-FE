import { WishlistVisibility } from "~/schemas/payloads/wish.payload.schema";

export const createWishlistFormInitialValue = {
  notification: false,
  visibility: WishlistVisibility.PUBLIC,
  color: "",
  description: "",
  dueDate: "",
};
