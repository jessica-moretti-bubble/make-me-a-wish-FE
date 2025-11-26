import z from "zod";

export enum WishlistVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export const WishlistPayloadSchema = z
  .object({
    name: z.string().min(1, "Il nome è obbligatorio"),
    iconName: z.string().optional(),
    notification: z.boolean(),
    specialDateMode: z.boolean(),
    dueDate: z
      .string()
      .optional()
      .refine((v) => !v || !isNaN(new Date(v).getTime()), "Data non valida"),
    description: z.string().optional(),
    color: z.string().optional(),
    visibility: z.enum(
      Object.values(WishlistVisibility) as [string, ...string[]]
    ),
  })
  .superRefine((data, ctx) => {
    if (data.specialDateMode && !data.dueDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dueDate"],
        message: "La data è obbligatoria quando la modalità speciale è attiva",
      });
    }
  });

export type WishlistPayload = z.infer<typeof WishlistPayloadSchema>;
