"use server";
import { prisma } from "./prisma";

import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
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

  const { name, email, password, alamat, no_ktp, no_hp } = validatedFields.data;

  const hashedPassword = hashSync(password, 10);

  // const existing = await prisma.user.findUnique({
  //   where: { email },
  // });

  // if (existing) {
  //   return { error: { email: "Email sudah terdaftar" } };
  // }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        alamat,
        no_ktp,
        no_hp,
      },
    });
    console.log(user);
  } catch (error) {
    console.log(error);
   return { error: { email: "Email sudah terdaftar" } };
  }
  redirect("/login");
};
