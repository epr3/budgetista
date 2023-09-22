import { z } from "zod";

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
