import z from "zod";

export const ProfileConfirmationResponseSchema = z.object({
  username: z.string(),
});

export type ProfileConfirmationResponse = z.infer<
  typeof ProfileConfirmationResponseSchema
>;
