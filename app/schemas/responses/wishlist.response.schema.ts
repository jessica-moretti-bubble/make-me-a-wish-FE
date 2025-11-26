import z from "zod";
import { GiftSchema } from "../payloads/gift.payload.schema";
import { WishlistVisibility } from "../payloads/wish.payload.schema";

export const WishlistResponseSchema = z.array(
  z.object({
    name: z.string(),
    iconName: z.string(),
    gifts: z.array(GiftSchema),
    _id: z.string(),
    notification: z.boolean(),
    dueDate: z.string().optional(),

    visibility: z.enum(
      Object.values(WishlistVisibility) as [string, ...string[]]
    ),
    specialDateMode: z.boolean(),
    description: z.string().optional(),
    color: z.string().optional(),
  })
);

export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;
