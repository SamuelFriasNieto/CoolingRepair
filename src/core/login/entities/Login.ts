import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Introduce un email").email("Email inválido"),
  password: z.string().min(1, "Introduce una contraseña"),
});

export type Login = z.infer<typeof LoginSchema>;
