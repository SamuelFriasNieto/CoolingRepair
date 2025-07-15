"use server";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { createServerAction } from "zsa";

export const googleLoginAction = createServerAction().handler(
 async () => {
    console.log("Iniciando sesión con Google...");
    signIn("google")
 }
);
