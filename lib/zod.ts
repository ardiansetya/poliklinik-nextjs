import z, { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(1, "Name is required"),
    email: string().email("Invalid email address"),
    password: string().min(6, "Password must be at least 6 characters"),
    confirmPassword: string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;