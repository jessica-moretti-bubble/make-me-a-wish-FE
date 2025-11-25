import z from "zod";
import { WishlistItemSchema } from "~/model/wishlist.model";

export const ProfileConfirmationResponseSchema = z.object({
  username: z.string(),
});

export type ProfileConfirmationResponse = z.infer<
  typeof ProfileConfirmationResponseSchema
>;

export const ProfileResponseSchema = z.object({
  name: z.string(),
  surname: z.string(),
  username: z.string().optional(),
  wishlists: z.array(WishlistItemSchema).optional(),
  userId: z.string().optional(),
});

export type ProfileResponse = z.infer<typeof ProfileResponseSchema>;

export type Profile = z.infer<typeof ProfileResponseSchema>;

export const UserResponseSchema = z.object({
  name: z.string(),
  surname: z.string(),
  username: z.string().optional(),
  wishlists: z.array(z.string()).optional(),
  userId: z.string().optional(),
});

export type UserResponse = z.infer<typeof UserResponseSchema>;

export type Users = z.infer<typeof UserResponseSchema>;

export type User = z.infer<typeof ProfileResponseSchema>;
