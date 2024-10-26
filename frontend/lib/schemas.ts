import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email("El email no es válido"),
    username: z.string().min(4, "El nombre de usuario debe tener al menos 4 caracteres").max(20, "El nombre de usuario no puede tener más de 20 caracteres"),
    password: z.string().trim().min(6, "La contraseña debe tener al menos 6 caracteres"),
    repeatPassword: z.string().trim(),
}).refine((data) => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email("El email no es válido"),
    password: z.string().trim().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;