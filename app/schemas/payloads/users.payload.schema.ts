import z from "zod";

export const SearchUsersPayloadParamsSchema = z.object({
  username: z.string().optional(),
});

export type SearchUsersParams = z.infer<typeof SearchUsersPayloadParamsSchema>;
