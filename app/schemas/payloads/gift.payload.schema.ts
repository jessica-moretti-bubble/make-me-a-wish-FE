import z from "zod";

export const GiftSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string().optional(),
  imageKey: z.string().optional(),
  reservation: z
    .object({
      userId: z.string().optional(),
      isReserved: z.boolean().default(false),
      note: z.string().optional(),
    })
    .optional(),

  location: z
    .object({
      lat: z.string(),
      lng: z.string(),
    })
    .optional(),
  locationUrl: z.string().optional(),
  price: z.number().nonnegative().optional(),
  _id: z.string().optional(),
});

export const GiftSchemaPayload = GiftSchema;

export const GiftSchemaQueryPayload = z.object({
  categoryId: z.string(),
});

export const GiftReservationPayloadSchema = z.object({
  isReserved: z.boolean().default(false),
  note: z.string().default("").optional(),
});

export type GiftPayload = z.infer<typeof GiftSchemaPayload>;

export type GiftQueryPayload = z.infer<typeof GiftSchemaQueryPayload>;

export type GiftReservationPayload = z.infer<
  typeof GiftReservationPayloadSchema
>;

export type GiftItem = z.infer<typeof GiftSchema>;
