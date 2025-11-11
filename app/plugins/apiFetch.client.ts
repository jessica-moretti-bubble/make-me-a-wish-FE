export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();

  globalThis.$fetch = $fetch.create({
    onRequest({ request, options }) {
      const token = authStore.accessToken;
      const url = typeof request === "string" ? request : request.url;

      // rotte pubbliche esatte
      const publicEndpoints = [
        "http://localhost:3001/auth/login",
        "http://localhost:3001/auth/register",
      ];

      const isPublic = publicEndpoints.includes(url);

      if (!isPublic && token) {
        const headers = new Headers(options.headers || {});
        headers.set("Authorization", `Bearer ${token}`);
        options.headers = headers;
      }
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        authStore.setToken(undefined);
      }
    },
  });
});
