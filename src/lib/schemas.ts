import { z } from "zod";
import { TransactionType } from "./models";

export const registerSchema = z.object({
  nickname: z.string().nonempty(),
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});

export type RegisterSchema = typeof registerSchema;

export const loginSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});

export type LoginSchema = typeof loginSchema;

export const addTransactionSchema = z.object({
  type: z.nativeEnum(TransactionType),
  amount: z.coerce.number().multipleOf(0.01),
  description: z.string(),
  date: z.coerce.date(),
});

export type AddTransactionSchema = typeof addTransactionSchema;

export const updatePasswordSchema = z.object({
  oldPassword: z.string().nonempty(),
  newPassword: z.string().nonempty(),
});

export type UpdatePasswordSchema = typeof updatePasswordSchema;

export const profileSchema = z.object({
  email: z.string().nonempty().email(),
  nickname: z.string().nonempty(),
});

export type ProfileSchema = typeof profileSchema;

export const categorySchema = z.object({
  name: z.string().nonempty(),
  icon: z.string().optional(),
});

export type CategorySchema = typeof categorySchema;
