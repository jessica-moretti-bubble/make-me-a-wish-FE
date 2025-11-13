import { ref } from "vue";

import {
  LoginSchemaPayload,
  RegisterSchemaPayload,
  type LoginPayload,
  type RegisterPayload,
} from "~/schemas/payloads/auth.payload.schema";
import {
  LoginResponseSchema,
  type LoginResponse,
} from "~/schemas/responses/auth.response.schema";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const useSignup = () => {
  const loading = ref(false);

  const error = ref<Error | null>(null);

  const isSuccess = ref(false);

  const signup = async (payload: RegisterPayload) => {
    loading.value = true;
    error.value = null;

    const parsedPayload = RegisterSchemaPayload.parse(payload);

    return $fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: parsedPayload,
    })
      .then(() => {
        isSuccess.value = true;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
        isSuccess.value = true;
      });
  };

  return { signup, loading, error, isSuccess };
};

export const useAuth = () => {
  const authStore = useAuthStore();

  const loading = ref(false);

  const error = ref<Error | null>(null);

  const login = async (payload: LoginPayload) => {
    loading.value = true;

    error.value = null;

    const parsedPayload = LoginSchemaPayload.parse(payload);

    return $fetch<LoginResponse>("http://localhost:3001/auth/login", {
      method: "POST",
      body: parsedPayload,
    })
      .then((res) => {
        const parsed = LoginResponseSchema.parse(res);

        authStore.setToken(parsed.token);

        authStore.setProfileIsCompleted(parsed.profileIsCompleted);
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { login, loading, error };
};
