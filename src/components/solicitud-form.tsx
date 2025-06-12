import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Solicitud de Reparación/Instalación
          </CardTitle>
          <CardDescription>Rellena aquí tus datos de cliente</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex gap-3">
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="nombre">Nombre</Label>
                  </div>
                  <Input id="nombre" type="text" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="apellido">Apellidos</Label>
                  </div>
                  <Input id="apellido" type="text" required />
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="nif/cif">N.I.F/C.I.F</Label>
                </div>
                <Input id="nif/cif" type="text" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="domicilio">Domicilio</Label>
                </div>
                <Input
                  placeholder="SALVADOR GUINOT 8, P 6"
                  id="domicilio"
                  type="text"
                  required
                />
              </div>
              <div className="flex gap-3">
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="cpostal">C. Postal</Label>
                  </div>
                  <Input id="cpostal" type="text" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="localidad">Localidad</Label>
                  </div>
                  <Input id="localidad" type="text" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="provincia">Provincia</Label>
                  </div>
                  <Input id="provincia" type="text" required />
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="telefono">Teléfono</Label>
                </div>
                <Input id="telefono" type="text" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="email">E-Mail</Label>
                </div>
                <Input id="email" type="email" required />
              </div>

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Enviando los datos de este formulario aceptas nuestra{" "}
        <a href="#">Política de Privacidad</a>.
      </div>
    </div>
  );
}
