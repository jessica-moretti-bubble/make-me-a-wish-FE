import { ref } from "vue";
import {
  GiftSchemaPayload,
  type GiftPayload,
  type GiftQueryPayload,
} from "~/schemas/payloads/gift.payload.schema";
import {
  GiftResponseSchema,
  type GiftResponse,
} from "~/schemas/responses/gift.response.schema";

export const getWishes = async (categoryId: GiftQueryPayload) => {
  const loading = ref(true);

  const error = ref<Error | null>(null);

  const data = ref<GiftResponse | null>(null);

  try {
    const res = await $fetch(`http://localhost:3001/wishlists/gifts`, {
      method: "GET",
      query: { categoryId: categoryId.categoryId },
    });

    const parsed = GiftResponseSchema.parse(res);

    data.value = parsed;
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }

  return { data, error, loading };
};

export const deleteWish = async (categoryId: string, wishId: string) => {
  const loading = ref(true);
  const error = ref<Error | null>(null);

  try {
    await $fetch(
      `http://localhost:3001/wishlists/${categoryId}/gifts/${wishId}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    error.value = err as Error;
    console.log(err, "error");
  } finally {
    loading.value = false;
  }

  return { error, loading };
};

export const createWish = async (payload: GiftPayload) => {
  const loading = ref(true);

  const error = ref<Error | null>(null);

  const parsedPayload = GiftSchemaPayload.parse(payload);

  try {
    await $fetch(`http://localhost:3001/wishlists/gifts`, {
      method: "POST",
      body: parsedPayload,
    });
  } catch (err) {
    error.value = err as Error;
    console.log(err, "errore");
  } finally {
    loading.value = false;
  }

  return { error, loading };
};
