import { ref } from "vue";
import {
  GiftSchemaPayload,
  type GiftPayload,
} from "~/schemas/payloads/gift.payload.schema";
import {
  GiftResponseSchema,
  type GiftResponse,
} from "~/schemas/responses/gift.response.schema";

export const getWishes = (categoryId: Ref<string | undefined>) => {
  return useFetch<GiftResponse>("http://localhost:3001/wishlists/gifts", {
    method: "GET",
    query: { categoryId },
    key: () => `gifts-${categoryId.value}`,
    transform: (raw) => GiftResponseSchema.parse(raw),
  });
};

export const deleteWish = async (categoryId: string, wishId: string) => {
  const error = ref<Error | null>(null);
  const loading = ref(true);

  await $fetch(
    `http://localhost:3001/wishlists/${categoryId}/gifts/${wishId}`,
    {
      method: "DELETE",
    }
  ).catch((err) => (error.value = err));

  loading.value = false;

  await refreshNuxtData(`gifts-${categoryId}`);

  return { error, loading };
};

export const createWish = async (payload: GiftPayload) => {
  const parsedPayload = GiftSchemaPayload.parse(payload);

  const res = await $fetch(`http://localhost:3001/wishlists/gifts`, {
    method: "POST",
    body: parsedPayload,
  });

  await refreshNuxtData(`gifts-${payload.categoryId}`);

  return res;
};

export const updateGift = async (payload: {
  body: GiftPayload;
  params: { categoryId: string; giftId: string };
}) => {
  const parsedPayload = GiftSchemaPayload.parse(payload.body);

  const url = `http://localhost:3001/wishlists/${payload.params.categoryId}/gifts/${payload.params.giftId}`;

  const error = ref<Error | null>(null);
  const loading = ref(true);

  const res = await $fetch(url, {
    method: "PATCH",
    body: parsedPayload,
  }).catch((err) => {
    error.value = err;
  });

  loading.value = false;

  await refreshNuxtData(`gifts-${payload.params.categoryId}`);

  return { error, loading, res };
};

export const reserveGift = async (
  giftiD: string,
  isReserved: boolean,
  note?: string
) => {
  return await $fetch(`http://localhost:3001/gifts/${giftiD}/reservation`, {
    method: "PATCH",
    body: { isReserved, note },
  });
};
