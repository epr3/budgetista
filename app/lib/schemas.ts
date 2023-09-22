import { z } from "zod";

export const registerSchema = z.object({
  nickname: z.string({ required_error: "Nickname is required" }).min(1),
  email: z.string({ required_error: "Email is required" }).min(1).email(),
  password: z.string({ required_error: "Password is required" }).min(8),
});

export type RegisterSchema = typeof registerSchema;

export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1).email(),
  password: z.string({ required_error: "Password is required" }).min(1),
});

export type LoginSchema = typeof loginSchema;
