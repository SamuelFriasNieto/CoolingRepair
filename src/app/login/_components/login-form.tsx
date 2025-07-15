"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login, LoginSchema } from "@/core/login/entities/Login"
import { useServerAction } from "zsa-react";
import { signIn, useSession } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit, formState: { errors } } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: Login) => {
    console.log("Datos validados:", data);
  };

  const { data: session } = useSession();
  console.log("Session data:", session);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Inicia sesión en tu cuenta</CardTitle>
          <CardDescription>
            Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Has olvidado tu contraseña?
                  </a>
                </div>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button variant={"primary"} type="submit" className="w-full">
                  Iniciar sesión
                </Button>
                <Button type="button" onClick={()=> signIn("google")} variant="outline" className="w-full">
                  Iniciar sesión con Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              No tienes una cuenta?{" "}
              <a href="#" className="underline underline-offset-4">
                Regístrate
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
