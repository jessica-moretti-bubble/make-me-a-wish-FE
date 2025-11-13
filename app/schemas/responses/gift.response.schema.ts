import z from "zod";

export const GiftResponseSchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    categoryId: z.string().optional(),
    imageKey: z.string().optional(),
    isReceived: z.boolean().default(false).optional(),
    location: z
      .object({
        lat: z.string(),
        lng: z.string(),
      })
      .optional(),
    locationUrl: z.string().optional(),
    price: z.number().nonnegative().optional(),
    _id: z.string().optional(),
  })
);

export type GiftResponse = z.infer<typeof GiftResponseSchema>;
