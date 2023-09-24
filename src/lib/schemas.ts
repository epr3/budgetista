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
