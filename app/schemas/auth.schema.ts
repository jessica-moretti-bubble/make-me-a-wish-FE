import { z } from "zod";

export const SignupPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  surname: z.string().min(1),
});

export const SignupResponseSchema = z.object({
  message: z.string(),
  id: z.string(),
});

export const LoginPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginResponseSchema = z.object({
  token: z.string(),
  profileIsCompleted: z.boolean(),
});

export const ProfileConfirmationPayloadSchema = z.object({
  username: z.string(),
});

export type SignupPayload = z.infer<typeof SignupPayloadSchema>;
export type SignupResponse = z.infer<typeof SignupResponseSchema>;
export type LoginPayload = z.infer<typeof LoginPayloadSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type ProfileConfirmationPayload = z.infer<
  typeof ProfileConfirmationPayloadSchema
>;
export type ProfileConfirmationResponse = z.infer<
  typeof ProfileConfirmationPayloadSchema
>;
