import z from "zod";

export const ProfileConfirmationSchemaPayload = z.object({
  username: z.string(),
});

export type ProfileConfirmationPayload = z.infer<
  typeof ProfileConfirmationSchemaPayload
>;
