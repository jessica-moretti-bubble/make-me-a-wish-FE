import { ref } from "vue";
import {
  ProfileResponseSchema,
  UserResponseSchema,
  type User,
  type Users,
} from "~/schemas/responses/profile.response.schema";

export const getUsers = async (username: string) => {
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const data = ref<Users[] | null>(null);

  try {
    const res = await $fetch(`http://localhost:3001/users`, {
      method: "GET",
      query: { username },
    });

    const parsed = UserResponseSchema.array().parse(res);

    data.value = parsed;
  } catch (err) {
    error.value = err as Error;
    console.error(err);
  } finally {
    loading.value = false;
  }

  return { data, error, loading };
};
export const getUser = async (userId: string) => {
  const {
    data,
    error,
    pending: loading,
  } = await useFetch<User>(`http://localhost:3001/users/${userId}`, {
    method: "GET",
    key: `get-user-${userId}`,
    transform: (raw) => ProfileResponseSchema.parse(raw),
  });

  return { data, error, loading };
};
