import { defineStore } from "pinia";
import type { AuthStore } from "../model/store.model";

export const useAuthStore = defineStore("auth", {
  state: (): AuthStore => ({
    username: undefined,
    email: undefined,
    name: undefined,
    surname: undefined,
    profileId: undefined,
    accessToken: undefined,
    profileIsCompleted: undefined,
  }),

  getters: {
    isAuthenticated: (state) => state.accessToken,
    isCompleted: (state) => state.profileIsCompleted && state.accessToken,
  },

  actions: {
    setUser(payload: AuthStore) {
      const { email, name, surname, profileId, accessToken } = payload;
      this.email = email;
      this.name = name;
      this.surname = surname;
      this.profileId = profileId;
      this.accessToken = accessToken;
    },
    setToken(accessToken?: string) {
      if (accessToken) this.accessToken = accessToken;
    },

    setProfileIsCompleted(profileIsCompleted: boolean) {
      if (profileIsCompleted) this.profileIsCompleted = profileIsCompleted;
    },
    setUsername(username?: string) {
      if (username) this.username = username;
    },
    clearUser() {
      this.username = undefined;
      this.email = undefined;
      this.name = undefined;
      this.surname = undefined;
      this.profileId = undefined;
      this.accessToken = undefined;
      this.profileIsCompleted = undefined;
    },
  },
  persist: true,
});
