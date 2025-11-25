import { defineStore } from "pinia";
import type { ProfileStore } from "~/model/store.model";
import type { Profile } from "~/schemas/responses/profile.response.schema";

export const useProfileStore = defineStore("profiles", {
  state: (): ProfileStore => ({
    selectedProfile: undefined,
    profiles: [],
  }),

  actions: {
    setSelectedProfile(profile: Profile) {
      this.selectedProfile = profile;
    },
    setProfiles(profiles: Profile[]) {
      this.profiles = profiles;
    },
  },
  persist: true,
});
