// lib/actions.ts
"use server";

import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { RegisterSchema } from "./zod";

export const signUpCredentials = async (
  prevState: unknown,
  formdata: FormData
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formdata.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = hashSync(password, 10);

  try {
    // const existing = await prisma.user.findUnique({
    //   where: { email },
    // });

    // if (existing) {
    //   return { error: { email: "Email sudah terdaftar" } };
    // }

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    redirect("/login");
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return { message: "Gagal registrasi. Silakan coba lagi." };
  }
};
