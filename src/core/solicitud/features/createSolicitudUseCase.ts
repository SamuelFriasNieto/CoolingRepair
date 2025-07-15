import { SolicitudSchema, Solicitud } from "@/core/solicitud/entities/Solicitud";
import { createSolicitud } from "@/core/solicitud/services/createSolicitud";

export async function createSolicitudUseCase(raw: Solicitud) {
  const data = SolicitudSchema.parse(raw);

  const response = await createSolicitud(data);

  return response;
}