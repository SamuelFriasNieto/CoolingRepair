"use server";

import { z } from "zod";
import { SolicitudSchema } from "@/core/solicitud/entities/Solicitud";
import { createServerAction } from "zsa";
import { createSolicitudUseCase } from "@/core/solicitud/features/createSolicitudUseCase";

export const createSolicitudAction = createServerAction()
.input(
    z.object({
        solicitud: SolicitudSchema,
    })
).handler(async ({ input }) => {
    const { solicitud } = input;

        const response = await createSolicitudUseCase(solicitud);
        return {...response};
})