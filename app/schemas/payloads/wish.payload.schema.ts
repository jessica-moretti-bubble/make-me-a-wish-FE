import z from "zod";

export const UpdateWishlistPayloadSchema = z.object({
  name: z.string(),
  iconName: z.string(),
});

export type UpdateWishlistPayload = z.infer<typeof UpdateWishlistPayloadSchema>;
