import z, { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(1, "Nama wajib diisi"),
  email: string().email("Format email tidak valid"),
  password: string().min(6, "Password minimal 6 karakter"),
  confirmPassword: string().min(6, "Konfirmasi password minimal 6 karakter"),
  no_hp: string().min(10, "Nomor HP tidak valid"),
  alamat: string().min(1, "Alamat wajib diisi"),
  no_ktp: string().min(16, "Nomor KTP minimal 16 digit"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan konfirmasi tidak cocok",
  path: ["confirmPassword"],
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
