import z from "zod";

export const RegisterSchemaPayload = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string(),
  surname: z.string(),
});

export const LoginSchemaPayload = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterPayload = z.infer<typeof RegisterSchemaPayload>;
export type LoginPayload = z.infer<typeof LoginSchemaPayload>;
