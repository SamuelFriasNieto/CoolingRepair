import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const MainPageBudgetRequest = () => {
  return (
    <div className="pb-10 ">
      <div className="px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/hero-image1.png"
                alt="Técnico de climatización"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="pr-15">
            <h1 className="text-4xl md:text-4xl font-bold text-on-secondary-container mb-6">
              Expertos en climatización
            </h1>
            <p className="text-lg text-secondary-blue mb-2">
              Servicio rápido, eficaz y sin sorpresas. Solicita tu presupuesto
              gratuito online.
            </p>
            <p className="text-gray-600 mb-8">
              En Cooling Repair <span className="font-semibold">reparamos</span>{" "}
              todo tipo de{" "}
              <span className="font-semibold">sistemas de climatización</span>y{" "}
              <span className="font-semibold">
                calefacción en hogares y negocios
              </span>{" "}
              de Valencia. Nuestro{" "}
              <span className="font-semibold">equipo técnico</span> está
              preparado para resolver{" "}
              <span className="font-semibold">averías</span> de{" "}
              <span className="font-semibold">forma rápida, segura</span> y con{" "}
              <span className="font-semibold">garantía</span>.
            </p>
            <Button className="font-bold bg-primary hover:bg-surface text-white hover:text-primary border cursor-pointer border-primary px-8 py-3 rounded-full">
              SOLICITAR PRESUPUESTO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBudgetRequest;
