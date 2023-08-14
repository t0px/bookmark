import { z } from "zod";

export const SignupSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(4).max(16),
    age: z.number().min(10).max(75),
    password: z.string().min(4).max(32),
    confirmPassword: z.string().min(4).max(32),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
