import z from "zod";

export const GiftSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string().optional(),
  imageKey: z.string().optional(),
  isReceived: z.boolean().default(false).optional(),
  location: z.string().optional(),
  locationUrl: z.string().optional(),
  price: z.number().nonnegative().optional(),
  _id: z.string().optional(),
});

export const GiftSchemaPayload = GiftSchema;

export const GiftSchemaQueryPayload = z.object({
  categoryId: z.string(),
});

export type GiftPayload = z.infer<typeof GiftSchemaPayload>;

export type GiftQueryPayload = z.infer<typeof GiftSchemaQueryPayload>;

export type GiftItem = z.infer<typeof GiftSchema>;
