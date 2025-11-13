import { ref } from "vue";
import {
  type ProfileConfirmationPayload,
  ProfileConfirmationSchemaPayload,
} from "~/schemas/payloads/profile.payload.schema";
import {
  ProfileConfirmationResponseSchema,
  type ProfileConfirmationResponse,
} from "~/schemas/responses/profile.response.schema";

export const useProfileConfirmation = () => {
  const authStore = useAuthStore();

  const loading = ref(false);

  const isSuccess = ref(false);

  const error = ref<Error | null>(null);

  const confirmProfile = async (payload: ProfileConfirmationPayload) => {
    loading.value = true;

    error.value = null;

    const parsedPayload = ProfileConfirmationSchemaPayload.parse(payload);

    return $fetch<ProfileConfirmationResponse>(
      "http://localhost:3001/profile/confirmation",
      {
        method: "PATCH",
        body: parsedPayload,
      }
    )
      .then((res) => {
        const parsed = ProfileConfirmationResponseSchema.parse(res);

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
