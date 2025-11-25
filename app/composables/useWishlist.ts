import { ref } from "vue";
import { WishlistItemSchema, type WishlistItem } from "~/model/wishlist.model";

import {
  UpdateWishlistPayloadSchema,
  type UpdateWishlistPayload,
} from "~/schemas/payloads/wish.payload.schema";
import {
  WishlistResponseSchema,
  type WishlistResponse,
} from "~/schemas/responses/wishlist.response.schema";

export const getWishlists = async () => {
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const data = ref<WishlistResponse | null>(null);

  try {
    const res = await $fetch<WishlistResponse>(
      "http://localhost:3001/wishlists",
      {
        method: "GET",
      }
    );
    const parsed = WishlistResponseSchema.parse(res);
    data.value = parsed;
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }

  return { data, error, loading };
};

export const deleteWishlist = async (id: string) => {
  const loading = ref(true);
  const error = ref<Error | null>(null);

  try {
    await $fetch(`http://localhost:3001/wishlists/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    error.value = err as Error;
    console.log(err, "error");
  } finally {
    loading.value = false;
  }

  return { error, loading };
};

export const createWishlist = async (payload: WishlistItem) => {
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const parsedPayload = WishlistItemSchema.parse(payload);
  const data = ref<WishlistItem>();

  try {
    const response = await $fetch<WishlistItem>(
      `http://localhost:3001/wishlists`,
      {
        method: "POST",
        body: parsedPayload,
      }
    );

    const parsedResponse = WishlistItemSchema.parse(response);

    data.value = parsedResponse;
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }

  return { error, loading, data };
};

export const updateWishlist = async (payload: {
  body: UpdateWishlistPayload;
  categoryId: string;
}) => {
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const parsedPayload = UpdateWishlistPayloadSchema.parse(payload.body);

  try {
    await $fetch(`http://localhost:3001/wishlists/${payload.categoryId}`, {
      method: "PATCH",
      body: parsedPayload,
    });
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }

  return { error, loading };
};
