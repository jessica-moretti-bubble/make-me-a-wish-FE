import z from "zod";
import { GiftSchema } from "~/schemas/payloads/gift.payload.schema";

export const WishlistItemSchema = z.object({
  name: z.string(),
  iconName: z.string(),
  gifts: z.array(GiftSchema),
  _id: z.string().optional(),
});

export type WishlistItem = z.infer<typeof WishlistItemSchema>;
