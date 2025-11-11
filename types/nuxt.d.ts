export {};

declare module "#app" {
  interface NuxtApp {
    $fetch: typeof globalThis.$fetch;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $fetch: typeof globalThis.$fetch;
  }
}
