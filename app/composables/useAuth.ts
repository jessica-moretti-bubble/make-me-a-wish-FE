import { ref } from "vue";
import type {
  SignupResponse,
  SignupPayload,
  LoginPayload,
  LoginResponse,
  ProfileConfirmationPayload,
  ProfileConfirmationResponse,
} from "../schemas/auth.schema";
import {
  SignupPayloadSchema,
  SignupResponseSchema,
  LoginPayloadSchema,
  LoginResponseSchema,
  ProfileConfirmationPayloadSchema,
} from "../schemas/auth.schema";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const useSignup = () => {
  const loading = ref(false);

  const error = ref<Error | null>(null);

  const data = ref<SignupResponse | null>(null);

  const isSuccess = ref(false);

  const signup = async (payload: SignupPayload) => {
    loading.value = true;
    error.value = null;

    const parsedPayload = SignupPayloadSchema.parse(payload);

    return $fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: parsedPayload,
    })
      .then((res) => {
        const parsed = SignupResponseSchema.parse(res);

        data.value = parsed;
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

  return { signup, loading, error, data, isSuccess };
};

export const useAuth = () => {
  const authStore = useAuthStore();

  const loading = ref(false);

  const error = ref<Error | null>(null);

  const login = async (payload: LoginPayload) => {
    loading.value = true;

    error.value = null;

    const parsedPayload = LoginPayloadSchema.parse(payload);

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

export const useProfileConfirmation = () => {
  const authStore = useAuthStore();

  const loading = ref(false);

  const isSuccess = ref(false);

  const error = ref<Error | null>(null);

  const confirmProfile = async (payload: ProfileConfirmationPayload) => {
    loading.value = true;

    error.value = null;

    const parsedPayload = ProfileConfirmationPayloadSchema.parse(payload);

    return $fetch<ProfileConfirmationResponse>(
      "http://localhost:3001/auth/register/profileConfirmation",
      {
        method: "PATCH",
        body: parsedPayload,
      }
    )
      .then((res) => {
        const parsed = ProfileConfirmationPayloadSchema.parse(res);

        authStore.setUsername(parsed.username);

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

  return { confirmProfile, loading, error, isSuccess };
};
