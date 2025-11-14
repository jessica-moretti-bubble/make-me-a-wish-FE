import z from "zod";

export const LoginResponseSchema = z.object({
  token: z.string(),
  profileIsCompleted: z.boolean(),
  googleId: z.string().optional(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
