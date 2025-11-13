import z from "zod";
import { GiftSchema } from "../payloads/gift.payload.schema";

export const WishlistResponseSchema = z.array(
  z.object({
    name: z.string(),
    iconName: z.string(),
    gifts: z.array(GiftSchema),
    _id: z.string(),
  })
);

export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;
