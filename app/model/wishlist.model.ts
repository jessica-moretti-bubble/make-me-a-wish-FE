import z from "zod";
import { GiftSchema } from "~/schemas/payloads/gift.payload.schema";
import { WishlistVisibility } from "~/schemas/payloads/wish.payload.schema";

export const WishlistItemSchema = z.object({
  name: z.string(),
  iconName: z.string(),
  gifts: z.array(GiftSchema),
  _id: z.string().optional(),
  notification: z.boolean(),
  specialDateMode: z.boolean(),
  dueDate: z.string().optional(),

  visibility: z.enum(
    Object.values(WishlistVisibility) as [string, ...string[]]
  ),
  description: z
    .string()

    .optional(),
  color: z
    .string()

    .optional(),
});

export type WishlistItem = z.infer<typeof WishlistItemSchema>;
