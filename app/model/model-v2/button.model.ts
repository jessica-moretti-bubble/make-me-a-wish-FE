import type {
  buttonVariant,
  buttonSize,
} from "~/config/config-v2/button.config";

export type Variant = keyof typeof buttonVariant;

export type Size = keyof typeof buttonSize;
