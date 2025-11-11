import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    if (to.path !== "/login" && to.path !== "/register") {
      return navigateTo("/login");
    }
    return;
  }

  if (auth.isAuthenticated && !auth.profileIsCompleted) {
    if (to.path !== "/profile-confirmation") {
      return navigateTo("/profile-confirmation");
    }
    return;
  }

  if (auth.isCompleted) {
    if (to.path === "/login" || to.path === "/register") {
      return navigateTo("/dashboard");
    }
  }
});
