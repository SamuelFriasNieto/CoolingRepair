import { prisma } from "@/lib/prisma";
import { Solicitud } from "@/core/solicitud/entities/Solicitud";

export async function createSolicitud(
  data: Solicitud
) /* : Promise<Solicitud> */ {
  try {
    const solicitud = await prisma.solicitud.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        nif: data.nif,
        domicilio: data.domicilio,
        cpostal: data.cpostal,
        localidad: data.localidad,
        provincia: data.provincia,
        telefono: data.telefono,
        email: data.email,
      },
    });

    return {
      message: "Solicitud generada correctamente",
      data: solicitud,
    };
  } catch (error) {
    console.error("Error al crear la solicitud:");
    throw new Error("Error al crear la solicitud");
  }
}
